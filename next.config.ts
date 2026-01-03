/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],

    // 👇 ADD THESE
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536, 1920, 2560, 3840],

    imageSizes: [16, 32, 48, 64, 96, 128, 256],

    qualities: [75, 90, 100],
  },
};

module.exports = nextConfig;
