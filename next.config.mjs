/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["taskbuddy.dev"],
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
    ],
  },
};

export default nextConfig;
