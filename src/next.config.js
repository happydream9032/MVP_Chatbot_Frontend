/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  files: ['./src/index.html'],
  server: {
    baseDir: './src',
  },
  reactStrictMode: true,
  images: {
    loader: "akamai",
    domains: ['https://backend.chatbase.co'],
    path: "/",
  },
  middleware: [
    function (_req, res, next) {
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
      res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');

      next();
    },
  ],
};

module.exports = nextConfig;