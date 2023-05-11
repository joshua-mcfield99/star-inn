import cloudinary from 'cloudinary';

export default async function handler(req, res) {
  const { timestamp, upload_preset } = req.query;

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      upload_preset: upload_preset,
    },
    process.env.CLOUD_SEC
  );

  res.status(200).json({ signature });
}