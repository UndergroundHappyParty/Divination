import Fly from 'flyio/dist/npm/wx'
import { requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc } from '../config/interceptors'

const fly = new Fly
//设置基本路由
fly.config.baseURL = 'http://127.0.0.1:7001'
//注入拦截器
fly.interceptors.request.use(requestSuccessFunc, requestFailFunc)
fly.interceptors.response.use(responseSuccessFunc, responseFailFunc)

export default fly
