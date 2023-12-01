import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL

export async function POST(req, res) {
  const { name, email, subject, message } = await req.json()
  console.log(email, subject, message)

  // Enhanced HTML template for the email
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          background-color: #ffffff;
          margin: 0;
          padding: 0;
          color: #333333;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background-color: #f9f9f9;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
          border: 1px solid #ddd;
          text-align: center;
          min-height: 100vh;
        }
        h1 {
          color: #4a47a3;
          font-size: 28px;
          margin-bottom: 10px;
        }
        h2, h3, h4, h5 {
          color: #333;
        }
        p {
          line-height: 1.6;
        }
        .footer {
          text-align: center;
          font-size: 14px;
          color: #888;
          margin-top: 30px;
        }
        .footer a {
          color: #4a47a3;
          text-decoration: none;
        }
        .hero-image {
          max-width: 450px;
          max-height: 350px;
          margin-bottom: 20px;
          border: 3px solid #ddd;
        }
        .message-content {
          text-align: left;
          margin-top: 20px;
          background-color: #ffffff;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="https://dripify.io/wp-content/uploads/2022/06/62.png" alt="hero image" class="hero-image">
   
        <h2> Hi ${name}, Glad to be connected!</h2>
        <p>Thank you for reaching out to me.  I have received your message and will get back to you as soon as possible.</p>
        <div class="message-content">
          <h2><strong>Subject:</strong></h2>
          <p>${subject}</p>
          <h2><strong>Your Message:</strong></h2>
          <p>${message}</p>
        </div>
        <div class="footer">
          <p>Connect with me  on <a href="https://www.linkedin.com/in/pratikupreti/">LinkedIn</a></p>
        </div>
      </div>
    </body>
    </html>
  `

  try {
    const data = await resend.emails.send({
      from: `Pratik Upreti <${fromEmail}>`,
      to: [fromEmail, email],
      subject: subject,
      html: emailHtml, // Send HTML content
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
