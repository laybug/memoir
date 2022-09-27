<template>
  <div id="app">
    <!-- tag：用于指定 <router-link> 组件最终成渲染的标签 repalce：顶替原来的 URL，不会被压入栈中，没有历史记录
		active-class：指定当前活跃的组件添加的类名（可在 router/index.js 中的 Router 中使用 linkActiveClass 进行整体指定）  -->

    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" repalce active-class="active">关于</router-link> -->

    <!-- <router-link to="/home" tag="button" replace>首页</router-link> -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" repalce>关于</router-link>
    <router-link v-bind:to="{ path: '/user/' + userId, query: { name: 'iris', gender: 'male', age: 22 } }" tag="button" replace>用户</router-link>

    <!-- js 实现路由跳转 -->
    <!-- <button v-on:click="homeClick">首页</button>
		<button v-on:click="aboutClick">关于</button> -->

    <!-- js 实现路由跳转时的参数传递 -->
    <!-- <button v-on:click="userClick">用户</button> -->

    <!-- exclude 不被保持状态的组件 -->
    <keep-alive exclude="About,User"><router-view /></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'iris'
    }
  },
  methods: {
    homeClick() {
      // 修改 URL
      this.$router.push('/home')
      console.log('首页')
    },
    aboutClick() {
      this.$router.push('/about')
      console.log('关于')
    },
    userClick() {
      this.$router.replace({
        path: '/user',
        query: {
          name: 'iris',
          gender: 'male',
          age: 22
        }
      })
    }
  }
  // Vue 实例生命周期中的模版编译完成的回调函数
  // created() {
  // 	console.log('首页')
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: cornflowerblue;
}
</style>
