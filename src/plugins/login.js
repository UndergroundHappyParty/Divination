function login () {
  console.log('waite login')
  uni.login({
    provider: 'weixin',
    success: function (loginRes) {
      console.log(loginRes)
    }
  })
}
export default login