// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, product, brand, howBroken, transport, date, time } = req.body;

    // Create a transporter object using your email service (e.g., Gmail SMTP)
    let transporter = nodemailer.createTransport({
      service: 'gmail', // Or any email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Create the email content
    const message = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Donation Details',
      text: `
        Hello ${firstName} ${lastName},

        Thank you for your donation! Here are the details for your records:

        Contact Information:
        - Name: ${firstName} ${lastName}
        - Email: ${email}
        - Phone #: ${phoneNumber}

        Donation:
        - Item: ${brand} ${product}
        - Condition: ${howBroken}

        Transport:
        - Method: ${transport}
        ${transport === 'Drop-Off' ? 'Drop-Off Location: 123 Donation Center, Main Street' : ''}
        ${transport === 'Pick Up' ? 'Pick-Up Company: Donation Pickups Inc.\nPick-Up Date & Time: ' + date + ' at ' + time : ''}
        ${transport === 'Delivery Service' ? 'Delivery Company: FastShip Delivery\nTracking Number: ABC123456789' : ''}

        Date: ${date}
        Time: ${time}

        Best regards,
        Your Donation Team
      `,
    };

    // Send the email
    try {
      await transporter.sendMail(message);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
