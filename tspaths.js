const tsConfig = require("./tsconfig.json");
const tsPaths = require("tsconfig-paths");

const baseUrl = "./build";
tsPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths,
});
