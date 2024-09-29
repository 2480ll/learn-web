// 路由的name必须唯一，否则出错
import Layout from '@/layout/Layout.vue'
const remainingRouter: AppRouteRecordRaw[] = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login/LoginIndex.vue'),
    meta: {
      hidden: true,
      title: '登录',
      icon: 'ep:edit'
    }
  },
  {
    path: '/',
    name: 'aa',
    component: Layout,
    redirect: '/homeIndex',
    meta: {
      title: '首页',
      icon: 'ep:edit'
    },
    children: [
      {
        path: 'homeIndex',
        name: 'homeIndex',
        component: () => import('@/views/Home/HomeIndex.vue'),
        meta: {
          title: '首页',
          icon: 'ep:edit'
        }
      }
    ]
  },
  {
    path: '/Threejs',
    name: 'Threejs',
    component: Layout,
    redirect: '/ThreejsIndex',
    meta: {
      title: '3D',
      icon: 'mage:box-3d-plus'
    },
    children: [
      {
        path: 'ThreejsIndex',
        name: 'ThreejsIndex',
        component: () => import('@/views/Threejs/ThreejsIndex.vue'),
        meta: {
          title: 'Threejs',
          icon: 'mage:box-3d-plus'
        }
      }
    ]
  },
  {
    path: '/Echarts',
    name: 'Echarts',
    component: Layout,
    redirect: '/EchartsIndex',
    meta: {
      title: '图表',
      icon: 'mage:box-3d-plus'
    },
    children: [
      {
        path: 'EchartsIndex',
        name: 'EchartsIndex',
        component: () => import('@/views/Echarts/EchartsIndex.vue'),
        meta: {
          title: 'Echarts',
          icon: 'mage:box-3d-plus'
        }
      }
    ]
  },
  {
    path: '/zanshi',
    name: 'zanshi',
    // redirect: '/index',
    component: Layout,
    meta: {
      icon: 'ep:plus',
      title: '一'
    },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/zanshi/index.vue'), //可有可无
        meta: {
          title: '二'
        },
        children: [
          {
            path: 'home',
            name: 'home',
            component: () => import('@/views/zanshi/HomeView.vue'),
            meta: {
              title: '三'
            }
          },
          {
            path: 'about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/zanshi/AboutView.vue'),
            meta: {
              title: '四'
            }
          }
        ]
      }
    ]
  }
]

export default remainingRouter
