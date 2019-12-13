import Fly from 'flyio/dist/npm/wx'
let fly = new Fly
function login () {
  console.log('waite login')
  uni.authorize({
    scope: 'scope.userInfo',
    success() {
      uni.getUserInfo({
        provider: 'weixin',
        success: function (infoRes) {
          console.log(infoRes.userInfo);
        }
      });
    }
  })
  uni.login({
    provider: 'weixin',
    success: function (loginRes) {
      let params = {
        code: loginRes.code
      }
      fly.post('http://127.0.0.1:7001/login',params).then((result) => {
        uni.setStorage({
          key: '_token',
          data: result.data.token,
          success: function () {
              console.log('success');
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