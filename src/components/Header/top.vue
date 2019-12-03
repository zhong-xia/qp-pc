<template>
<el-row class="top-row">
    <el-col :span="10">
        <my-geo/>
    </el-col>
    <el-col :span="14">
        <my-nav/>
    </el-col>
</el-row>

</template>

<script>
import MyGeo from './geo.vue';
import MyNav from './nav.vue';
export default {
    components:{
        MyGeo,
        MyNav
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/header/top.scss';
</style>