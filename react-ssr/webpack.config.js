const path = require('path');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const nodeExternals = require('webpack-node-externals');


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

let browserConfig = {
  mode: setDMode(),
  devtool: setDevTool(),
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "client.js",
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
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
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
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}


let serverConfig = {
  entry: './src/server/index.tsx',
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: 'null-loader'
      }
    ]
  }
}
module.exports = [browserConfig, serverConfig];