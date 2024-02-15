/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: '/next',
    assetPrefix: '/next/',
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return '0.0.1'
    },
};

module.exports = nextConfig;
