import express from 'express';
import multer from 'multer';
import { mailOptions, transporter } from '@/config/nodemailer';
import typeis from 'type-is';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

const handler = upload.none()(async (req, res) => {
  console.log('Request received');
  if (!typeis(req, ['multipart/form-data'])) {
    console.log('Invalid content type');
    return res.status(400).json({ message: 'Invalid content type' });
  }

  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    const cv = req.file;

    if (!email || !name || !message || !cv) {
      console.log('Bad request');
      return res.status(400).json({ message: 'Bad request' });
    }

    try {
      console.log('Sending email...');
      await transporter.sendMail({
        ...mailOptions,
        to: email,
        subject: 'Job application',
        text: message,
        html: `<h1>${name} applied for a job</h1><p>${message}</p>`,
        attachments: [
          {
            filename: cv.originalname,
            content: cv.buffer,
          },
        ],
      });

      console.log('Email sent successfully');
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(`Error sending email: ${error.message}`);
      return res.status(400).json({ message: error.message });
    }
  }

  console.log('Bad request');
  return res.status(400).json({ message: 'Bad request' });
});

export default handler;