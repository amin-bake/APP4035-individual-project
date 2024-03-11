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
        GITHUB_APP_CLIENT_ID: 'Iv1.27a1533ad27e3084',
        GITHUB_APP_CLIENT_SECRET: '44e6d9cbcf2674bc75cbf513a5d1603387c51ddc',
        NEXTAUTH_SECRET: '2Pq9EklVte2Qi3IRZLKx04ITxiPgfynhfUlITh0SL4o=',
      },
};

export default nextConfig;
