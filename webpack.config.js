const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const publicPath = "/router/";

module.exports = {
  entry: "./src/main.tsx",
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    port: 8888,
    open: true,
    hot: true,
    historyApiFallback: {
      index: publicPath,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "mn-rc-router.js",
    path: path.resolve(__dirname, "dist"),
    library: "mn-rc-router",
    libraryTarget: "umd",
    clean: true,
    publicPath,
  },
  plugins: [new htmlWebpackPlugin()],
};
