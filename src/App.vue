<!--
 * @Author: abc
 * @Date: 2020-11-03 10:54:28
 * @LastEditors: abc
 * @LastEditTime: 2020-11-10 11:49:47
 * @Description: 主界面
-->
<template>
  <!-- 内容界面 -->
  <a-layout id="components-layout-demo-custom-trigger" v-if="login">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <vue-scroll id="global" class="global" :ops="ops" style="height: 100%;">
        <div class="logo">
          <img src="./assets/image/logo.png" alt="logo" />
          <span v-show="!collapsed">后台管理系统</span>
        </div>
        <header-browser></header-browser>
      </vue-scroll>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content>
        <vue-scroll id="global" class="global" :ops="ops" style="height: 100%;">
          <transition name="page" mode="out-in">
            <router-view />
          </transition>
        </vue-scroll>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
  <!-- 登录界面 -->
  <div v-else class="login"><router-view /></div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      login: true,
      ops: {
        vuescroll: {},
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: 'easeInQuad',
          verticalNativeBarPos: 'right',
          maxHeight: undefined,
          maxWidth: undefined
        },
        rail: {
          background: 'red',
          opacity: 0,
          size: '6px',
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: '2px',
          keepShow: false
        },
        bar: {
          background: '#c4c5c7'
        }
      }
    };
  },
  created() {
    this.$store.dispatch('handleFilterRouter');
    //  console.log(this.$route);
    this.login = !(this.$route.name === 'Login');
  },
  updated() {
    this.$store.dispatch('handleFilterRouter');
    //  console.log(this.$route);
    this.login = !(this.$route.name === 'Login');
  },
  mounted() {}
};
</script>
<style lang="less">
@import './assets/less/index.less';
</style>
