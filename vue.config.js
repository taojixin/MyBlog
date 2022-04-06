module.exports = {
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://120.79.177.24:8881',
      }
    }
  }
}