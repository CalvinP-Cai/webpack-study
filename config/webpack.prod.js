// 自动清除上一次的打包生成的目录下的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
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
  ]
}