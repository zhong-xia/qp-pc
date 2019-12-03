<template>
  <div class="good">
    <p class="good-shopping">
      汽配商城
      <b>精品好货</b>
    </p>
    <div class="good-wrapper">
      <div class="good-wrapper-left">
        <div class="good-wrapper-left-top">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=196143930,2020454663&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="good-wrapper-left-bottom">
          <div class="good-wrapper-left-bottom-slider">
            <el-carousel trigger="click" height="204px">
              <el-carousel-item v-for="(item,index) in imgList" :key="index">
                <img :src="item.img" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
          <a class="good-wrapper-left-bottom-main">
            <img
              src="http://img.qipeiren.com/Storage/ShouYe/ShouYe_Image/www/201705281448303749630.jpg"
              alt
            />
          </a>
          <a class="good-wrapper-left-bottom-fu">
            <img
              src="http://img.qipeiren.com/Storage/ShouYe/ShouYe_Image/www/201705281448432293860.jpg"
              alt
            />
          </a>
        </div>
      </div>
      <div class="good-wrapper-main">
        <a href="#" v-for="(item,index) in mainList" :key="index">
          <img :src="item.img" alt />
        </a>
      </div>
      <div class="good-wrapper-right">
        <p class="good-wrapper-right-new">最新入驻</p>
        <dl v-for="(item,index) in newList" :key="index">
          <dt>
            <p>{{item.id}}</p>
            <a href="#">{{item.title}}</a>
          </dt>
          <dd>
           主要产品：{{item.product}}</dd>
          <dd>所在地：{{item.address}}</dd>
        </dl>
        <div class="good-wrapper-right-more">
          <a href="#">
            <span>更多热门产品</span>
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          url: "#",
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2494900569,1520257871&fm=26&gp=0.jpg"
        },
        {
          url: "#",
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1723748088,1882178114&fm=26&gp=0.jpg"
        },
        {
          url: "#",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573793318508&di=2c60eb77a21ebe5e47bf6e80b71cd230&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110712%2F30304-110G21H63597.jpg"
        }
      ],
      mainList: [
        {
          url: "#",
          img:
            "http://img.qipeiren.com/Storage/ShouYe/ShouYe_Image/www/201705281448250241540.jpg"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/Storage/ShouYe/ShouYe_Image/www/201705281448193769440.jpg"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/Storage/ShouYe/ShouYe_Image/www/201705281448303749630.jpg"
        }
      ],
      newList:[
          {
              id:'1',
              title:'沃诺康明斯配件专营店',
              product:'康明斯系列,仪征活塞环系列',
              address:'湖北省 十堰市'
          },{
              id:'2',
              title:'十堰俊晓华工贸有限公司',
              product:'驾驶室总成,覆盖件系列',
              address:'湖北省 十堰市'
          },{
              id:'3',
              title:'十堰倍兴工贸有限公司',
              product:'大运系列,陕汽系列,东风系列',
              address:'湖北省 十堰市'
          },{
              id:'4',
              title:'十堰东软工贸有限公司',
              product:'油门线,刹车线,控制线',
              address:'湖北省 十堰市'
          },{
              id:'5',
              title:'新华强配件专营店',
              product:'东风(十堰)发动机部件有限公',
              address:'湖北省 十堰市'
          }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main/good.scss";
</style>