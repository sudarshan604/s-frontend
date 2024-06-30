/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "scontent.fktm20-1.fna.fbcdn.net",
        pathname: "**",
      },

      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "scontent.fktm7-1.fna.fbcdn.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "scontent.fktm10-1.fna.fbcdn.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "z-p3-scontent.fktm2-2.fna.fbcdn.net",

        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
