const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = 5000;

const http = require("http").createServer(app);


const cors = require("cors");
const path = require("path");

// Enable CORS
app.use(cors());

app.use(express.json());

// Initialize Nodemailer transporter with your email service credentials
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., 'Gmail'
  auth: {
    user: process.env.EMAIL, // Your email address
    pass: process.env.EMAIL_PASSWORD, // Your email password
  },
});

// API endpoint to send emails
app.post("/send-email", (req, res) => {
  const { user_name, user_email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.REC_EMAIL, // Recipient's email address
    subject: "New Contact Form Submission",
    text: `Name: ${user_name}\nEmail: ${user_email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Email sending failed" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
});

// Serve the frontend
app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

http.listen(PORT, () => {
  console.log("Server is listening on " + PORT);
});