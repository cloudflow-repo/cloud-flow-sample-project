/**
 * 开发环境 webpack 配置
 */

const path = require('path');
const root = path.join(__dirname, '../');


module.exports = {
  devtool: 'eval-source-map',
  output: {
    publicPath: ''
  },
  devServer: {
    port: 4000,
    contentBase: path.join(root, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true
  }
};