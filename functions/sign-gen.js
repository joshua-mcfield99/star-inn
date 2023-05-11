import cloudinary from 'cloudinary';

exports.handler = (req, res) => {
  const { timestamp, upload_preset } = req.query;
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      upload_preset: upload_preset,
    },
    process.env.REACT_APP_CLOUD_SEC
  );

  res.status(200).json({ signature });
}
