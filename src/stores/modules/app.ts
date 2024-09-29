// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { store } from '@/stores/index'
interface AppState {
  collapse: boolean //侧边路由的展开和折叠
  pageLoading: boolean //页面loading
  theme: object //主题颜色
}
export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    collapse: false,
    pageLoading: false,
    theme: {}
  }),
  getters: {},
  actions: {
    setCollapse() {
      this.collapse = !this.collapse
    },
    setPageLoading(pageLoading: boolean) {
      this.pageLoading = pageLoading
    }
  }
})

export const useAppStoreWhito = () => {
  return useAppStore(store)
}
