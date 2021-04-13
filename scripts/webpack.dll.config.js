/*
 * @Author: huyu
 * @Date: 2019-05-29 14:37:31
 * @Last Modified by: huyu
 * @Last Modified time: 2021-04-13 16:21:39
 */

// dll 配置
const path = require('path')
const webpack = require('webpack')

module.exports = (env) => {
  const mode = env.development ? 'development' : 'production'
  return {
    mode: mode,
    resolve: {
      extensions: ['.js'],
    },
    entry: {
      react: ['react', 'react-dom', 'react-router-dom'],
      other: ['axios'],
    },
    output: {
      path: path.join(__dirname, '../app/dll'),
      filename: `dll.[name].${mode}.js`,
      library: '[name]_[hash]',
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(
          __dirname,
          '../app/dll',
          `[name]-manifest.${mode}.json`
        ),
        name: '[name]_[hash]', //和output的library保持一致
      }),
    ],
  }
}
