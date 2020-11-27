/*
 * @Author: abc
 * @Date: 2020-11-03 11:58:51
 * @LastEditors: abc
 * @LastEditTime: 2020-11-27 17:26:46
 * @Description:
 */
const path = require('path');
const { IgnorePlugin } = require('webpack');
const variable = require('./src/assets/js/variable');
function resolve(dir) {
  // path.join()方法用于连接路径
  return path.join(__dirname, dir);
}
let pattern = false;
if (process.env.NODE_ENV !== 'production') {
  pattern = true;
} else {
  // plugins.push('transform-remove-console');
  pattern = false;
}
module.exports = {
  runtimeCompiler: true,
  devServer: {
    // can be overwritten by process.env.HOST
    host: '127.0.0.1',
    port: 8083
  },
  productionSourceMap: pattern,
  css: {
    sourceMap: pattern,
    extract: !pattern,
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: variable,
          javascriptEnabled: true
        }
      }
    }
  },
  /*  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: resolve('./src/assets/less/variable.less') // 引入全局样式变量（文件路径）
    }
  }, */
  configureWebpack: {
    plugins: [new IgnorePlugin(/^\.\/locale$/, /moment$/)],
    resolve: {
      alias: {
        '@ant-design/icons/lib/dist$': resolve('./src/plugins/icons.js')
      }
    }
  },
  chainWebpack: config => {
    const imagesRule = config.module.rule('images');
    imagesRule
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end();
  }
};
