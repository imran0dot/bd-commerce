/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_URI: 'http://localhost:1337'
    },
    images: {
        domains: ['localhost'],
    }
};

export default nextConfig;
