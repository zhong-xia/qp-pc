<template>
    <div class="goodsList">
        <el-row>
            <el-col :span="24">
                <!-- 面包屑 -->
                <bread/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="20">
                <!-- 分类 区域 -->
                <a-area/>
            </el-col>
            <el-col :span="4">
                地图
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="20">
                <!-- 排序 货物列表 -->
                <goods/>
            </el-col>
            <el-col :span="4">
                <!-- 猜你喜欢 -->
                <love/>
            </el-col>
        </el-row>
    </div>

</template>

<script>
import Love from '../components/GoodsList/love.vue';
import Goods from '../components/GoodsList/goods.vue';
import Bread from  '../components/GoodsList/bread.vue';
import AArea from '../components/GoodsList/area.vue'
export default {
    components:{
        Bread,
        AArea,
        Goods,
        Love
    }
}
</script>

<style scoped>

</style>