<template>
  <div class="goods">
    <!-- 排序 -->
    <div class="goods-sort">
      <a href="#" v-for="(item,index) in sortList" :key="index">{{item}}</a>
    </div>
    <!-- 货物列表 -->
    <div class="goods-wrapper">
      <div class="goods-wrapper-example" v-for="(item,index) in goodsList" :key="index">
        <div class="goods-wrapper-example-img">
          <img :src="item.img" alt />
        </div>
        <div class="goods-wrapper-example-content">
          <h3>{{item.title}}</h3>
          <p>
            <el-rate v-model="item.score" disabled text-color="#ff9900" score-template="{value}"></el-rate>
            <span v-if="item.score > 4.5" class="juli">很好</span>
            <span v-if="item.score > 4" class="juli">好</span>
            <span v-if="item.score > 3.5" class="juli">不错</span>
            <span v-if="item.score > 3" class="juli">一般</span>
            <span v-else class="juli">差</span>
            <span class="juli">{{item.score}}分</span>
            <span class="s-item-comment-total">{{item.commentNum}}人评论</span>
          </p>
          <p>
            <span class="goods-wrapper-example-content-tab">
              <span>{{item.tab}}</span>
              <label>|</label>
              <span>{{item.address}}</span>
            </span>
            <span class="goods-wrapper-example-content-add">{{item.moreAddress}}</span>
            <span>
              <a href="#" class="map">
                <i class="el-icon-location-information"></i>
                查看地图
              </a>
            </span>
          </p>
          <ul class="goods-wrapper-example-content-last">
            <li>
              <p>
                <a href="#">{{item.title}}</a>
                <span>{{item.moreTitle}}</span>
              </p>
              <p>
                <span class="price">￥{{item.price}}</span>
                <span class="currentPrice">门市价￥{{item.currentPrice}}</span>
                <span class="saleNum">已售{{item.saleNum}}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortList: ["智能排序", "价格排序", "人气最高", "评价最高"],
      goodsList: [
        {
          title: "小汽车",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574505674&di=d53f7b4cefdbb35a264cce6e628d45c7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg004.hc360.cn%2Fy5%2FM07%2F13%2F48%2FwKhQUVXJtJuEV-9yAAAAAEKCod8103.jpg",
          score: 4,
          commentNum: 120,
          tab: "便捷车",
          address: "济南汽配城",
          moreAddress: "山东省济南市槐荫区山东汽配城",
          moreTitle: "方便灵活汽车",
          price: 1200,
          currentPrice: 1150,
          saleNum: 10
        },
        {
          title: "小汽车",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574505674&di=d53f7b4cefdbb35a264cce6e628d45c7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg004.hc360.cn%2Fy5%2FM07%2F13%2F48%2FwKhQUVXJtJuEV-9yAAAAAEKCod8103.jpg",
          score: 4,
          commentNum: 120,
          tab: "便捷车",
          address: "济南汽配城",
          moreAddress: "山东省济南市槐荫区山东汽配城",
          moreTitle: "方便灵活汽车",
          price: 1200,
          currentPrice: 1150,
          saleNum: 10
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main/goodslist/goods.scss";
</style>