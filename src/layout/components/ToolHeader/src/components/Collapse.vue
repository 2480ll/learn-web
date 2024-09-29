<script setup lang="ts">
import { useAppStore } from '@/stores/modules/app'
defineProps({
  color: {
    type: String,
    default: ''
  }
})
const appStore = useAppStore()

const collapse = computed(() => appStore.collapse)

// const toggleCollapse = () => {}
</script>
<template>
  <div>
    <Icon
      :size="18"
      :icon="collapse ? 'ep:expand' : 'ep:fold'"
      :color="color"
      class="cursor-pointer"
      @click="appStore.setCollapse"
    />
  </div>
</template>
<style scoped lang="scss"></style>
