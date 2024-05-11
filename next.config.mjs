/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xtsemdavncboeicgvrsz.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/image/**",
      },
    ],
  },
};

export default nextConfig;
