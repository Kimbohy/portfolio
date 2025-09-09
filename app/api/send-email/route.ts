import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    return NextResponse.json(
      { message: "Email configuration missing" },
      { status: 500 }
    );
  }

  try {
    const { name, email, message } = await request.json();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio, New Message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f4f4f4;
            }
            .container {
              background-color: #ffffff;
              padding: 30px;
              border-radius: 10px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
              margin: -30px -30px 30px -30px;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 300;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background-color: #f8f9fa;
              border-radius: 5px;
              border-left: 4px solid #667eea;
            }
            .field-label {
              font-weight: bold;
              color: #667eea;
              margin-bottom: 5px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .field-value {
              font-size: 16px;
              color: #333;
              margin: 0;
            }
            .message-content {
              background-color: #f8f9fa;
              padding: 20px;
              border-radius: 5px;
              border-left: 4px solid #764ba2;
              font-style: italic;
              white-space: pre-wrap;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #eee;
              text-align: center;
              color: #666;
              font-size: 14px;
            }
            .reply-button {
              display: inline-block;
              background-color: #667eea;
              color: white;
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 5px;
              margin-top: 20px;
              font-weight: bold;
              transition: background-color 0.3s;
            }
            .reply-button:hover {
              background-color: #5a6fd8;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Contact Message</h1>
            </div>
            
            <div class="field">
              <div class="field-label">From</div>
              <p class="field-value">${name}</p>
            </div>
            
            <div class="field">
              <div class="field-label">Email Address</div>
              <p class="field-value">${email}</p>
            </div>
            
            <div class="field">
              <div class="field-label">Message</div>
              <div class="message-content">${message.replace(
                /\n/g,
                "<br>"
              )}</div>
            </div>
            
            <div style="text-align: center;">
              <a href="mailto:${email}" class="reply-button">Reply to ${name}</a>
            </div>
            
            <div class="footer">
              <p>This message was sent from your portfolio contact form on ${new Date().toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
