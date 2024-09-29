<script setup lang="ts">
import { Icon } from '@iconify/vue'
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  size: {
    type: Number,
    default: 18
  }
})
//判断是不是svg
const isLocal = computed(() => props.icon.startsWith('svg-icon:'))
// svg图标
const symbolId = computed(() => {
  return unref(isLocal) ? `#${props.prefix}-${props.icon.split('svg-icon:')[1]}` : props.icon
})
// 是否使用在线图标
const isUseOnline = computed(() => {
  return import.meta.env.VITE_USE_ONLINE_ICON === 'true'
})

const getIconifyStyle = computed(() => {
  const { color, size } = props
  return {
    fontSize: `${size}px`,
    color
  }
})
</script>

<template>
  <ElIcon :color="color" :size="size">
    <!-- svg相关 -->
    <svg aria-hidden="true" v-if="isLocal">
      <!-- :xlink:href="symbolId" :fill="color" -->
      <use :xlink:href="symbolId" :fill="color" />
    </svg>
    <template v-else>
      <Icon v-if="isUseOnline" :icon="icon" :style="getIconifyStyle"></Icon>
      <!-- iconify  不知道为啥加这个类名，不加这个也没有出错，暂时先加上 ，官网示例没有加 https://iconify.design/docs/usage/css/unocss/-->
      <div v-else :class="`${icon} iconify`" :style="getIconifyStyle"></div>
    </template>
  </ElIcon>
</template>

<style scoped lang="scss"></style>
