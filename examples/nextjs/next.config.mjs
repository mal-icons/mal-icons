/** @type {import('next').NextConfig} */
const nextConfig = {
  // The mal-icons packages ship modern ESM/TS; let Next transpile them.
  transpilePackages: ["@mal-icons/react", "@mal-icons/core"],
  webpack: (config) => {
    // Resolve the workspace @mal-icons/* packages to their TypeScript source via
    // the "bun" export condition, so the example runs without pre-building the
    // libraries. When consuming the published npm packages, this is unnecessary.
    config.resolve.conditionNames = [
      "bun",
      ...(config.resolve.conditionNames ?? ["import", "require", "node"]),
    ];
    return config;
  },
};

export default nextConfig;
