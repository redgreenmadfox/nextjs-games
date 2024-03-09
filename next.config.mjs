/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2norla3tyc4cn.cloudfront.net',
      },
    ]
  }
};

export default nextConfig;
