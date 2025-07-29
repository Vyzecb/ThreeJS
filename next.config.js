/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  images: {
    domains: [], // voeg hier je externe domeinen toe indien nodig
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
