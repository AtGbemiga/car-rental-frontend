/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Add 'res.cloudinary.com' to the list of allowed domains
  },
};

module.exports = nextConfig;
