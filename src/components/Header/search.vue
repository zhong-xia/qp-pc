<template>
  <div class="search">
    <div class="search-left">
      <img class="search-left-img1" src="http://img.qipeiren.com/qipeiren/images/qpr_logo.png" alt />
      <img class="search-left-img3" src="../../assets/img/竖线.png" alt />
      <img
        class="search-left-img2"
        src="http://img.qipeiren.com/qipeiren/images/qpr_logo_1.png"
        alt
      />
    </div>
    <div class="search-main">
      <div class="search-main-container">
        <div class="search-main-container-tab">
          <a class="search-main-container-tab-product" href="#">产品</a>
          <label>|</label>
          <a class="search-main-container-tab-answer" href="#">公司</a>
          <label>|</label>
          <a class="search-main-container-tab-answer" href="#">配件目录</a>
          <label>|</label>
          <a class="search-main-container-tab-answer" href="#">咨询</a>
        </div>
        <div class="search-main-container-select">
          <el-input v-model="searchWord" placeholder="请输入产品名称或关键词" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <dl class="search-main-container-select-hotPlace" v-if="isHotPlace">
          <dt>热门搜索</dt>
          <dd v-for="(item,index) in hotPlaceList" :key="index">
            <router-link :to="{name:'list',params:{name:item}}">{{item}}</router-link>
          </dd>          
        </dl>
        <dl class="search-main-container-select-searchList" v-if="isSearchList">
          <dd v-for="(item,index) in searchList" :key="index">
            <router-link :to="{name:'list',params:{name:item}}">{{item}}</router-link>
          </dd>
        </dl>
      </div>
    </div>
    <div class="search-right">
      <p>手机版</p>
      <img src="http://img.qipeiren.com/qipeiren/Images/qh-ewm.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hotPlaceList:['喷油器','喷油泵','输油泵','汽油泵','化油器'],
      searchList:['汽车配件','汽车发动机皮带','汽车配件全车配件','汽车接插件','汽车充电机','汽车硅胶管'],
      searchWord:'',
      // isHotPlace:false,
      // isSearchList:false,
      isFocus:false
    }
  },
  computed:{
    isHotPlace:function(){
      return this.isFocus && !this.searchWord;
    },
    isSearchList:function(){
      return this.isFocus && this.searchWord;
    }
  },
  methods:{
    focus(){
      this.isFocus = true;
    },
    blur(){
      // this.isFocus = false;
      var self = this;
      setTimeout(function(){
        self.isFocus = false;
      },200)
    },
    input (){

    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/header/search.scss";
</style>