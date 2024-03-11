/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
          },
        ],
      },
      env: {
        GITHUB_APP_CLIENT_ID: process.env.GITHUB_APP_CLIENT_ID,
        GITHUB_APP_CLIENT_SECRET: process.env.GITHUB_APP_CLIENT_SECRET,
        GITHUB_APP_ID: process.env.GITHUB_APP_ID,
        GITHUB_APP_PRIVATE_KEY: process.env.GITHUB_APP_PRIVATE_KEY,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      },
};

export default nextConfig;
