"use server";

import nodemailer from "nodemailer";

export async function sendFeedback(formData) {
  try {
    let transporter;
    let testAccount;
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtp.gmail.email",
        port: process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 587,
        secure: process.env.EMAIL_SECURE === "true" || false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else {
      testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.gmail.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    // Prepare email content
    const mailOptions = {
      from: `" Dear Journal" <${
        process.env.EMAIL_FROM || "mainasusan520@gmail.com"
      }>`,
      to: process.env.EMAIL_TO || "mainasusan520@gmail.com",
      subject: `Journal Feedback: ${formData.journalType}`,
      text: `\nName: ${formData.name}\nEmail: ${formData.email}\nJournal Type: ${formData.journalType}\n\nMessage:\n${formData.message}`,
      html: `
        <h2>New Journal Feedback</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Journal Type:</strong> ${formData.journalType}</p>
        <h3>Message:</h3>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // For test accounts, log the URL where the email can be previewed
    if (testAccount) {
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    };
  }
}
