import { Menu } from '@/layout/components/Menu/index'
import { ToolHeader } from '@/layout/components/ToolHeader/index'
import './useRenderLayout.scss'
import { useAppStore } from '@/stores/modules/app'
import AppView from './AppView.vue'
// import Component from 'element-plus/es/component.mjs'
// import { Transition } from 'vue'
const { getPrefixCls } = useDesign()
const prefixClsAside = getPrefixCls('render-aside')
const prefixCls = getPrefixCls('render')
const prefixClsMain = getPrefixCls('render-main')

export const useRenderLayout = () => {
  const appStore = useAppStore()

  const renderLeft = () => {
    return (
      <div class={prefixCls}>
        <aside class={[appStore.collapse ? 'aside-min-width' : 'aside-max-width', prefixClsAside]}>
          <Menu />
        </aside>
        <main class={['main-content', 'ml-2', prefixClsMain]}>
          <ToolHeader />
          <div class={'app-View'}>
            <AppView></AppView>
            {/* <RouterView>
              {{
                default: (Component: any) => (
                  <Transition>
                    <KeepAlive>
                    //  这里有个问题无法解决，在tsx使用动态模板，报警告，疑为无法识别这个标签，所以单独创建个vue文件来解决
                      <component is={Component} />
                    </KeepAlive>
                  </Transition>
                )
              }}
            </RouterView> */}
          </div>
        </main>
      </div>
    )
  }
  return { renderLeft }
}
