/*
 * @Author: abc
 * @Date: 2020-11-03 10:54:28
 * @LastEditors: abc
 * @LastEditTime: 2020-11-25 16:30:26
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
// 加载ant design vue语言包
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import zhTW from 'ant-design-vue/lib/locale-provider/zh_TW';
import zhBG from 'ant-design-vue/lib/locale-provider/en_GB';
import VueI18n from 'vue-i18n';
import vuescroll from 'vuescroll/dist/vuescroll-native';
import 'vuescroll/dist/vuescroll.css';
import 'echarts/theme/macarons.js';
const en = require('@/lang/en-us.json');
const zh = require('@/lang/zh-cn.json');
const tw = require('@/lang/zh-tw.json');
const mergeZH = Object.assign({}, zhCN, zh);
const mergeEN = Object.assign({}, zhBG, en);
const mergeTW = Object.assign({}, zhTW, tw);
Vue.use(VueI18n);
Vue.use(vuescroll);
Vue.config.productionTip = false;
const obj = { mode: 'native' };
// console.log(store);
const i18n = new VueI18n({
  locale: store.state.lang,
  messages: {
    'en-us': mergeEN,
    'zh-cn': mergeZH,
    'zh-tw': mergeTW
  }
});
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
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
