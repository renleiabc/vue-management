<!--
 * @Author: abc
 * @Date: 2020-11-05 18:45:50
 * @LastEditors: abc
 * @LastEditTime: 2020-11-09 17:28:25
 * @Description: 
-->
<template>
  <div><div id="myChart" ref="myChart" class="echarts"></div></div>
</template>
<script>
// 引入完整的echarts
import echarts from '@/plugins/echarts';
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // 调用绘制图表的方法
    this.draw();
  },
  methods: {
    draw() {
      // 实例化echarts对象
      const myChart = echarts.init(this.$refs.myChart, 'macarons');
      // 绘制条形图
      myChart.setOption({
        title: {
          text: 'Echarts 入门实例',
          top: 5,
          left: 'center'
        },
        legend: {
          data: ['衣服', '帽子', '裤子', '鞋子'],
          top: 30
        },
        // X轴
        xAxis: {
          data: ['一月', '二月', '三月', '四月']
        },
        // Y轴
        yAxis: {},
        // 数据
        series: [
          {
            name: '衣服',
            type: 'bar',
            data: [120, 100, 440, 320]
          },
          {
            name: '帽子',
            type: 'bar',
            data: [200, 120, 240, 330]
          },
          {
            name: 'bar',
            type: 'line',
            data: [120, 200, 240, 260, 300]
          },
          {
            name: 'bar',
            type: 'line',
            data: [120, 200, 300, 140, 260]
          }
        ]
      });
    }
  }
};
</script>
