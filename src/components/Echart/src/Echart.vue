<script setup lang="ts">
import { isString } from '@/utils/is'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { debounce } from 'lodash-es'
import type { PropType } from 'vue'
const { getComCls, variables } = useDesign()
const comCls = getComCls('echarts')
const props = defineProps({
  options: {
    type: Object as PropType<EChartsOption>,
    required: true
  },
  width: {
    type: [Number, String],
    default: '100%'
  },
  height: {
    type: [Number, String],
    default: '100%'
  }
})

// 基于准备好的dom，初始化echarts实例
const elRef = ref<HTMLElement>()
const contentEl = ref<HTMLElement | null>(null)
let echartRef: echarts.ECharts | null = null
onMounted(() => {
  echartsInit()
  window.addEventListener('resize', resizeHandler)
  contentEl.value = document.querySelector(`.${variables.namespace}-layout`)
  unref(contentEl)?.addEventListener('transitionend', contentResizeHandler)
})
// 初始化
const echartsInit = () => {
  if (elRef.value) {
    echartRef = echarts.init(elRef.value)
    echartRef.setOption(props.options)
  }
}
watch(
  () => props.options,
  (option) => {
    if (echartRef) {
      echartRef.setOption(option)
    }
  },
  {
    immediate: true,
    deep: true
  }
)
// 根据页面， 调整图标大小  防抖
const resizeHandler = debounce(() => {
  if (echartRef) {
    echartRef.resize()
  }
}, 300)
// layout 变化时
const contentResizeHandler = async (e: TransitionEvent) => {
  if (e.propertyName === 'width') {
    resizeHandler()
  }
}

// 默认宽高
const style = computed(() => {
  const width = isString(props.width) ? props.width : `${props.width}px`
  const height = isString(props.height) ? props.height : `${props.height}px`
  return {
    width,
    height
  }
})

// 卸载
onUnmounted(() => {
  echartRef?.dispose()
  window.removeEventListener('resize', resizeHandler)
  unref(contentEl)?.removeEventListener('transitionend', contentResizeHandler)
})
</script>
<template>
  <div :id="comCls" :class="comCls" ref="elRef" :style="style"></div>
</template>
<style scoped lang="scss">
$com-cls: #{$components}-echarts;
.#{$com-cls} {
  width: 100%;
  height: 100%;
}
</style>
