import Fly from 'flyio/dist/npm/wx'
let fly = new Fly
function login () {
  console.log('waite login')
  uni.login({
    provider: 'weixin',
    success: function (loginRes) {
      let params = {
        code: loginRes.code
      }
      console.log(params)
      fly.post('http://127.0.0.1:7001/login',params).then(() => {
        console.log(page)
        uni.getUserInfo({
          provider: 'weixin',
          success: function (infoRes) {
            console.log('用户昵称为：' + infoRes.userInfo.nickName);
          },
          fail: function (info) {
            console.log('-------')
            console.log(info)
          }
        });
      })
    },
    fail: function(err) {
      console.log(err)
    }
  })
}
export default login