"use server"

import nodemailer from "nodemailer"

export async function sendFeedback(formData) {
  try {
    // Create a test account if no email credentials are provided
    // In production, you would use your actual email credentials
    const testAccount = await nodemailer.createTestAccount()

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.ethereal.email",
      port: process.env.EMAIL_PORT || 587,
      secure: process.env.EMAIL_SECURE === "true" || false,
      auth: {
        user: process.env.EMAIL_USER || testAccount.user,
        pass: process.env.EMAIL_PASS || testAccount.pass,
      },
    })

    // Prepare email content
    const mailOptions = {
      from: `"Journal Website" <${process.env.EMAIL_FROM || "journals@example.com"}>`,
      to: process.env.EMAIL_TO || "admin@example.com", // Replace with your email
      subject: `Journal Feedback: ${formData.journalType}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Journal Type: ${formData.journalType}
        
        Message:
        ${formData.message}
      `,
      html: `
        <h2>New Journal Feedback</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Journal Type:</strong> ${formData.journalType}</p>
        <h3>Message:</h3>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send the email
    const info = await transporter.sendMail(mailOptions)

    console.log("Message sent: %s", info.messageId)

    // For test accounts, log the URL where the email can be previewed
    if (!process.env.EMAIL_USER) {
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    }
  }
}
