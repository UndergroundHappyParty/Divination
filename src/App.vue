<script>
import login from './plugins/login'
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			login()
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style>
	/*每个页面公共css */
page{
	background-color: #e2c044;
}
</style>
