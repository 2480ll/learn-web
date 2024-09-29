<script lang="tsx">
import { useRenderLayout } from './components/useRenderLayout'

const renderLayout = () => {
  const { renderLeft } = useRenderLayout()
  return renderLeft()
}
const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('layout')
export default defineComponent({
  name: 'Layout',
  setup() {
    return () => <section class={prefixCls}>{renderLayout()}</section>
  }
})
</script>

<style lang="scss" scoped>
$prefix-cls: #{$namespace}-layout;
.#{$prefix-cls} {
  width: 100%;
  height: 100%;
}
</style>
