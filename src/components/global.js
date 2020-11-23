/*
 * @Author: renlei
 * @Date: 2019-06-05 17:18:58
 * @LastEditors: abc
 * @LastEditTime: 2020-11-05 16:40:35
 * @Description:引用全局vue组件的函数文件
 */
import Vue from 'vue';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const common = require.context(
  './',
  true,
  /\.vue$/
  // 找到components>common文件夹下下以.vue命名的文件
);

/**
 * @name: handle
 * @description:
 * @param {type} :{ type }
 * @return:
 */
function components(params) {
  params.keys().forEach(fileName => {
    const componentConfig = params(fileName);
    const componentName = capitalizeFirstLetter(
      fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
      // 因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
    );
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}
// common文件下的插件
components(common);
