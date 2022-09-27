<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="cornflowerblue">
      <img slot="item-icon" src="~assets/img/tabBar/home.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabBar/home_active.svg" alt="" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabBar/category.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabBar/category_active.svg" alt="" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopCart">
      <img slot="item-icon" src="~assets/img/tabBar/shopcart.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabBar/shopcart_active.svg" alt="" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabBar/profile.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabBar/profile_active.svg" alt="" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../tabBar/TabBar.vue'
import TabBarItem from '../tabBar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
