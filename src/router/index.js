/*
 * @Author: abc
 * @Date: 2020-11-03 10:54:28
 * @LastEditors: abc
 * @LastEditTime: 2020-11-10 12:18:01
 * @Description:
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    {
      path: '/login',
      name: 'Login',
      component: () =>
        import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
      meta: {
        key: '0',
        title: '登录'
      }
    },
    {
      path: '403',
      name: '403',
      component: () =>
        import(/* webpackChunkName: "403" */ '../views/other/403.vue'),
      meta: {
        key: '403',
        title: '404'
      }
    },
    {
      path: '*',
      name: '404',
      component: () =>
        import(/* webpackChunkName: "404" */ '../views/other/404.vue'),
      meta: {
        key: '404',
        title: '404'
      }
    }
  ]
});

export default router;
