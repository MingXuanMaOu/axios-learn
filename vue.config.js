module.exports = {
  devServer: {
    proxy: {
      '/myApi': {
        target: 'http://apis.juhe.cn/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/myApi':''
        }
      }
    }
  }
}