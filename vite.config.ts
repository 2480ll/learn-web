import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//svg 按需打包
import PurgeIcons from 'vite-plugin-purge-icons'
//和svg有关
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'

//unocss
import UnoCSS from 'unocss/vite'

// 压缩资源
import viteCompression from 'vite-plugin-compression'
// vite-mock的插件
import { viteMockServe } from 'vite-plugin-mock'
const root = process.cwd()
// 路径查找
function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // command 默认serve
  //model 默认 development,加载env文件, 和启动命令后的'--model <dev>'有关,是env.<dev>的文件后缀，env文件会全局加载，指定的env文件会覆盖全局相同的变量
  console.log('🚀 ~ defineConfig ~ command:', command, mode)
  const env = loadEnv(mode, root)
  return {
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        // 全局导入
        imports: [
          'vue',
          'vue-router',
          // 可额外添加需要 autoImport 的组件
          // { '@/hooks/web/useI18n': ['useI18n'],}
          {
            '@/hooks/web/useDesign': ['useDesign']
          }
        ],
        dts: 'src/types/auto-imports.d.ts'
      }),

      Components({
        resolvers: [ElementPlusResolver()],
        // 生成自定义 `auto-components.d.ts` 全局声明
        dts: 'src/types/auto-components.d.ts'
      }),
      /**
       * svg
       */
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [pathResolve('src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        // svg 压缩配置
        svgoOptions: true
      }),
      PurgeIcons(),
      //使用 gzip 或者 brotli 来压缩资源.  不清楚是生产还是开发中
      viteCompression({
        verbose: true, // 是否在控制台输出压缩结果
        disable: false, // 是否禁用
        threshold: 10240, // 体积大于 threshold 才会被压缩,单位 b
        algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
        ext: '.gz', // 生成的压缩包后缀
        deleteOriginFile: false //压缩后是否删除源文件
      }),
      // vite-mock
      viteMockServe({
        mockPath: './src/config/mock', ///设置模拟文件的存储文件夹./src/config/mock/modules和./src/config/mock 都行
        enable: true,
        configPath: `
        import {setupProdMockServer} from './src/config/mock/mockProdServer.ts';
        setupProdMockServer();
        ` // 这个有值，mockPath就没用了
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
      // extensions: ['.js', '.ts', '.json'] // 导入时想要省略的扩展名列表,注意：不建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。
    },
    base: '/learn-web',
    build: {
      outDir: "docs"
    },
    root: root,
    server: {
      port: 8000,
      host: '0.0.0.0', // true | 0.0.0.0 这样服务器就会监听所有地址，包括局域网和公网地址。当手机和电脑处于同一个网络环境下，我们就可以通过启动的地址进行访问了。
      open: env.VITE_OPEN === 'true'
    },
    // css  vit中关于scss的配置
    css: {
      preprocessorOptions: {
        // 具体的选项配置没有完全找到
        scss: {
          //
          //
          /**
           * vue cli上关于css预处理的配置选项
           * https://cli.vuejs.org/zh/guide/css.html#css-modules
           * vit 上关于css预处理的配置选项
           * https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions
           * @param additionalData  全局变量,传递给 CSS 预处理器的配置选项，这些配置会传递到预处理器的执行参数中去。例如，在 scss 中定义一个全局变量,这样在 .scss 文件或 .vue 文件中就可以使用这些变量了。
           * @param javascriptEnabled  具体的选项配置没有完全找到
           */
          additionalData: '@import "./src/styles/variables.scss";'
          // javascriptEnabled: true
        }
      }
    }
  }
})
