// 本地存储插件信息 https://github.com/wuchangming/web-storage-cache
import WebStorageCache from 'web-storage-cache'
type CacheType = 'localStorage' | 'sessionStorage'

//本地存储
export const CACHE_KEY = {
  TOKEN: 'token'
}
/**
 * 配置浏览器本地存储的方式，可直接存储对象数组。
 * 如果缓存已过期，并且读取会直接删除过期的缓存，否则相反
 * @param cacaheType    缓存方法默认localStorage
 * @param cacaheTime    超时时间，单位秒
 * @returns 返回new WebStorageCache实例
 */
export const useCache = (cacaheType: CacheType = 'localStorage', cacaheTime: number = Infinity) => {
  const wsCache: WebStorageCache = new WebStorageCache({ storage: cacaheType, exp: cacaheTime })
  return { wsCache }
}
