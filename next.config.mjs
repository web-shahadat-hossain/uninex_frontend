/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  output: "export",

  // Change "export" to "static"
  // output: {
  //   static: {
  //     // other static configurations...
  //   },
  // },
  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: true,
  },
};

export default nextConfig;
