module.exports = {
    reactStrictMode: true,
    target: 'serverless',
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/api/:path*',
            },
        ];
    },
};