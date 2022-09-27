<template>
	<div>
		<h2 class="title">我是关于</h2>
		<p>呵呵呵呵呵呵</p>
	</div>
</template>

<script>
export default {
	name: 'About',
	created() {
		console.log('About is created')
	},
	destroyed() {
		console.log('About is destroyed')
	}
}
</script>

<style scoped>
.title {
	color: cornflowerblue;
}
</style>
