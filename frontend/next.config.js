/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    STRAPI_API: process.env.STRAPI_API,
    JWT_SECRET: process.env.JWT_SERCRET,
  },
};

module.exports = nextConfig;
