import type { RouteMeta } from 'vue-router'
import { Icon } from '@/components/Icon'
// import { useI18n } from '@/hooks/web/useI18n'

export const useRenderMenuTitle = () => {
  const { getPrefixCls } = useDesign()
  const prefixCls = getPrefixCls('menu__title')
  const renderMenuTitle = (meta: RouteMeta) => {
    const { title = 'Please set title', icon } = meta

    return icon ? (
      <>
        {meta.icon && <Icon icon={meta.icon} />}
        {/* <Icon icon={meta.icon} /> */}
        {/* class="v-menu__title overflow-hidden overflow-ellipsis whitespace-nowrap"
class="v-menu__title overflow-hidden overflow-ellipsis whitespace-nowrap" */}
        <span class={prefixCls}>{title}</span>
      </>
    ) : (
      <span class={prefixCls}>{title}</span>
    )
  }

  return {
    renderMenuTitle
  }
}
