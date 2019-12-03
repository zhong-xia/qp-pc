<template>
  <div class="nav">
    <ul>
      <li>
        <a href="#">汽配人首页</a>
        <label>|</label>
      </li>
      <li class="shopping">
        <a href="#">汽配商城</a>
        <i class="el-icon-arrow-down"></i>
        <label>|</label>
        <div class="shopping-shop">
          <a href="#" v-for="(item,index) in shopList" :key="index">{{item}}</a>
        </div>
      </li>
      <li>
        <a href="#">购物车</a>
        <label>|</label>
      </li>
      <li>
        <a href="#">会员中心</a>
        <label>|</label>
      </li>
      <li class="mark">
        <a href="#">特色市场</a>
        <i class="el-icon-arrow-down"></i>
        <label>|</label>
        <!-- <div>
          <a href="#" v-for="(item,index) in markList" :key="index">{{item}}</a>
        </div> -->
      </li>
      <li>
        <a href="#">网站服务</a>
        <i class="el-icon-arrow-down"></i>
        <label>|</label>
        <!-- <div>
          <a href="#" v-for="(item,index) in serveList" :key="index">{{item}}</a>
        </div> -->
      </li>
      <li>
        <a href="#">国际站</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      shopList:['商城介绍','商城入驻'],
      markList:['乘用车市场','东风市场','重汽市场','陕汽市场','一汽市场','北汽市场','江淮市场','江苏分站','广东分站','山东分站'],
      serveList:['汽配旺铺','营销宝','汽配助手','规则中心']
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/header/nav.scss';
</style>