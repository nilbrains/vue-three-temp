/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // 选项...
  publicPath: '/',
  // 输出目录
  outputDir: 'dist/',
  // 输出 .map
  productionSourceMap: false,
  devServer: {
    // 调试端口
    port: 8080,
    disableHostCheck: true,
    open: true,
  },
}
