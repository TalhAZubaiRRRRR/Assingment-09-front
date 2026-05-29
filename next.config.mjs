/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true, // keep your built-in option

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com", 
      },
      {
      protocol: 'https',
      hostname: 'media.istockphoto.com',
    },
    ],
  },
};

export default nextConfig;
