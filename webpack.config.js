const path = require('path')
// 自动清除上一次的打包生成的目录下的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
// React hot
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// vue hot
const { VueLoaderPlugin } = require('vue-loader')
// const VuePlugin = require('vue-loader/lib/plugin')    

const port = process.env.PORT || 3002
const mode = process.env.NODE_ENV || 'development'
module.exports = {
  mode: mode,
  // 控制是否生成，以及如何生成 source map
  devtool: mode === 'development' ? 'source-map' : false,
  
  // watch: true,
  target: 'web',
  devServer: {
    port: port,
    // 热更新
    hot: true,
    hotOnly: true,
    // 自动打开浏览器
    open: false,
    // 压缩
    compress: true,
    /**
     * 指定本地服务所在的目录 
     * 一般 devServer 中 publicPath 和 output 的 publicPath 设置一样
     */
    // publicPath: '/'
    /**
     * 打包之后的资源如果依赖了其他资源的路径
     */
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,

    // 
    // historyApiFallback: true,

    // 代理设置
    // 使用了非常强大的 http-proxy-middleware 包
    // https://github.com/chimurai/http-proxy-middleware#options
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite: {"^/api" : ""},
        changeOrigin: true
      }
    }
  },
  // 入口文件
  entry: './src/main.js',
  // 输出
  output: {
    // 输出的目录
    path: path.resolve(__dirname, 'dist'),
    // 输出的文件名
    filename: './bundle.js',
    /**
     * output
     *   - publicPath: index.html内部的引用路径
     *   - 域名 + publicPath + filename
     */
    // publicPath: '/'
    // 静态资源输出
    // assetModuleFilename: 'asset/[name].[hash:8][ext]',
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // 自动解析确定的扩展
    extensions: [".js", ".json", '.ts', '.jsx', '.vue'],
    // 使用绝对路径，将只在给定目录中搜索
    // modules: ["node_modules"],
    // 解析目录时要使用的文件名
    // mainFiles: ["index"]
  },
  // 插件
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   // 说明：执行 从右向左，从下向上
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.less$/,
      //   // 说明：执行 从右向左，从下向上， 先把less转成 css 在 使用 css-loader转成样式
      //   use: ['style-loader', 'css-loader', 'less-loader']
      // }
      {
        test: /\.(css|less)$/,
        // 说明：执行 从右向左，从下向上， 先把less转成 css 在 使用 css-loader转成样式
        use: [
          'style-loader',
          'vue-style-loader',
          {
            loader: 'css-loader',
            // importLoaders 的使用，处理 @import './test.css' 等，表示从上一步重新执行
            options: {
              importLoaders: 2,
              /**
               * background-image: url('../../assets/images/leaves2.png');
               * 在css中会默认使用esModule语法
               */
              esModule: false // 不转为 esModule 类型
            }
          },
          'postcss-loader',
          // 配置提取 到 postcss.config.js 中
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       // 使用插件，处理css兼容性，对需要添加前缀的css，自动添加前缀
          //       // postcss-preset-env 中包含 require('autoPrefixer'),

          //       // 可以把这个 提取到 postcss.config.js中
          //       /**
          //         module.exports = {
          //           plugins: [
          //             require('postcss-preset-env')
          //           ]
          //         }
          //        */
          //       plugins: [
          //         // require('autoPrefixer'),
          //         'postcss-preset-env'
          //       ]
          //     }
          //   }
          // },
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       // esModule: false // 不转为 esModule 类型
        //       // 设置文件输出的路径和名称
        //       name: 'img/[name].[hash:8].[ext]',
        //       // outputPath: 'img'
        //       limit: 24 * 1024
        //     }
        //   }
        // ]

        // 在webpack5.x之后的写法
        // type: 'asset/resource',
        // generator: {
        //   filename: 'asset/[name].[hash:8][ext]',
        // }

        // type: 'asset/inline',

        type: 'asset',
        generator: {
          filename: 'asset/[name].[hash:8][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 24 * 1024
          }
        }
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:3][ext]'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',

          // 配置提取到babel.config.js 中
          // {
          //   loader: 'babel-loader',
          //   options: {
          //     // 依赖插件
          //     // plugins: [
          //     //   '@babel/plugin-transform-block-scoping',
          //     //   '@babel/plugin-transform-arrow-functions'
          //     // ]
          //     presets: [
          //       [
          //         '@babel/preset-env',
          //         // 兼容性配置
          //         // {
          //         //   targets: 'chrome 91'
          //         // }
          //       ]
          //     ]
          //   }
          // }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.ts$/,
        // ts-loader不能处理 polyfill 的填充  babel-loader 不能提示语法错误信息
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 配置输出html的模板
    // https://www.npmjs.com/package/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'Webpack入门到入坑到放弃',
      template: './public/index.html'
    }),
    // 自定义常量
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            // **/ 表示从 from 这个目录开始查找
            ignore: ['**/index.html']
          }
          // to 默认 path.resolve(__dirname, 'dist')
          // to: ''
        }
      ]
    }),
    new ReactRefreshWebpackPlugin(),

    new VueLoaderPlugin()
    // new VuePlugin()
  ]
}

/**
 * 占位符
 * [ext]: 扩展名
 * [name]: 文件名
 * [hash]: 文件内容
 * [contentHash]: 
 * [hash:<length>]
 * [path]:
 */