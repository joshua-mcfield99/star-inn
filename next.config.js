const { NetlifyAdapter } = require('@vercel/adapter-netlify');

module.exports = {
    reactStrictMode: true,
    adapter: new NetlifyAdapter(),
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/api/:path*',
            },
        ];
    },
};