const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  outputDir:"../vues",
  // devServer : {
  //   proxy : {
  //     '/' : {
  //       target : 'http://localhost:9012',
  //       changeOrigin : true,
  //     }
  //   }
  // }
})
