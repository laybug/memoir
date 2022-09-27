<template>
	<div>
		<h2 class="title">我是 .vue 文件封装的组件</h2>
		<p>{{ message }}</p>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return { message: 'hello，webpack！' }
	},
}
</script>

<style scoped>
.title {
	color: cornflowerblue;
}
</style>
