/*
 * @Author: huyu 
 * @Date: 2019-05-29 14:37:31 
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-29 14:59:31
 */

// dll 配置
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    react: ['react', 'react-dom', 'react-router-dom'],
    other: ['axios'],
  },
  output: {
    path: path.join(__dirname, '../app/resource/dll'),
    filename: 'dll.[name].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../app/resource/dll', '[name]-manifest.json'),
      name: '[name]_[hash]', //和output的library保持一致
    }),
  ],
}
