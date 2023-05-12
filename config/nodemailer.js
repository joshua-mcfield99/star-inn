import nodemailer from 'nodemailer';

const email = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;

exports.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass,
    },
})

exports.mailOptions = {
    from: email,
    to: email,
}