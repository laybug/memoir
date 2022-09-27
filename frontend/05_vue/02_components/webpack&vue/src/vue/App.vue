<template>
	<h2 class="description">{{ message }}</h2>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			message: '我是使用 .vue 文件封装的组件',
		}
	},
}
</script>

<style scoped>
.description {
	color: tomato;
}
</style>
