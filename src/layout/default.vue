<template>
  <!--使用element中的container布局-->
  <div class="layout-default">
   <el-container>
    <el-header height="">
        <my-header/>
    </el-header>
    <el-main>     
        
        <router-view/>
    </el-main>
    <el-footer height="">
        <my-footer/>
    </el-footer>
  </el-container>
  </div>
 
</template>

<script>
import MyHeader from '@/components/Header/index.vue';
import MyFooter from '@/components/Footer/index.vue';
export default {
    components:{
        MyHeader,
        MyFooter
    }
};
</script>

<style lang="scss" scoped >
@import '@/assets/css/layout.scss';
</style> 