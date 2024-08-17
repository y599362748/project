import axios from 'axios'
const request = axios.create({
  baseURL: ' http://big-event-vue-api-t.itheima.net',
  timeout: 5000
})
let token = ''
if (localStorage.getItem('token')) {
  token = JSON.parse(localStorage.getItem('token')).token
}

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code === 2) {
      alert(`${response.data.message}`)
    }
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    alert(`${error.message}`)
    return Promise.reject(error)
  }
)
export default request
