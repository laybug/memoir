<template>
  <div id="app">
    <h2>Hello App</h2>
    <p>{{ $store.state.counter }}</p>
    <hello-vuex />

    <p>counter 的平方</p>
    <h4>{{ $store.getters.square }}</h4>

    <button @click="increment">Increment</button>
    <button v-on:click="decrement">Decrement</button>

    <p>The profile of iris</p>
    <h1>{{ $store.state.info }}</h1>
    <button v-on:click="aupdateInfo">更新</button>

    <p>获取年龄大于 18 岁的学生</p>
    <ul>
      <li v-for="item in $store.getters.outEighteen">
        <span>{{ item.name }}</span>
        <span>{{ item.age }}</span>
      </li>
    </ul>
    <p>
      年龄大于 18 的学生数：<strong>{{ $store.getters.outEighteenNumber }}</strong>
    </p>

    <p>筛选指定年龄的学生</p>
    <ul>
      <li v-for="item in $store.getters.accordAge(18)">
        <span>{{ item.name }}</span>
        <span>{{ item.age }}</span>
      </li>
    </ul>
    <button v-on:click="addStudent">添加</button>

    <p>childStore 中的属性展示</p>
    <h4>{{ $store.state.moduleHome.name }}</h4>
    <button v-on:click="updateName('shadow')">改名</button>
    <button v-on:click="asyncUpdateName('shadow')">异步改名</button>

    <p>childStore 的 getters</p>
    <h4>{{ $store.getters.fullName('shadow') }}</h4>
    <h4>{{ $store.getters.nameConvert('shadow') }}</h4>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'
import INCREMENT from './store/mutationsTypes'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  methods: {
    increment() {
      // 绕过 mutations 直接进行操作时，dev-tools 跟踪不到快照
      // this.$store.state.counter++
      // 避免 commit 的事件类型与定义不一致，使用常量代替
      this.$store.commit(INCREMENT)
    },
    decrement() {
      this.$store.commit('decrement')
    },
    // 带参数的提交方式有两种
    // 普通方式
    // addStudent() {
    // 	// 当要传递多个参数时，可以将多个参数封装到一个对象内
    // 	const student = { name: '邓太阿', age: 112 }
    // 	this.$store.commit('addStudent', student)
    // },
    // 特殊方式
    addStudent() {
      const student = { name: '邓太阿', age: 112 }
      this.$store.commit({
        type: 'addStudent',
        student
      })
    },
    aupdateInfo() {
      // this.$store.commit('updateInfo')

      // 存在异步操作时，需要使用 dispatch 转到 actions 中
      // const payload = {
      //   msg: '正在进行异步操作 。。。',
      //   success() {
      //     console.log('异步操作已完成');
      //   }
      // }
      // this.$store.dispatch('asyncUpdateInfo', payload)

      // Promise 处理异步操作
      this.$store.dispatch('asyncUpdateInfo', '正在执行异步操作 。。。').then(result => { console.log(result); })
    },
    updateName(newName) {
      this.$store.commit({ type: 'updateName', newName })
    },
    asyncUpdateName(newName) {
      this.$store.dispatch({
        type: 'asyncUpdateName',
        newName
      }).then(msg => { console.log(msg); })
    },
  }
}
</script>

<style>
</style>

