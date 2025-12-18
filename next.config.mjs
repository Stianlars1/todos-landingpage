/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "storage.cloud.google.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "taskbuddy.dev",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.taskbuddy.dev",
        port: "",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "200mb",
    },
    viewTransition: true,
  },
  reactCompiler: true,
  reactStrictMode: true
};

export default nextConfig;
