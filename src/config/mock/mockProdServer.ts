// 配置后，生产环境也可以用，=》暂没有去实践
//  mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/client'
// const modules: any = import.meta.glob('./**/*.ts', { eager: true })

// 逐一导入您的mock.ts文件
// 如果使用vite.mock.config.ts，只需直接导入文件
// 可以使用 import.meta.glob功能来进行全部导入
import testModule from './modules/threejs'
// import echarts from './modules/echarts'

export function setupProdMockServer() {
  createProdMockServer([...testModule])
}

// 问题描述
// 1. `import.meta.globEager` 已被弃用, 需要升级vite版本,有兼容问题
// 2. `vite-plugin-mock` 插件问题 https://github.com/vbenjs/vite-plugin-mock/issues/56

// const modules: Record<string, any> = import.meta.glob("./**/*.ts", {
//   import: "default",
//   eager: true,
// });
