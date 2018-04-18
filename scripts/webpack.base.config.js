
/**
 * webpack基础配置
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(p){
    return path.join(__dirname,p)
 }

const webpackConfigBase ={
    entry:{
        client:resolve('../app/client.js')
    },
    output:{
        path:resolve('../dist'),
        filename:'[name].[hash:4].js',
        chunkFilename:'chunks/[name].[hash:4.js]',
    },
    resolve:{
        extensions:['.js','.json'],
        alias:{
            style:resolve('../app/style'),
        },
    },
    module:{
        rules:[
            {
                exclude:/node_modules/,
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use:[
                        MiniCssExtractPlugin.loader,
                        { loader: "css-loader",options:{sourceMap:true} },
                        { 
                        loader: "less-loader",
                        options:{
                            sourceMap:true,
                            javascriptEnabled: true,
                            paths:[
                                path.resolve(__dirname,'../node_modules'),
                                path.resolve(__dirname,'../app/style'),
                            ]
                        }
                        }
                    ],
            },
        ],
    },
    plugins:[
        // 打包后的资源引用到html文件内
        new HtmlWebpackPlugin({
            template:resolve('../app/index.html'),
        }),
        // 提取css
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style.[hash:4].css",
            chunkFilename: "[id].css"
          })
    ],
}

module.exports=webpackConfigBase
