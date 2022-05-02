// 1、npm i --save-dev less
// 在终端 执行下 npx less ./src/pages/Login/index.less ./src/pages/Login/login.css，会把less文件转成css文件
// 安装 less-loader
import './index.less'

import Img from '../../assets/images/leaves1.png'

// css-loader演示
function login () {
  console.log('login：使用less')
}
login()

// file-loader 演示
function addImg () {
  let div = document.createElement('div')
  let image = document.createElement('img')
  image.width = 200
  // way1:
  // image.src = require('../../assets/images/leaves1.png').default

  //way2: 在webpack.config中 配置 file-loader 是否转为 esModule
  // image.src = require('../../assets/images/leaves1.png')

  // way3: 直接使用 import 导入
  image.src = Img
  div.appendChild(image)
  document.body.appendChild(div)
  // return image
}

addImg()

// file-loader 演示
function addBgImg () {
  let div = document.createElement('div')
  div.className = 'bgImg'
  document.body.appendChild(div)
}
addBgImg()
// export default login