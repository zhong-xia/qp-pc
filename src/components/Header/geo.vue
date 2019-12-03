<template>
<div class="geo">
    <i class="el-icon-location"></i>
    北京
    <router-link href="#" class="geo-change" :to="{name:'changeCity'}">切换城市</router-link>
    [门头沟 大厂回族自治县 廊坊]
    <router-link href="#" class="geo-login" :to="{name:'login'}">立即登录</router-link>
    <router-link href="#" class="geo-register" :to="{name:'register'}">注册</router-link>
</div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/header/geo.scss';
</style>