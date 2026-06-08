import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = parseInt(process.env.PORT, 10) || 4000
const EMAIL_TO = process.env.CONTACT_EMAIL_TO || 'henryndaga62@gmail.com'
const EMAIL_FROM = process.env.SMTP_FROM || `Savella Website <no-reply@${process.env.SMTP_HOST || 'savella.example'}>`

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

let transporter
let isUsingEthereal = false

async function getTransporter() {
  if (transporter) return transporter

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  } else {
    const testAccount = await nodemailer.createTestAccount()
    transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    })
    isUsingEthereal = true
    console.log('Using Ethereal SMTP test account for email delivery.')
    console.log('Preview emails at:', testAccount.web)
  }

  return transporter
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, eventType, date, message } = req.body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  if (!isValidEmail(email.trim())) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  console.log('Contact request received:')
  console.log({ name, email, phone, eventType, date, message })

  try {
    const transporter = await getTransporter()
    const info = await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Savella contact request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nEvent type: ${eventType}\nDate: ${date || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Event type:</strong> ${eventType}</p>
        <p><strong>Date:</strong> ${date || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `.trim(),
    })

    if (isUsingEthereal) {
      console.log('Email preview URL:', nodemailer.getTestMessageUrl(info))
    }

    return res.json({ success: true, message: 'Contact request received.' })
  } catch (error) {
    console.error('Email send failed:', error)
    return res.status(500).json({ error: 'Unable to send your request. Please try again later.' })
  }
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Contact backend running on http://localhost:${PORT}`)
})
