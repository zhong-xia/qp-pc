<template>
  <div class="changCity">
    <el-row>
      <el-col>
        <province />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <hot-city title="热门城市：" :list="hotList"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <hot-city title="最近访问：" :list="recentList"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <category/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Province from "../components/ChangeCity/province.vue"
import HotCity from "../components/ChangeCity/hotCity.vue"
import Category from "../components/ChangeCity/category.vue"
export default {
  components: {
    Province,
    HotCity,
    Category
  },
  data(){
    return{
      hotList:['北京','上海','深圳','南京','杭州'],
      recentList:['青岛','济南','北京','上海']
    }
  }
};
</script>

<style lang="scss" scoped>

</style>