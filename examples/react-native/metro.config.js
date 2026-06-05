// Monorepo Metro config: watch the workspace root so Metro can transform the
// `@mal-icon/*` TypeScript source, and resolve those packages to their source
// via the "bun" export condition (the published bundles target real installs).
const { getDefaultConfig } = require("expo/metro-config");
const path = require("node:path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "..", "..");

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];
config.resolver.disableHierarchicalLookup = true;

// Resolve @mal-icon/* to their TypeScript source. Drop this in a real app that
// installs the packages from npm — the published "import"/"require" bundles are
// used automatically.
config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = ["bun", "react-native", "require", "import"];

module.exports = config;
