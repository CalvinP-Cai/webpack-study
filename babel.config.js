module.exports = {
  plugins: [
    ['react-refresh/babel']
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        // 兼容性配置，默认使用 .browserslistrc 中的配置
        // targets: 'chrome 91'

        // 默认值false， 不对当前的js 处理 做 polyfill的填充
        // usage : 依据用户源代码中所使用到的信誉分进行填充
        // entry ： 依据当前筛选的浏览器 决定填充什么
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/preset-react',
    // 支持ts语法
    '@babel/preset-typescript'
  ]
}