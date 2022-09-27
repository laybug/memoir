<template>
	<div>
		<h2 class="title">我是用户</h2>
		<p>{{ '欢迎你，' + userId }}</p>
		<ul>
			<li>{{ '姓名：' + $route.query.name }}</li>
			<li>{{ '性别：' + $route.query.gender }}</li>
			<li>{{ '年龄：' + $route.query.age }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'User',
	computed: {
		userId() {
			return this.$route.params.userId
		}
	},
	created() {
		console.log('User is created')
	},
	destroyed() {
		console.log('User is destroyed')
	}
}
</script>

<style scoped>
.title {
	color: cornflowerblue;
}
</style>
