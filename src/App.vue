<!--
 * @Author: abc
 * @Date: 2020-11-03 10:54:28
 * @LastEditors: abc
 * @LastEditTime: 2020-11-25 17:06:54
 * @Description: 主界面
-->
<template>
  <!-- 内容界面 -->
  <a-config-provider :locale="locale">
    <a-layout id="components-layout-demo-custom-trigger" v-if="login">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <vue-scroll id="global" class="global" :ops="ops" style="height: 100%;">
          <div class="logo">
            <img src="./assets/image/logo.png" alt="logo" />
            <span v-show="!collapsed">{{ $t('management') }}</span>
          </div>
          <!-- 页面级侧边栏导航 -->
          <nav-browser></nav-browser>
        </vue-scroll>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <!-- 页面顶部内容 -->
          <header-global
            :collapsed="collapsed"
            @changeCollapsed="handleChangeCollapsed"
          ></header-global>
        </a-layout-header>
        <a-layout-content>
          <vue-scroll
            id="global"
            class="global"
            :ops="ops"
            style="height: 100%;"
          >
            <transition name="page" mode="out-in">
              <router-view v-if="isRouterAlive" />
            </transition>
          </vue-scroll>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
    <!-- 登录界面 -->
    <div v-else class="login"><router-view /></div>
  </a-config-provider>
</template>
<script>
import HeaderGlobal from './components/HeaderGlobal.vue';
export default {
  components: { HeaderGlobal },
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      collapsed: false,
      login: true,
      locale: null,
      isRouterAlive: true,
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
  watch: {
    handlePostLang: function(newVal) {
      this.locale = this.$i18n.messages[newVal];
    }
  },
  created() {
    const lang = this.handlePostLang;
    this.locale = this.$i18n.messages[lang];
    this.$store.dispatch('handleFilterRouter');
    //  console.log(this.$route);
    this.login = !(this.$route.name === 'Login');
  },
  updated() {
    this.$store.dispatch('handleFilterRouter');
    //  console.log(this.$route);
    this.login = !(this.$route.name === 'Login');
  },
  mounted() {},
  methods: {
    handleChangeCollapsed(boo) {
      this.collapsed = boo;
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  },
  computed: {
    handlePostLang() {
      return this.$store.getters.postLang;
    }
  }
};
</script>
<style lang="less">
@import './assets/less/index.less';
</style>
