/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  swcMinify: true,
  output: "standalone",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    typedRoutes: true,
    turbo: true,
  },
};
