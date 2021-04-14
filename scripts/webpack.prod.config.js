/**
 * 生产环境配置
 */

/* eslint no-unused-vars:0 */
/* eslint no-undef:0 */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackConfigBase = require('./webpack.base.config')
const { merge } = require('webpack-merge')
const path = require('path')
const Copy = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve(p) {
  return path.join(__dirname, p)
}

const webpackConfigProd = {
  mode: 'production',
  plugins: [
    // dll
    new webpack.DllReferencePlugin({
      context: resolve('../'),
      manifest: require('../app/dll/react-manifest.production.json'),
    }),
    new webpack.DllReferencePlugin({
      context: resolve('../'),
      manifest: require('../app/dll/other-manifest.production.json'),
    }),
    // 打包后的资源引用到html文件内
    new HtmlWebpackPlugin({
      template: resolve('../app/index.html'),
      // 这里列出要加入html中的js文件
      dlls: ['./dll/dll.react.production.js', './dll/dll.other.production.js'],
    }),
    new Copy({
      patterns: [
        { from: './app/resource', to: './resource' },
        {
          from: './app/dll/*.production.js',
          to: ({ context, absoluteFilename }) => {
            return 'dll/[name][ext]'
          },
        },
      ],
    }),
    new CleanWebpackPlugin({
      //打包前删除文件夹
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, '../dist')],
      verbose: false, //是否报告已删除的文件
    }),
    // 分析代码构成
    // new BundleAnalyzer({ analyzerPort: 3001 }),
  ],
}

module.exports = merge(webpackConfigBase, webpackConfigProd)
