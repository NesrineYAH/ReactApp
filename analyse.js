const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = function override(config) {
  config.plugins.push(new BundleAnalyzerPlugin());
  return config;
};
