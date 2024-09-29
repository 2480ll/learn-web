import { ElMenuItem, ElSubMenu } from 'element-plus'
import { useRenderMenuTitle } from './useRenderMenuTitle'
import { hasOneShowingChild, pathResolve } from './helper'
const { renderMenuTitle } = useRenderMenuTitle()
export const useRenderMenuItem = () => {
  const renderMenuItem = (routers: AppRouteRecordRaw[], parentPath = '/') => {
    return unref(routers)
      .filter((v) => !v.meta?.hidden)
      .map((v) => {
        const meta = v.meta ?? {}
        const fullPath = pathResolve(parentPath, v.path)
        const { oneShowingChild, onlyOneChild } = hasOneShowingChild(v.children, v)
        if (
          oneShowingChild && //是否只有一个子路由正在展示
          !meta?.alwaysShow && //是否展示父路由
          (!onlyOneChild?.children || onlyOneChild?.noShowingChildren) //是否还有要显示的子路由
        ) {
          return (
            // onlyOneChild ?这个判断是多余的，可以暂时先不管
            <ElMenuItem index={onlyOneChild ? pathResolve(fullPath, onlyOneChild.path) : fullPath}>
              {{
                default: () => renderMenuTitle(onlyOneChild ? onlyOneChild?.meta : meta)
              }}
            </ElMenuItem>
          )
        } else {
          return (
            <ElSubMenu index={fullPath}>
              {{
                title: () => renderMenuTitle(meta),
                default: () => renderMenuItem(v.children!, fullPath)
              }}
            </ElSubMenu>
          )
        }
        // if (v.children) {
        //   return (
        //     <ElSubMenu index={fullPath}>
        //       {{
        //         title: () => renderMenuTitle(meta),
        //         default: () => renderMenuItem(v.children!, fullPath)
        //       }}
        //     </ElSubMenu>
        //   )
        // } else {
        //   return (
        //     <ElMenuItem index={fullPath} route={v}>
        //       {{
        //         default: () => renderMenuTitle(v.meta)
        //       }}
        //     </ElMenuItem>
        //   )
        // }
      })
  }
  return {
    renderMenuItem
  }
}
