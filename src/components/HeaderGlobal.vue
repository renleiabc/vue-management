<!--
 * @Author: abc
 * @Date: 2020-11-25 15:50:36
 * @LastEditors: abc
 * @LastEditTime: 2020-11-25 17:08:36
 * @Description: 顶部内容
-->
<template>
  <div class="header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="handleCollapsed"
    />
    <div class="header-right">
      <div class="header-right-lang">
        <a-select
          :default-value="handlePostLang"
          style="width: 120px"
          @change="handleChange"
        >
          <a-select-option value="zh-cn">
            中文简体
          </a-select-option>
          <a-select-option value="zh-tw">
            中文繁体
          </a-select-option>
          <a-select-option value="en-us">
            English
          </a-select-option>
        </a-select>
      </div>
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <a-icon type="down" />
        </a>
        <a-menu slot="overlay" @click="onClick">
          <a-menu-item key="1">
            退出登录
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['reload'],
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    handlePostLang() {
      return this.$store.getters.postLang;
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleCollapsed() {
      const boo = !this.collapsed;
      this.$emit('changeCollapsed', boo);
    },
    handleChange(value) {
      console.log(value);
      localStorage.setItem('lang', value);
      this.$store.commit('changeLang', value);
      this.$i18n.locale = value;
    },
    onClick({ key }) {
      this.$store.commit('clearToken');
      this.$router.go(0);
      //this.reload();
      console.log(`Click on item ${key}`);
    }
  }
};
</script>
