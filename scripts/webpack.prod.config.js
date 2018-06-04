/**
 * 生产环境配置
 */

/* eslint no-unused-vars:0 */
/* eslint no-undef:0 */
const webpack = require('webpack')
const webpackConfigBase = require('./webpack.base.config')
const merge = require('webpack-merge')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Copy = require('copy-webpack-plugin')

const webpackConfigProd = {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false,
    }),
    new Copy([
      { from: './app/resource', to: './resource' },
    ])
  ],
}

module.exports = merge(webpackConfigBase, webpackConfigProd)
