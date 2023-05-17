const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const generateEmailContent = (data) => {
  return {
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    html: `<html><body><h2>Job Application</h2><p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p></body></html>`,
  };
};

exports.handler = async (req, res) => {
  if (req.httpMethod === "POST") {
    const data = JSON.parse(req.body);
    console.log("Received data:", data);
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Bad request" }),
      };
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: "Job application",
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 400,
        body: JSON.stringify({ message: error.message }),
      };
    }
  }

  console.log("Invalid request:", req.body);
  return {
    statusCode: 400,
    body: JSON.stringify({ message: "Bad request" }),
  };
};