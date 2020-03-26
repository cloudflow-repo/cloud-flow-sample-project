/**
 * 基础 webpack 配置
 * 无论是开发环境还是生产环境都会应用此文件中的配置
 */

const path = require('path');
const merge = require('webpack-merge');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const root = path.join(__dirname, '../');
const NODE_ENV = process.env.NODE_ENV || 'production';


/**
 * 导入不同环境下的配置用于合并
 */
const environmentalConfig = {
  production: require('./webpack.config.prod'),
  development: require('./webpack.config.dev')
};


const basicConfig = {
  mode: NODE_ENV,
  entry: {
    app: path.join(root, 'src/index.tsx')
  },
  output: {
    path: path.join(root, 'dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(root, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpeg|jpg|png|gif|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      }
    ]
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(root, 'public/index.html'),
      favicon: path.join(root, 'public/favicon.ico'),
      inject: true,
      filename: 'index.html'
    }),

    /**
     * 延迟 JS 文件的加载，优先展现 Loading 动画（防止白屏）
     */
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(root, 'public/static'),
        to: path.join(root, 'dist/static')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    })
  ]
};



module.exports = merge(basicConfig, environmentalConfig[NODE_ENV]);