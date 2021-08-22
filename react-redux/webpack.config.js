const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

function setDMode() {
  if(isDev) {
    return 'development';
  } else {
    return 'production';
  }
}

function setDevTool() {
  if(isDev) {
    return 'source-map';
  } else {
    return false;
  }
}

function optimization() {
  if(isProd) {
    return {
      splitChunks: {
        chunks: 'all'
      },
      minimize: true,
      minimizer: [
        new HtmlMinimizerPlugin({
          test: /\.foo\.html/i,
        }),
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
    }
  }
}

module.exports = {
  mode: setDMode(),
  devtool: setDevTool(),
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist')
        },
        {
        
          from: path.resolve(__dirname, "./src/assets"),
          to: path.resolve(__dirname, "./dist"),
          noErrorOnMissing: true,
          }
      ],
    }),
  ],
  
  optimization: optimization(),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader' ]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.(mp3)$/,
        use: ['file-loader']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react", "@babel/typescript"],
            plugins: ["@babel/plugin-transform-async-to-generator", "@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  }
}