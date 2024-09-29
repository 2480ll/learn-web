<script setup lang="ts">
import request from '@/config/axios/index'
const daa = ref<any[]>([])
const aaa = async () => {
  const res = await request.get({ url: '/threejs' })
  console.log('🚀 ~ aaa ~ RES:', res)
  daa.value = res
}

const daaa = async () => {
  const res = await request.delete({ url: '/threejs/del', params: { id: 'a111' } })
  console.log('🚀 ~ aaa ~ RES:', res)
  daa.value = res
}
daaa()
aaa()
</script>
<template>
  <div>
    Threejs
    {{ daa }}
  </div>
</template>
<style scoped lang="scss"></style>
