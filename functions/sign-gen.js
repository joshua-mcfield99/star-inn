import cloudinary from 'cloudinary';

exports.handler = async (event, context) => {
  try {
    const { timestamp, upload_preset } = event.queryStringParameters;

    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp,
        upload_preset: upload_preset,
      },
      process.env.CLOUD_SEC 
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ signature }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};