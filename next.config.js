/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                fallback: 'file-loader',
                publicPath: '/_next',
                outputPath: 'static/media',
                name: '[name].[hash].[ext]',
              },
            },
          ],
        });
      }
  
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/images',
              outputPath: 'static/images',
              name: '[name].[hash].[ext]',
            },
          },
        ],
      });
      
      return config;
    },
  };
  
  module.exports = nextConfig;