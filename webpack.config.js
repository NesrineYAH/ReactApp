const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.jsx", // Remplacez par le point d'entrée principal de votre projet
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: {
    "react-dom": "ReactDOM",
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: true,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 20000, // Taille minimum pour la création de chunks
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
  },
};
