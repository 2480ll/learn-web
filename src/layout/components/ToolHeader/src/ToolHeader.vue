<script setup lang="ts">
import Collapse from './components/Collapse.vue'
const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('tool-header')
</script>
<template>
  <div :id="prefixCls" :class="prefixCls">
    <div>
      <Collapse />
    </div>
  </div>
</template>
<style scoped lang="scss">
$prefix-cls: #{$namespace}-tool-header;

.#{$prefix-cls} {
  // background-color: red;
  margin-top: 10px;
  height: 30px;
  border-bottom: 1px solid red;
}
</style>
