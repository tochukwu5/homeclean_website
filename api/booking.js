import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, address, service, date, time, notes } = req.body

  if (!name || !email || !phone || !service || !date || !time) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  try {
    // Notify you (owner)
    await resend.emails.send({
      from: 'Perth Kleeners <onboarding@resend.dev>',
      to: process.env.OWNER_EMAIL,
      subject: `New Booking from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#00b496;padding:24px;border-radius:12px 12px 0 0;">
            <h2 style="color:white;margin:0;">New Booking Request</h2>
          </div>
          <div style="background:#f9fafb;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address || 'N/A'}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
          </div>
        </div>
      `,
    })

    // Confirmation to customer
    await resend.emails.send({
      from: 'Perth Kleeners <hello@perthkleeners.com>',
      to: email,
      subject: `Booking Confirmed — ${service}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#00b496;padding:24px;border-radius:12px 12px 0 0;">
            <h2 style="color:white;margin:0;">Booking Confirmed!</h2>
          </div>
          <div style="background:#f9fafb;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">
            <p>Hi <strong>${name}</strong>, your booking is confirmed!</p>
            <div style="background:white;padding:16px;border-radius:8px;border:1px solid #e5e7eb;margin:16px 0;">
              <p style="margin:4px 0;"><strong>Service:</strong> ${service}</p>
              <p style="margin:4px 0;"><strong>Date:</strong> ${date}</p>
              <p style="margin:4px 0;"><strong>Time:</strong> ${time}</p>
              <p style="margin:4px 0;"><strong>Address:</strong> ${address || 'N/A'}</p>
            </div>
            <p>See you soon!<br/><strong>The Perth Kleeners Team</strong></p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true, message: 'Booking confirmed!' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Failed to send email.' })
  }
}