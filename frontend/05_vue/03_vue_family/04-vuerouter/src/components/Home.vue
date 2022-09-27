<template>
	<div>
		<h2 class="title">我是首页</h2>
		<p>哈哈哈哈哈哈</p>

		<router-link to="/home/news">新闻</router-link>
		<router-link to="/home/message">消息</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			currentPath: '/home/news'
		}
	},
	// 组件创建后的回调 (在组件未保持状态时生效 -- 未使用 <keep-alive> 组件包裹)
	created() {
		console.log('Home is created')
	},
	// 组件销毁后的回调 (在组件未保持状态时生效 -- 未使用 <keep-alive> 组件包裹)
	destroyed() {
		console.log('Home is destroyed')
	},
	// 组件处于活跃状态的回调 （在组件使用 <keep-alive> 组件包裹时生效，与上述的回调函数刚好对立）
	activated() {
		this.$router.push(this.currentPath)
	},
	// 组件处于不活跃状态的回调 （在组件使用 <keep-alive> 组件包裹时生效，与上述的回调函数刚好对立）
	deactivated() {
		console.log('Home is leaving ...')
	},
	// 组件内路由守卫
	beforeRouteLeave(to, from, next) {
		this.currentPath = this.$route.path
		next()
	}
}
</script>

<style scoped>
.title {
	color: cornflowerblue;
}
</style>
