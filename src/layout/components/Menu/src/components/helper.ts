import type { RouteMeta } from 'vue-router'

type OnlyOneChildType = AppRouteRecordRaw & { noShowingChildren?: boolean }

type HasOneShowingChild = {
  oneShowingChild?: boolean
  onlyOneChild?: OnlyOneChildType
}

// 路由的路径
/**
 *
 * @param parentPath 父路径，一开始默认 /
 * @param path 当前路由的路径
 * @returns 当前路由的最终路径
 */
export const pathResolve = (parentPath: string, path: string) => {
  //   if (isUrl(path)) return path
  const childPath = path.startsWith('/') || !path ? path : `/${path}`
  return `${parentPath}${childPath}`.replace(/\/\//g, '/')
}

/**
 * 判断一个路由下是否只有一个子路由
 * @param {Array} children 子路由数组
 * @param {string} parent 父路由名称
 * @returns {Object} 返回包含两个属性的对象：
 *   - oneShowingChild: 是否只有一个子路由正在展示
 *   - onlyOneChild: 若只有一个子路由，返回该子路由的内容；如果有多个子路由通过筛选，onlyOneChild 只会保存最后一个被筛选的子路由对象。
 */

export const hasOneShowingChild = (
  children: AppRouteRecordRaw[] = [],
  parent: AppRouteRecordRaw
): HasOneShowingChild => {
  const onlyOneChild = ref<OnlyOneChildType>()

  const showingChildren = children.filter((v) => {
    const meta = (v.meta ?? {}) as RouteMeta
    if (meta.hidden) {
      return false
    } else {
      //临时设置(将在只有一个显示子节点时使用)
      onlyOneChild.value = v
      return true
    }
  })

  // 当只有一个子路由器时，默认显示该子路由器
  if (showingChildren.length === 1) {
    return {
      oneShowingChild: true,
      onlyOneChild: unref(onlyOneChild)
    }
  }

  // 如果没有要显示的子路由器，则显示父路由器
  if (!showingChildren.length) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return {
      oneShowingChild: true,
      onlyOneChild: unref(onlyOneChild)
    }
  }
  // 有多个子路由的时候
  return {
    oneShowingChild: false,
    onlyOneChild: unref(onlyOneChild)
  }
}
