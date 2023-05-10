const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WorkboxkPlugin = require("workbox-webpack-plugin");

module.exports = {
  // mode: "development",
  mode: "production",
  devtool: "eval-source-map",
  entry: "./src/js/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  experiments: {
    syncWebAssembly: true,
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
        test: /\.(sv|pn)g$/,
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
    // hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/html/index.html"),
    }),
    new WorkboxkPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  // externals: ["jquery"],
};
