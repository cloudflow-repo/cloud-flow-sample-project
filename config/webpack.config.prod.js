/**
 * 生产环境 webpack 配置
 */

const TerserPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  devtool: false,
  output: {
    /**
     * Cloud Flow 用户请修改此字段以保证线上页面正确索引到前端资源文件
     */
    // publicPath: '/cloud-flow/pages/<PROJECT_IDENTIFIER>/'
  },
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      name: 'vendor',
      minChunks: 2
    },
    minimizer: [
      /**
       * 压缩生成的 bundle 文件大小
       * 由于 UglifyJS 对 ES6 的支持不好，所以用 TerserPlugin 来替代
       */
      new TerserPlugin({
        terserOptions: {
          output: {
            beautify: false,
            comments: false,
          },
        },
        extractComments: false
      })
    ],
  },
  plugins: [
    /**
     * 启用 gzip 压缩
     */
    new CompressionWebpackPlugin({
      test: /\.js(\?.*)?$/i
    })
  ]
};