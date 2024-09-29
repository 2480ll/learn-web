import { axiosInstance } from './service'
import { DEFSULT_AXIOS } from '@/config/axios/config'
const { DEFAULT_HEADERS } = DEFSULT_AXIOS
const request = (option: any) => {
  const { url, method, params, data, responseType, headersType, ...config } = option
  return axiosInstance({
    url,
    method,
    params,
    data,
    responseType,
    headers: {
      'Content-Type': headersType || DEFAULT_HEADERS
    },
    ...config
  })
}

export default {
  get: async <T = any>(option: any) => {
    const res = await request({ method: 'GET', ...option })
    console.log('🚀 ~ res:', res)
    return res as unknown as T
  },
  post: async <T = any>(option: any) => {
    const res = await request({ method: 'POST', ...option })
    return res as unknown as T
  },
  delete: async <T = any>(option: any) => {
    const res = await request({ method: 'DELETE', ...option })
    return res as unknown as T
  },
  put: async <T = any>(option: any) => {
    const res = await request({ method: 'PUT', ...option })
    return res as unknown as T
  },
  download: async <T = any>(option: any) => {
    const res = await request({ method: 'GET', responseType: 'blob', ...option })
    return res as unknown as Promise<T>
  },
  upload: async <T = any>(option: any) => {
    option.headersType = 'multipart/form-data'
    const res = await request({ method: 'POST', ...option })
    return res as unknown as Promise<T>
  }
}
