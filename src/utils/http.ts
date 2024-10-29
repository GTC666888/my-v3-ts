import axios from "axios"

// axios 配置
const $http = axios.create({
  timeout: 30000, // 超时时间, 单位毫秒
  baseURL: '/api'
})
//请求拦截器
$http.interceptors.request.use(request => {
  return request;
}, error => {
  return Promise.reject(error);
});

// 回调拦截器
$http.interceptors.response.use(
response => {
  return response.data;
}, error => {
  // 处理响应错误
  new Error(error.message);
  return Promise.reject(error.response);
});

export default $http
