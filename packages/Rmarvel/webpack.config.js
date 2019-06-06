const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: ["./src/index"],
  mode: "development",
  devtool: "cheap-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: { "react-dom": "@hot-loader/react-dom" }
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.woff(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]",
            mimetype: "application/font-woff"
          }
        }
      },
      {
        test: /\.woff2(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]",
            mimetype: "application/font-woff2"
          }
        }
      },
      {
        test: /\.woff2(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]",
            mimetype: "application/font-woff2"
          }
        }
      },
      {
        test: /\.(otf)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      },
      {
        test: /\.(gif|jpg|png|mp3|aac|ogg)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.ttf(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]",
            mimetype: "application/octet-stream"
          }
        }
      },
      {
        test: /\.svg(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "images/[name].[ext]",
            mimetype: "image/svg+xml"
          }
        }
      },
      {
        test: /\.(png|jpg)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: "images/[name].[ext]"
          }
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new webpack.NamedModulesPlugin()
  ]
};
