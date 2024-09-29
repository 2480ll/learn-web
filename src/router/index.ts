import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import remainingRouter from '@/router/modules/remaining'
const router = createRouter({
  history: createWebHashHistory(), // createWebHashHistory URL带#，createWebHistory URL不带#
  strict: true, //是否禁止尾部斜线。https://router.vuejs.org/zh/api/interfaces/RouterOptions.html#Properties-strict
  sensitive: true, //路由是否区分大小写
  routes: [
    // https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-Not-found-%E8%B7%AF%E7%94%B1
    // 捕获所有路由或 404 Not found 路由
    {
      path: '/:pathMatch(.*)*', // 解决路由爆[Vue Router warn]: No match found for location with path
      meta: {
        title: '找不到此页面'
      },
      // redirect: '/403', // 错误方式，刷新立马会导致进入守卫的页面
      component: () => import('@/views/Error/404.vue') // 切记不要使用 redirect: '/403',
    },
    ...remainingRouter
  ] as unknown as RouteRecordRaw[]
})

export default router
