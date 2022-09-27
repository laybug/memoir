<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'TabBar'
}
</script>

<style scoped>
#tab-bar {
	display: flex;
	justify-content: space-around;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 49px;
	background-color: #f6f6f6;
	text-align: center;
	font-size: 14px;
	box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.1);
}
</style>
