<!--
 * @Author: abc
 * @Date: 2020-11-06 10:51:35
 * @LastEditors: abc
 * @LastEditTime: 2020-11-10 14:50:44
 * @Description: 
-->
<template>
  <a-menu
    :default-selected-keys="open"
    :default-open-keys="open1"
    :selectedKeys="open"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
  >
    <template v-for="item in showList">
      <a-menu-item v-if="!item.children" :key="String(item.meta.key)">
        <router-link :to="{ name: item.name }">
          <a-icon :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>
      <sub-menu v-else :key="String(item.meta.key)" :menu-info="item" />
    </template>
  </a-menu>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      open: ['4'],
      open1: ['3']
    };
  },
  updated() {},
  created() {
    console.log(this.open);
  },
  watch: {
    $route(to) {
      console.log(to.meta);
      this.open = [String(to.meta.key)];
      this.open1 = [to.meta.key[0]];
      console.log(this.open);
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  },
  computed: {
    showList() {
      // console.log(this.$store);
      return this.$store.getters.postFilterRouter;
    }
  }
};
</script>
