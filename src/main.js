/*
 * @Author: abc
 * @Date: 2020-11-03 10:54:28
 * @LastEditors: abc
 * @LastEditTime: 2020-11-10 12:17:12
 * @Description:main config file
 */
import Vue from 'vue';
import App from './App.vue';
import './plugins/ant-ui';
import './components/global';
import './plugins/icons';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuescroll from 'vuescroll/dist/vuescroll-native';
import 'vuescroll/dist/vuescroll.css';
import 'echarts/theme/macarons.js';
Vue.use(vuescroll);
Vue.config.productionTip = false;
const obj = { mode: 'native' };
Vue.prototype.$vuescrollConfig = {
  vuescroll: obj,
  bar: {
    background: 'gray'
  }
};
//全局路由守卫元
router.beforeEach(async (to, from, next) => {
  console.log(to.name);
  // 检查是否已登录
  const token = store.state.token;
  if (to.path !== '/login' && !token) {
    next({ path: '/login' });
  } else {
    if (to.path === '/login' && token) {
      next('/');
    } else {
      next();
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
