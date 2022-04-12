const autoprefixer = require('autoprefixer');

const pxtorem = require('postcss-pxtorem');
module.exports = {
  outputDir: 'dist',
  productionSourceMap: false,
  // 能源大数据 /nydsj/
  publicPath: process.env.NODE_ENV === 'production' ? '/nydsj/' : '/',
  // 电力看经济
  //publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  // 电力图谱
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 108,
            unitPrecision: 5,
            propList: ['*'],
            // selectorBlackList: ['el-'],不转换的class
          })
        ],
      },
    },
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        // target: 'http://10.11.32.107:8090', //梦丰
        // target: 'http://10.11.32.69:8090', //征宇
        target: 'http://10.11.32.67:8090', //鑫鹏
        changeOrigin: true,
      },
    },
  },
};