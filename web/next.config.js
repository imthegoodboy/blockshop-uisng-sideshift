/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add an empty turbopack config to avoid Turbopack/webpack conflict in Next.js 16+
  turbopack: {},
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      '@react-native-async-storage/async-storage': false,
      'pino-pretty': false,
    };
    return config;
  },
};

module.exports = nextConfig;
