import './assets/font/iconfont.css'

function packFont () {
  const div  = document.createElement('div')
  const i  = document.createElement('i')
  i.className = 'iconfont icon-check'
  div.appendChild(i)

  document.body.appendChild(div)
}