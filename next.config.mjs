/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "staticportal.vnpt.vn",
      },
    ],
  },
};

export default nextConfig;
