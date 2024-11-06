import axios from "axios"
import {
  useUseStore
} from '@/pinia/modules/useStore'
import { ElMessage } from 'element-plus'

const msg = (msg: string) => {
  ElMessage.error({
    message: msg,
    customClass: 'http-error-msg'
  })
}
// axios 配置
const $http = axios.create({
  timeout: 30000, // 超时时间, 单位毫秒
  baseURL: '/api'
})
//请求拦截器
$http.interceptors.request.use(request => {
  const useStroe = useUseStore();
  request.headers.token = useStroe.userInfo.token || '';
  return request;
}, error => {
  return Promise.reject(error);
});

// 回调拦截器
$http.interceptors.response.use(
response => {
  if(response.data.code === 201) {
    msg(response.data.message)
    new Error(response.data.message);
    return Promise.reject(response.data.message);
  }else {
    return response.data;
  }
}, error => {
  // 处理响应错误
  msg(error.message)
  new Error(error.message);
  return Promise.reject(error.response);
});

export default $http
