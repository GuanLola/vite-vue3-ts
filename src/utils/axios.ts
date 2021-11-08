/**
 * code约定
 * code : -200: 登录失效状态
 * code : -100: 接口发生错误 前端用try{}catch(){}避免接口报错
 * code : > 0 : 接口返回成功值
 * code : < 0 : 接口返回失败值
 */

import axios, { AxiosError, AxiosRequestConfig } from 'axios'

axios.defaults.timeout = 2000 * 1000

// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return error
  }
)

axios.interceptors.response.use(
  (result) => {
    return result.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default axios