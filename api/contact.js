import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required.' })
  }

  try {
    // Notify you (owner)
    await resend.emails.send({
      from: 'Perth Kleeners <onboarding@resend.dev>',
      to: process.env.OWNER_EMAIL,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#00b496;padding:24px;border-radius:12px 12px 0 0;">
            <h2 style="color:white;margin:0;">New Contact Message</h2>
          </div>
          <div style="background:#f9fafb;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p style="background:white;padding:16px;border-radius:8px;">${message}</p>
          </div>
        </div>
      `,
    })

    // Auto-reply to customer
    await resend.emails.send({
      from: 'Perth Kleeners <onboarding@resend.dev>',
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#00b496;padding:24px;border-radius:12px 12px 0 0;">
            <h2 style="color:white;margin:0;">We got your message!</h2>
          </div>
          <div style="background:#f9fafb;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thanks for contacting Perth Kleeners! We'll get back to you within <strong>24 hours</strong>.</p>
            <p>Best regards,<br/><strong>The Perth Kleeners Team</strong></p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true, message: 'Message sent!' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Failed to send email.' })
  }
}