
/**
 * webpack基础配置
 */
/* eslint no-undef:0 */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    client: ['@babel/polyfill', resolve('../app/client.js')]
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].[hash:4].js',
    chunkFilename: 'chunks/[name].[hash:4].js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    // 文件引用路径替换，加@区别于node_modules库
    alias: {
      '@': resolve('../app'),
      '@ant-design/icons/lib/dist$': resolve('../app/icons.js'), // 解决ant把icon全部打入的问题，需要的icon在icons.js中加入
    },
  },
  module: {
    rules: [
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
          'happypack/loader?id=happyStyle',
        ],
      },
      {
        test: /\.(css|less)$/,
        include: resolve('../node_modules'),
        use: [
          MiniCssExtractPlugin.loader,
          'happypack/loader?id=happyStyleNoModules',
        ],
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'resource/iconfont/[hash:4].[ext]',
          },
        }],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/image/[name].[hash:4].[ext]'
            }
          }
        ],
      },
    ],
  },
  plugins: [
    // happypack处理js
    new HappyPack({
      id: 'happyBabel',
      loaders: [
        { loader: 'babel-loader' },
      ],
      threadPool,
      verbose: true,
    }),
    // happypack处理样式
    new HappyPack({
      id: 'happyStyle',
      loaders: [
        {
          loader: 'css-loader', options: {
            importLoaders: 2, // 之前有2个loaders
            modules: true, // 启用cssModules
            sourceMap: true,
            minimize: true, //这个需要注释，如果开启，则开发时样式sourcemap始终是最后一行。
            localIdentName: '[path][name]__[local]--[hash:base64:5]', // 名字生成规则
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            sourceMap: true,//为true,在样式追溯时，显示的是编写时的样式，为false，则为编译后的样式
          }
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            javascriptEnabled: true,
            paths: [
              resolve('../app/style'),
            ]
          }
        }
      ],
      threadPool,
      verbose: true,
    }),
    // happypack处理样式--无cssModules模式，用来处理antd less
    new HappyPack({
      id: 'happyStyleNoModules',
      loaders: [
        {
          loader: 'css-loader', options: {
            // sourceMap: true,
            minimize: true,
          }
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            javascriptEnabled: true,
            paths: [
              resolve('../node_modules'),
            ]
          }
        }
      ],
      threadPool,
      verbose: true,
    }),
    // 打包后的资源引用到html文件内
    new HtmlWebpackPlugin({
      template: resolve('../app/index.html'),
    }),
    // 提取css
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'style.[hash:4].css',
      chunkFilename: '[id].css'
    }),
    // 去掉moment语言包
    // 使用的时候，则需要引入中文包，
    // import 'moment/locale/zh-cn'
    // moment.locale('zh-cn') // 设置为中文
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
}

module.exports = webpackConfigBase

