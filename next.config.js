/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["https://pcaviso.com", "pcaviso.com"],
  },
};

module.exports = nextConfig;
