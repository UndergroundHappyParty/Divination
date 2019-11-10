import api from './fly'

export default {
  install: (Vue, options) => {
    // 需要挂载的都放在这里
    Vue.prototype.$api = api
  }
}
