// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  // ...UnoCSS options
  // 预设
  presets: [
    // 添加 UnoCSS 的默认样式预设
    presetUno(),
    // UnoCSS+iconify离线使用
    presetIcons({
      /**UnoCSS+iconify离线使用,这个选项得加上，要不单独使用ep:xxx,不生效
       * UnoCSS:https://unocss.dev/presets/icons#prefix  prefix的属性
       * Icons with UnoCSS:https://iconify.design/docs/usage/css/unocss/
       */
      prefix: ''
      /* options */
    })
    // ...other presets
  ],
  // 自定义规则
  rules: [],
  // 自定义快捷方式
  shortcuts: {},
  // 用来配置扫描那些文件来生成css
  // content 字段的作用是告诉 UnoCSS 应该在哪些文件类型中查找类名，以便生成相应的 CSS 样式
  content: {
    // pipeline 是一个用于配置内容扫描的高级选项，它允许你更灵活地控制要扫描的文件类型和路径。通过设置 pipeline，你可以定义哪些文件应该被包含或排除在扫描范围之外，从而更精确地生成所需的 CSS 类。
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html|ts)($|\?)/],
      exclude: [
        /node_modules/ // 排除 node_modules 文件夹
        // /\.test\.[jt]sx?$/ // 排除测试文件,暂时无用
      ]
    }
  }
})
