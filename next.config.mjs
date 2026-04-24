/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "juva-cleaning.vercel.app",
          },
        ],
        destination: "https://juvacleaning.com.au/:path*",
        permanent: true,
      },

      
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.juvacleaning.com.au",
          },
        ],
        destination: "https://juvacleaning.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
