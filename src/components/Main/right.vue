<template>
  <div class="right">
    <div class="right-top">
      <div class="right-top-left">
        <a href="#">
          <img src="../../assets/img/svg/登录.svg" alt />
          <span>用户登录</span>
        </a>
      </div>
      <div class="right-top-right">
        <a href="#">
          <img src="../../assets/img/svg/用户注册.svg" alt />
          <span>免费注册</span>
        </a>
      </div>
    </div>
    <div class="right-bottom">
      <div class="right-bottom-one">
        <ul>
          <li
          v-for="(item,index) in liList" 
        :class="{active:kind==item.tag}"
        :data-type="item.tag"
        :key="index"
         @mouseover="over"
         @mouseenter="liEnter(item)">{{item.title}}</li>
        </ul>
      
          <!-- <ul>
          <li class="right-bottom-one-left"  >网站动态</li>
          <li class="right-bottom-one-right">网站服务</li>
        </ul> -->
        <div class="right-bottom-one-item">
          <div class="right-bottom-one-item-content" v-if="curDetail">
            <a href="#" 
            v-for="(v,i) in curDetail.children" :key="i">{{v}}</a>
          </div>
          <!-- <div class="right-bottom-one-item-content">
            <a href="#">汽配人违规纠错中心上线</a>
            <a href="#">汽配人网大升级，新功能解读</a>
            <a href="#">汽配人网可用支付宝和微信支付啦！</a>
          </div> -->
          <!-- <div class="right-bottom-one-item-content">
            <a href="#">建站，推广，做生意就选汽配旺铺</a>
            <a href="#">营销宝为你提供精准营销推广服务</a>
            <a href="#">汽配助手——你贴心的生意小助手</a>
          </div> -->
        </div>
      </div>
      <div class="right-bottom-two">
        <a href="#">
          <img src="http://img.qipeiren.com/qipeiren/Images/wp.jpg" alt />
        </a>
      </div>
      <div class="right-bottom-three">
        <a href="#">
          <img src="http://img.qipeiren.com/qipeiren/images/qpr_q_1.png" alt />
        </a>
        <a href="#">
          <img src="http://img.qipeiren.com/qipeiren/images/qpr_q_2.png" alt />
        </a>
        <a href="#">
          <img src="http://img.qipeiren.com/qipeiren/images/qpr_q_3.png" alt />
        </a>
        <a href="#">
          <img src="http://img.qipeiren.com/qipeiren/images/qpr_q_4.png" alt />
        </a>
      </div>
      <div class="right-bottom-four">
        <ul>
          <li v-for="(item,index) in fourList" 
          :key="index"
          :class="{active:same==item.tag}"
          @mouseover="up"
          :data-type="item.tag"
          @mouseenter="fourEnter(item)"
          >{{item.title}}</li>
        </ul>
        <!-- <ul>
          <li class="right-bottom-four-left">今日热荐</li>
          <li class="right-bottom-four-right">商场精选</li>
        </ul> -->
        <div class="right-bottom-four-item">
          <div class="right-bottom-four-item-contain" v-if="secondDetail">
            <a href="#" v-for="(v,i) in secondDetail.children" :key="i">{{v}}</a>
          </div>
          <!-- <div class="right-bottom-four-item-contain">
            <a href="#">汽配人网驻广州办事处走访工程机械市场</a>
            <a href="#">汽配人网外贸平台Auto333拓展海外市场之路</a>
            <a href="#">商用车ABS配套全面开启</a>
          </div> -->
          <!-- <div class="right-bottom-four-item-contain">
                        <a href="#">汽配人网驻广州办事处走访工程机械市场</a>
                        <a href="#">汽配人网外贸平台Auto333拓展海外市场之路 </a>
                        <a href="#">商用车ABS配套全面开启</a>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    curDetail:null,
    secondDetail:null,
      kind:'activity',
      same:'recommend',
      liList: [
        {
          title: "网站动态",
          tag: "activity",
          children:['汽配人违规纠错中心上线','汽配人网大升级，新功能解读','汽配人网可用支付宝和微信支付啦']
        },
        {
          title: "网站服务",
          tag: "serve",
          children:['建站，推广，做生意就选汽配旺铺','营销宝为你提供精准营销推广服务','汽配助手——你贴心的生意小助手']
        }
      ],
      fourList:[
        {
          title:'今日热荐',
          tag:'recommend',
          children:['汽配人网驻广州办事处走访工程机械市场','汽配人网外贸平台Auto333拓展海外市场之路','商用车ABS配套全面开启']
      },{
        title:'商场精选',
        tag:'choose',
        children:['法士特变速箱配件品质保证','澎湃动力，康明斯发动机系列精品','冠军品质上海弗列加滤清器精选']
      }
      ]
    };
  },
  methods: {
    over(e) {
      //  console.log(e.target);//打印出的是li结构
      let dom = e.target;
      // console.log(dom.tagName);//打印出的是大写的LI
      let tagName = dom.tagName.toLowerCase();
      // console.log(tagName)//此时是小写
      if (tagName != "li") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");

    },
    liEnter(item){
      this.curDetail = item;
      // console.log(this.curDetail)
    },
    up(e){
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if(tagName != 'li'){
        return false;
      }
      this.same = dom.getAttribute('data-type');
    },
    fourEnter(item){
      this.secondDetail = item;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main/right.scss";
</style>