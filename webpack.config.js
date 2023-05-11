const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  devtool: "eval-source-map",
  entry: "./src/js/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: [path.resolve(__dirname, "src")],
      },
      {
        // test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        test: /\.svg$/,
        type: "asset/inline",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    watchFiles: ["src/**/*"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/html/index.html"),
    }),

  ],
};


module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(new WorkboxPlugin.GenerateSW({ clientsClaim: true, skipWaiting: true, }));
  } else {
    config.mode = "development";
  }
  return config;
};