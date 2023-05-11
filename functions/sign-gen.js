import cloudinary from 'cloudinary';

exports.handler = (req, res) => {
    const timestamp = req.query.timestamp;
    const upload_preset = req.query.upload_preset
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      upload_preset: upload_preset,
    },
    process.env.REACT_APP_CLOUD_SEC
  );

  res.status(200).json({ signature });
}
