<!--
 * @Author: abc
 * @Date: 2020-11-03 10:54:28
 * @LastEditors: abc
 * @LastEditTime: 2020-11-25 16:23:49
 * @Description: 
-->
<template>
  <div class="home">
    <div class="home-box"></div>
    <img alt="Vue logo" src="@/assets/image/logo.png" />
    <a-icon type="down" />
    <a-icon type="down" />
    <a-icon type="close" />
    <a-button type="primary">Button</a-button>
    <div
      :style="{
        width: '300px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px'
      }"
    >
      <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    }
  }
};
</script>
