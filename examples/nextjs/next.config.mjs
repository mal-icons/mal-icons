/** @type {import('next').NextConfig} */
const nextConfig = {
  // The mal-icon packages ship modern ESM/TS; let Next transpile them.
  transpilePackages: ["@mal-icon/react", "@mal-icon/core"],
};

export default nextConfig;
