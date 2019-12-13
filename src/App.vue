<script>
import login from './plugins/login'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			wx.checkSession({
				success () {
					//session_key 未过期，并且在本生命周期一直有效
					console.log('session_key 未过期')
					login() //重新登录
				},
				fail () {
					// session_key 已经失效，需要重新执行登录流程
					console.log('session_key过期,重新登录')
					login() //重新登录 
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style>
	/*每个页面公共css */
	@import url('./style/config');
page{
	background-color: var(--base-color);
}
</style>
