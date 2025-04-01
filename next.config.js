/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wigram.properties", // Specific domain
      },
      {
        protocol: "https",
        hostname: "*.wigram.properties", // Matches subdomains like sub.wigram.properties
      },
    ],  
  },
};

module.exports = nextConfig;
