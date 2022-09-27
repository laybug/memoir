<template>
  <div class="tab-bar-item" v-on:click="itemClick">
    <!-- <slot v-if="!isActive" name="item-icon"></slot>
		<slot v-else name="item-icon-active"></slot> -->

    <!-- 上述插槽的健壮做法如下（可能会出现某些属性被替换的可能） -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{ active: isActive }">
			<slot name="item-text"></slot>
		</div> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      // isActive: true
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'deeppink'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch(err => err)
    }
  }
}
</script>

<style scoped>
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  vertical-align: middle;
}

/* .active {
	color: #ed6479;
} */
</style>
