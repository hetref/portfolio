/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hetref.github.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
