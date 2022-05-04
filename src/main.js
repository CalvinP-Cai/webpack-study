
// import React from "react";
// import ReactDOM from "react-dom";
// import App from './packages/React/App.jsx'

import axios from 'axios'

import { createApp } from 'vue'

import App from './packages/Vue/App'

// way1:
// import Login from './pages/Login/index'
// Login()

// way2:
// import './pages/Login/index'


/**
 * 处理兼容性
 * caniuse.com
 * 
 * 查看默认兼容的平台
 * npx browserslist '>1%, last 2 version'
 * default = >0.5%
 * dead：24个月未更新过的平台
 * last 2 version：最新的两个版本
 * 
 * .browserslistrc 和 package.json中的 browserslist 一样, 二选一
 */

// import './assets/css/test.css'

/**
 * postcss javaScript 转换样式的工具。处理浏览器css的兼容性
 * less（less-loader） -> css -> css-loader
 * 
 * npm i --save-dev postcss-cli
 * 
 * npx postcss -o ./src/assets/css/test.output.css ./src/assets/css/test.css
 * 
 * npm i autoprefixer -D
 * 
 * 工具
 * http://autoprefixer.github.io/
 * 
 * 处理postcss的一个集合，包含 autoprefixer
 * postcss-preset-env
 * 
 */


/**
 * file-loader
 * 图片的处理
 * img src 
 *    pages/Login/index 中 addImg方法
 * background url
 * 
 * 
 * url-loader 和 file-loader 的区别
 * url-loader 以base64 uri 处理到文件中，减少请求次数
 * file-loader 将文件资源拷贝到指定目录，分开请求
 * 
 * url-loader 可以调用  file-loader
 */


/**
 * webpack 5
 * 删除  url-loader 和  file-loader
 * asset module type
 * asset/resource   --> file-loader
 * asset/inline     --> url-loader
 * asset/source     --> raw-loader
 * asset
 */
// console.log(1111111)


/**
 * babel
 * 
 * npx babel src --out-dir build --plugins @babel/plugin-transform-arrow-functions
 * 
 * @babel/plugin-transform-block-scoping
 * 
 * 
 * npm install --save-dev @babel/preset-env
 * 
 * 
 * npx babel src --out-dir build --preset=@babel/preset-env
 */
const COUNT = 5

const sum = () => {
  console.log('COUNT: %d', COUNT);
}

sum()

/**
 * polyfill
 * @babel/polyfill
 * 
 * core-js
 * regenerator-runtime
 */

let p1 = new Promise((resolve, reject) => {
  console.log('promise');
})
console.log(p1)

/**
 * webpack --config webpack.config.js --watch
 * 
 * 在 webpack.config.js 中 添加 watch: true,
 * 1、所有的资源都会重新编译
 * 2、每次编译成功之后都需要进行文件读写
 * 3、使用 live server
 * 4、不能实现局部刷新
 *     
 * npm i webpack-dev-server -D
 * webpack serve --config webpack.config.js
 */

console.log('npm i webpack-dev-server -D');

// HMR
// if (module.hot) {
//   module.hot.accept('./font.js', () => {

//   })
// }

/** 
 * react hot 
 * 
 * npm i @babel/preset-react -D
 * 
 * npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh
 * 
 * 在 webpack.config.js中添加 plugins 插件，
 * 在babel.config.js中添加 jsx 插件
 *  plugins: [
      ['react-refresh/babel']
    ],
 */

// ReactDOM.render(
//   <App title="Taylor" />,
//   document.getElementById('app')
// );


/**
 * vue hot
 * 默认安装的是3.x
 * npm i vue
 * 
 * npm i vue-loader
 * 
 * webpack编辑 识别 .vue 结尾的文件 在 webpack.config.js 中添加插件
 * 在rules 中配置规则
 * {
    test: /\.vue$/,
    use: ['vue-loader']
  }
 * 15.x之前不需要自己处理
 * const { VueLoaderPlugin } = require('vue-loader')
 * new VueLoaderPlugin()
 * 
 * 为了使 webpack识别 template 和 style
 * npm i vue-style-loader vue-template-compiler
 */


const app = createApp(App)

app.mount("#app");

/**
 * 代理
 */
axios.get('/api/users').then(response => {
  console.log(response);
})

/**
 * 支持ts
 * 
 * 生成tsconfig.json
 * npx tsc --init
 */
