<script setup lang="ts">
import { useAppStoreWhito } from '@/stores/modules/app'
const useAppStore = useAppStoreWhito()

// const pageLoading = computed(() => useAppStore.pageLoading)
</script>

<template>
  <section class="h-full">
    <router-view v-loading="useAppStore.pageLoading">
      <template #default="{ Component, route }">
        <keep-alive include="[]">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </template>
    </router-view>
  </section>
</template>

<style scoped lang="scss"></style>
