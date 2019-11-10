import Fly from 'flyio/dist/npm/wx'
const fly = new Fly
fly.config.baseURL = 'http://yapi.demo.qunar.com/mock/31830'
fly.interceptors.response.use(() => {}, () => {})

export default fly
