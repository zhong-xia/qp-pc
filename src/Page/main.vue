<template>
<div class="main">
    <el-row>
        <el-col :span="24">
            <n-nav/>
        </el-col>
    </el-row>
  <el-row>
      <el-col :span="5">
          <m-menu/>
      </el-col>
      <el-col :span="12">
          <s-slider/>
      </el-col>
      <el-col :span="7">
          <r-right/>
      </el-col>
  </el-row>
  <el-row>
      <el-col :span="24">
          <small-pic/>
      </el-col>
  </el-row>
  <el-row>
      <el-col :span="24">
         <big-pic/>
      </el-col>
  </el-row>
  <el-row>
      <el-col :span="24">
          <m-mark/>
      </el-col>
  </el-row>
  <el-row>
      <el-col :span="24">
          <!-- 热门品牌 -->
          <hot/>
      </el-col>
  </el-row>
  <el-row>
      <el-col>
          <!-- 好货 -->
        <good/>
      </el-col>
  </el-row>
    <el-row>
      <el-col>
          <!-- 销售 -->
        <sale/>
      </el-col>
  </el-row>
</div>

</template>

<script>
import NNav from '../components/Main/nav.vue';
import MMenu from '../components/Main/menu.vue';
import SSlider from '../components/Main/slider.vue';
import RRight from '../components/Main/right.vue';
import SmallPic from '../components/Main/smallPic.vue'
import BigPic from '../components/Main/bigPic.vue';
import MMark from '../components/Main/mark.vue';
import Hot from '../components/Main/hot.vue';
import Good from '../components/Main/good.vue';
import Sale from '../components/Main/sale.vue'
export default {
    components:{
        NNav,
        MMenu,
        SSlider,
        RRight,
        SmallPic,
        BigPic,
        MMark,
        Hot,
        Good,
        Sale
    }
}
</script>

<style lang="scss" scoped>

</style>