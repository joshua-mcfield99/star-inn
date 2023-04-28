const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    const { name, email, message, cv } = req.body;
    console.log(req);
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });
    
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: "New Job Application",
        text: `You have received a new job application from ${name} (${email}). Their message: ${message}`,
        attachments: [
            {
                filename: req.cv.originalname,
                content: req.cv.buffer,
            },
        ],
    };
    
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json("Your application has been submitted successfully.");
    } catch (error) {
        res.status(500).json("Something went wrong. Please try again later.");
    }
}