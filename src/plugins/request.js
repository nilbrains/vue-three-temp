import axios from 'axios'
import { ElNotification } from 'element-plus'
import { BASE_API, BASE_API_TIMEOUT } from '@/setting'

// 创建axios实例
const service = axios.create({
  baseURL: BASE_API, // api 的 base_url
  timeout: BASE_API_TIMEOUT, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response)  => {
    return response.data
  },
  (error) => {
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        ElNotification({
          title: 'Error',
          message: '网络请求超时',
          type: 'error',
        })
        return Promise.reject(error)
      }
    }
    console.log("req err code == > ", code)
    // if (code) {
    //   // TODO
    // } else {
      ElNotification({
        title: 'Error',
        message: '接口请求失败',
        type: 'error',
      })
    // }
    return Promise.reject(error)
  }
)
export default service
