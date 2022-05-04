const path = require('path')

const appDir = process.cwd()

console.log('appDir=====>', appDir);

const resolvePath = (relativePath) => {
  return path.resolve(appDir, relativePath)
}

module.exports = resolvePath