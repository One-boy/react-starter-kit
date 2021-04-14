/**
 * webpack基础配置
 */
/* eslint no-undef:0 */
const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HappyPack = require('happypack')
const os = require('os')
const threadPool = HappyPack.ThreadPool({ size: os.cpus().length })

function resolve(p) {
  return path.join(__dirname, p)
}

const webpackConfigBase = {
  entry: {
    app: [resolve('../app/client.js')],
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].[hash:4].js',
    chunkFilename: 'chunks/[name].[hash:4].js',
  },
  resolve: {
    extensions: ['.js'],
    // 文件引用路径替换，加@区别于node_modules库
    alias: {
      '@': resolve('../app'),
    },
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            filename: 'workers/file.[name].[hash:4].js',
            chunkFilename: 'workers/chunk.[name].[hash:4].js',
          },
        },
      },
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: 'happypack/loader?id=happyBabel',
      },
      {
        test: /\.(css|less)$/,
        exclude: resolve('../node_modules'),
        use: [
          MiniCssExtractPlugin.loader,
          //  'happypack/loader?id=happyStyle'
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 之前有2个loaders
              sourceMap: true,
              // 启用cssModules
              modules: {
                compileType: 'module',
                auto: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]', // 名字生成规则
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
                paths: [resolve('../app')],
              },
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        include: resolve('../node_modules'),
        use: [
          MiniCssExtractPlugin.loader,
          // 'happypack/loader?id=happyStyleNoModules',
          {
            loader: 'css-loader',
            options: {},
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { plugins: [['autoprefixer']] },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                paths: [resolve('../node_modules')],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/iconfont/[hash:4].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/image/[name].[hash:4].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // happypack处理js
    new HappyPack({
      id: 'happyBabel',
      loaders: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
      threadPool,
      verbose: true,
    }),
    // 提取css
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'styles/file.[name]-[hash:4].css',
      chunkFilename: 'styles/chunk.[name]-[hash:4].css',
    }),
    // 去掉moment语言包
    // 使用的时候，则需要引入中文包，
    // import 'moment/locale/zh-cn'
    // moment.locale('zh-cn') // 设置为中文
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
  ],
  // 分离较大的包，单独成一个文件
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        rc: {
          test: /[\\/]node_modules[\\/](rc-.*)[\\/]/,
          name: 'rc',
          priority: 11,
          filename: 'chunks/[name].js',
          reuseExistingChunk: true,
        },
        antd: {
          test: /[\\/]node_modules[\\/](antd)[\\/]/,
          name: 'antd',
          priority: 10,
          filename: 'chunks/[name].js',
          reuseExistingChunk: true,
        },
        coreJs: {
          test: /[\\/]node_modules[\\/](core-js)[\\/]/,
          name: 'coreJs',
          priority: 11,
          filename: 'chunks/[name].js',
          reuseExistingChunk: true,
        },
        others: {
          priority: 9,
          test: /[\\/]node_modules[\\/]/,
          name: 'others',
          filename: 'chunks/[name].js',
        },
      },
    },
  },
}

module.exports = webpackConfigBase
