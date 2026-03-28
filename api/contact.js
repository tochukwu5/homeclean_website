// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' })
//   }

//   const { name, email, phone, message } = req.body

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: 'name, email and message are required.' })
//   }

//   try {
//     // Notify you (owner)
//     await resend.emails.send({
//       from: 'Perth Kleeners <onboarding@resend.dev>',
//       to: process.env.OWNER_EMAIL,
//       subject: `New Contact Message from ${name}`,
//       html: `
//         <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
//           <div style="background:#00b496;padding:24px;border-radius:12px 12px 0 0;">
//             <h2 style="color:white;margin:0;">New Contact Message</h2>
//           </div>
//           <div style="background:#f9fafb;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
//             <p><strong>Message:</strong></p>
//             <p style="background:white;padding:16px;border-radius:8px;">${message}</p>
//           </div>
//         </div>
//       `,
//     })

//     // Auto-reply to customer
//     await resend.emails.send({
//       from: 'Perth Kleeners <onboarding@resend.dev>',
//       to: email,
//       subject: `Thanks for reaching out, ${name}!`,
//       html: `
//         <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
//           <div style="background:#00b496;padding:24px;border-radius:12px 12px 0 0;">
//             <h2 style="color:white;margin:0;">We got your message!</h2>
//           </div>
//           <div style="background:#f9fafb;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">
//             <p>Hi <strong>${name}</strong>,</p>
//             <p>Thanks for contacting Perth Kleeners! We'll get back to you within <strong>24 hours</strong>.</p>
//             <p>Best regards,<br/><strong>The Perth Kleeners Team</strong></p>
//           </div>
//         </div>
//       `,
//     })

//     return res.status(200).json({ success: true, message: 'Message sent!' })
//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({ error: 'Failed to send email.' })
//   }
// }

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

  // ── Email 1: Notify YOU (owner) ──
  // to: YOUR email, content: customer details so you know who contacted you
  try {
    await resend.emails.send({
      from: 'Perth Kleeners <onboarding@resend.dev>',
      to: process.env.OWNER_EMAIL,
      subject: `📩 New Contact Message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#00b496;padding:24px;border-radius:12px 12px 0 0;">
            <h2 style="color:white;margin:0;">📩 New Contact Message</h2>
            <p style="color:white;margin:8px 0 0;font-size:14px;">Someone filled out the contact form on your website</p>
          </div>
          <div style="background:#f9fafb;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">
            <p style="margin:0 0 12px;"><strong>Name:</strong> ${name}</p>
            <p style="margin:0 0 12px;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#00b496;">${email}</a></p>
            <p style="margin:0 0 12px;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p style="margin:0 0 8px;"><strong>Their Message:</strong></p>
            <p style="background:white;padding:16px;border-radius:8px;border:1px solid #e5e7eb;margin:0;">${message}</p>
            <p style="margin:16px 0 0;font-size:13px;color:#6b7280;">
              Reply directly to this customer: <a href="mailto:${email}" style="color:#00b496;">${email}</a>
            </p>
          </div>
        </div>
      `,
    })
  } catch (ownerEmailErr) {
    console.error('Owner notification email failed:', ownerEmailErr)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }

  // ── Email 2: Auto-reply to customer ──
  // to: CUSTOMER email, content: thank you message for them
  // NOTE: Only works after domain is verified on Resend
  try {
    await resend.emails.send({
      from: 'Perth Kleeners <onboarding@resend.dev>',
      to: email,
      subject: `Thanks for reaching out, ${name}! 🧹`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#00b496;padding:24px;border-radius:12px 12px 0 0;">
            <h2 style="color:white;margin:0;">We got your message!</h2>
            <p style="color:white;margin:8px 0 0;font-size:14px;">Thanks for contacting Perth Kleeners</p>
          </div>
          <div style="background:#f9fafb;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thanks for getting in touch with <strong>Perth Kleeners</strong>! We have received your message and will get back to you within <strong>24 hours</strong>.</p>
            <p>If you need urgent assistance, feel free to call us directly.</p>
            <p style="margin-top:24px;">Best regards,<br/><strong>The Perth Kleeners Team</strong></p>
          </div>
        </div>
      `,
    })
  } catch (customerEmailErr) {
    // Fails silently until domain is verified — does not break the function
    console.error('Customer auto-reply failed (verify domain to fix this):', customerEmailErr)
  }

  return res.status(200).json({ success: true, message: 'Message sent!' })
}