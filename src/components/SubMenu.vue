<!--
 * @Author: abc
 * @Date: 2020-11-06 14:33:09
 * @LastEditors: abc
 * @LastEditTime: 2020-11-10 12:26:51
 * @Description: 
-->
<template>
  <a-sub-menu
    :key="String(menuInfo.meta.key)"
    v-bind="$props"
    v-on="$listeners"
  >
    <span slot="title">
      <a-icon :type="menuInfo.meta.icon" />
      <span>{{ menuInfo.meta.title }}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-if="!item.children" :key="String(item.meta.key)">
        <router-link :to="{ path: item.path }">
          <a-icon :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>
      <sub-menu v-else :key="String(item.meta.key)" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
