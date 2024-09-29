<script setup lang="ts">
import type { EChartsOption } from 'echarts'

const option: EChartsOption = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
}
</script>
<template>
  <div id="echarts-main" class="echarts-main">
    <Echart :options="option" />
  </div>
</template>
<style scoped lang="scss">
.echarts-main {
  width: 100%;
  height: 100%;
}
</style>
