const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");
/*
module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.jsx",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  externals: {
    "react-dom": "ReactDOM",
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^fs$/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: "asset/resource",
        include: /node_modules\/@intility\/flex-chat/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              throwIfNamespace: false, // 👈 corrige ton erreur
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource", // au cas où tu importes aussi des images
        exclude: /node_modules\/@intility\/flex-chat/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // obligatoire si tu veux que JSX soit compilé
        },
      },
    ],
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
      minSize: 20000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
  },
};
*/

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
