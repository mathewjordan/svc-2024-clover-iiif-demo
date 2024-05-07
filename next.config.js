const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const basePath = isDev ? `` : process.env.NEXT_PUBLIC_BASE_PATH;
  const assetPrefix = basePath;

  return { assetPrefix, basePath, output: "export" };
};
