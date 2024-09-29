// 解决vite-plugin-purge-icons报类型为any的错误
// vite-plugin-purge-icons.d.ts  手动添加<vite-plugin-purge-icons>这个依赖没有的类型定义
// !必须明确知道才可以定义，要不然容易出错，目前只是单纯的放在这儿，并没有使用这个，而是在ts里面添加了一个配置，暂时忽略any类型的报错

declare module 'vite-plugin-purge-icons' {
  interface IconOptions {
    name: string
    size?: number
    color?: string
  }

  export function PurgeIcons(options?: IconOptions): void
}
