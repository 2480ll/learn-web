import Mock from 'mockjs'

// 使用 Mock 库创建假数据
const arr: any[] = []
for (let i = 0; i < 10; i++) {
  arr.push({
    id: Mock.mock('@guid'),
    name: Mock.mock('@cname'),
    place: Mock.mock('@county(true)')
  })
}

// 暴露假数据的请求地址
export default [
  {
    url: '/threejs',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: arr
      }
    }
  },
  {
    url: '/threejs/del',
    method: 'delete',
    response: ({ query }) => {
      console.log('🚀 ~ query:', query)
      const index = arr.findIndex((item) => item.id === query.id)
      arr.splice(index, 1)
      return { success: index !== -1 ? true : false }
    }
  }
]
