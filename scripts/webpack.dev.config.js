/**
 * 开发环境配置
 */
/* eslint no-undef:0 */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackConfigBase = require('./webpack.base.config')
const merge = require('webpack-merge')
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

function resolve(p) {
  return path.join(__dirname, p)
}
const PORT = 8888

const webpackConfigDev = {
  mode: 'development',
  plugins: [
    // dll
    new webpack.DllReferencePlugin({
      context: resolve('../'),
      manifest: require('../app/dll/react-manifest.development.json'),
    }),
    new webpack.DllReferencePlugin({
      context: resolve('../'),
      manifest: require('../app/dll/other-manifest.development.json'),
    }),
    // 打包后的资源引用到html文件内
    new HtmlWebpackPlugin({
      template: resolve('../app/index.html'),
      // 这里列出要加入html中的js文件
      dlls: ['./dll/dll.react.development.js', './dll/dll.other.development.js'],
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/login`
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: resolve('../app'),
    historyApiFallback: false,
    hot: false,
    host: '0.0.0.0',
    port: PORT,
  },
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
