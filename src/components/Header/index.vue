<template>
<div class="default-header">
    <el-row>
        <my-top/>
    </el-row>
    <el-row>
        <my-search/>
    </el-row>
</div>

</template>

<script>
import MyTop from './top.vue';
import MySearch from './search.vue';
export default {
    components:{
        MyTop,
        MySearch
    }
}
</script>

<style scoped>
@import '../../assets/css/header/index.scss';
</style>