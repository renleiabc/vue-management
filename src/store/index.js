/*
 * @Author: abc
 * @Date: 2020-11-03 10:54:28
 * @LastEditors: abc
 * @LastEditTime: 2020-11-25 16:20:38
 * @Description:
 */
import Vue from 'vue';
import Vuex from 'vuex';
import routes from '../router/routes';
import { handleRouterFilter } from '../assets/js/common';
Vue.use(Vuex);
const lang = localStorage.getItem('lang');
export default new Vuex.Store({
  // store.js
  state: {
    token: window.localStorage.getItem('token'),
    auth: false,
    userInfo: {},
    route: {},
    user: '',
    lang: lang || 'zh-cn'
  },
  mutations: {
    changeLang(state, value) {
      state.lang = value;
    },
    setToken(state, account) {
      //console.log(state, account);
      state.token = account.token;
      const str = JSON.stringify(account);
      window.localStorage.setItem('account', str);
      window.localStorage.setItem('token', account.token);
    },
    clearToken(state) {
      state.token = '';
      window.localStorage.setItem('token', '');
      window.localStorage.setItem('account', '');
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
      state.auth = true;
      // 获取到用户信息的同时将auth标记为true，当然也可以直接判断userInfo
    },
    filterRouter(state) {
      const account = window.localStorage.getItem('account');
      if (account) {
        const user = JSON.parse(account).user;
        state.user = user;
        const showList = handleRouterFilter(routes, user);
        console.log(JSON.stringify(showList));
        state.route = showList;
      }
    }
  },
  actions: {
    async getUserInfo({ commit }, token) {
      console.log(token);
      commit('setUserInfo', token);
    },
    async login({ commit }, account) {
      commit('setToken', account);
    },
    async handleFilterRouter({ commit }) {
      commit('filterRouter');
    }
  },
  getters: {
    postFilterRouter(state) {
      console.log(state.route);
      const { route } = state;
      return route || {};
    },
    postLang(state) {
      return state.lang;
    }
  }

  /*  async getUserInfo({ commit }, token) {
      return fetchUserInfo(token).then(response => {
        if (response.code === 200) {
          commit('setUserInfo', response.data);
        }
        return response;
      });
    },
    async login({ commit }, account) {
      return login(account).then(response => {
        if (response.code === 200) {
          commit('setUserInfo', response.data.userInfo);
          commit('setToken', response.data.token);
        }
      });
    }
  } */
});
