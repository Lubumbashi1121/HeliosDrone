const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors()); 


app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body; 

  // Create the transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: 'cpanel23.rackforest.com', // Your SMTP server
    port: 465, // SSL Port for secure connection
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER, // noreply@company.com
      pass: process.env.EMAIL_PASS, // App password or email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,  // The noreply email
    to: "info@heliosdrone.hu", // Email where you want to receive submissions
    subject: "Új üzenet",
    text: `Név: ${name}\nEmail: ${email}\nÜzenet: ${message}`,
    replyTo: email,  // This ensures when you reply, it goes to the user's email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Üzenet elküldve!" });
  } catch (error) {
    res.status(500).json({ message: "Hiba történt az üzenet küldésekor.", error });
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
