<template>
  <div class="hot">
    <div class="hot-wrapper">
      <dl>
        <dt>{{title}}</dt>
        <dd v-for="(item,index) in list" :key="index">
            <a href="main">{{item}}</a>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    //这里要以字符串的形式传入才可以，否则不起作用，
    "title",
    "list"
  ]
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main/changeCity/hotCity.scss";
</style>