const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

router.post("/api/signin", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(400).json("please fill the data");
  }
  try {
    console.log("start signup process");
     
      
      const mailOptions = {
        from: "bhanuaggarwal47@gmail.com",
        to: email,
        subject: "Thanks For Subscribing",
        html: `<div><p>Thanks for subscribing</p> <h3></h3></div>`,
      };

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error.message);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      res.status(201).json({
        status: 201,
        message: "otp sent for signup",
      });
    
  } catch (err) {
    res.status(404).json(err);
    console.log("catched an error during signup");
  }
});
module.exports = router;
