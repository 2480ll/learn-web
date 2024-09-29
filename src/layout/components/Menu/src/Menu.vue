<script lang="tsx">
// import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { ElMenu } from 'element-plus'
// import type { MenuItemClicked } from 'element-plus'
import { useRenderMenuItem } from './components/useRenderMenuItem'
import remainingRouter from '@/router/modules/remaining'
import { useAppStore } from '@/stores/modules/app'

export default defineComponent({
  // 告诉 ESLint 忽略下一行的 vue/no-reserved-component-names，保留字的检查
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Menu',
  setup() {
    const router = useRouter()
    const select = (index: string) => {
      console.log('🚀 ~ select ~ index:', index)
      router.push(index)
    }
    // 唯一的class  id
    const { getPrefixCls } = useDesign()
    const prefixCls = getPrefixCls('menu')

    const appStore = useAppStore()

    // 给激活的路由加上is-active的类名
    const activeMenu = computed(() => {
      const { meta, path } = unref(router.currentRoute)
      // 判断路由里有没有设置高亮
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })
    const renderMenu = () => {
      return (
        <ElMenu
          router
          collapse={appStore.collapse}
          onSelect={select}
          defaultActive={unref(activeMenu)}
          backgroundColor="rgba(255, 255, 255, 0)"
        >
          {{
            default: () => {
              const { renderMenuItem } = useRenderMenuItem()
              return renderMenuItem(unref(remainingRouter))
            }
          }}
        </ElMenu>
      )
    }

    return () => (
      <div id={prefixCls} class={prefixCls}>
        {renderMenu()}
      </div>
    )
  }
})
</script>
<style scoped lang="scss">
$prefix-cls: #{$namespace}-menu;

.#{$prefix-cls} {
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  transition: all 0.2s;

  .#{$elNamespace}-menu {
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    // 选中菜单的上级目录的颜色，当有多级时，一级目录有背景颜色，其余只有文字有颜色
    .is-active > .#{$elNamespace}-sub-menu__title {
      border-radius: 20px;
      color: var(--el-menu-active-color);
      background-color: rgba(255, 255, 255);
    }
    // 选中菜单的颜色
    .#{$elNamespace}-menu-item.is-active {
      border-radius: 20px;
      background-color: rgba(255, 255, 255);
    }
    // 设置子菜单悬停的高亮和背景色
    .#{$elNamespace}-sub-menu__title,
    .#{$elNamespace}-menu-item {
      &:hover {
        color: chartreuse;
      }
    }
    // 设置子菜单的背景颜色,解決当路由有三级的时候，二级路由的背景颜色
    .#{$elNamespace}-menu {
      .#{$elNamespace}-sub-menu__title,
      .#{$elNamespace}-menu-item:not(.is-active) {
        background-color: rgba(255, 255, 255, 0);
      }
    }
  }

  // 折叠动画的时候，就需要把文字给隐藏掉
  :deep(.horizontal-collapse-transition) {
    // transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out !important;
    .#{$prefix-cls}__title {
      display: none;
    }
  }
}
</style>
