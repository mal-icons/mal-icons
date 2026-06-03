/** @type {import('next').NextConfig} */
const nextConfig = {
  // The mal-icon packages ship modern ESM/TS; let Next transpile them.
  transpilePackages: ["@mal-icon/react", "@mal-icon/core"],
  webpack: (config) => {
    // Resolve the workspace @mal-icon/* packages to their TypeScript source via
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
