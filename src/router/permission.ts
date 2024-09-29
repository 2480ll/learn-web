import router from '@/router/index'
import { useAppStoreWhito } from '@/stores/modules/app'
import { useCache, CACHE_KEY } from '@/hooks/web/useCache'
import { whiteListRouite } from '@/config/modules/router'
const { wsCache } = useCache()
const useAppStore = useAppStoreWhito()
// 路由前守卫
router.beforeEach((to, _from, next) => {
  const token = wsCache.get(CACHE_KEY.TOKEN)
  if (token) {
    if (token !== '123123123') {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    if (whiteListRouite.includes(to.name as string)) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
  // console.log('🚀 ~ router.beforeEach ~ to, from:', to, from)
  // ...
  // 返回 false 以取消导航
  useAppStore.setPageLoading(true)
})

// 路由后置守卫
router.afterEach((to, from) => {
  // console.log('🚀 ~ router.afterEach ~ to, from:', to, from)
  useAppStore.setPageLoading(false)
})
