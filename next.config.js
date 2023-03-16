/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["pcaviso.com"],
  },
};

module.exports = nextConfig;
