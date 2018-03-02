const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const APP_DIR = path.resolve(__dirname, "../../app");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3001",
    "webpack/hot/only-dev-server",
    path.join(__dirname, "../../app/web/index")
  ],
  devServer: {
    hot: true,
    contentBase: APP_DIR,
    publicPath: "/"
  },
  output: {
    path: path.join(__dirname, "../public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        PLATFORM_ENV: JSON.stringify("web")
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: "style!css!autoprefixer?browsers=last 2 version!less"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
