const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
// 读取配置文件
const config = require('./webpack.config')

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler))

// 开启端口上的服务
app.listen(3000, () => {
  console.log('express 服务，运行在3000端口');
})