/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'camo.githubusercontent.com',
                port: '',
                pathname: '/*/**',
            },
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
                port: '',
                pathname: '/*',
            }
        ],
    },
};

export default nextConfig;
