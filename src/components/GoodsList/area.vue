<template>
  <div class="area">
    <div class="area-category">
      <div class="area-category-item">
        <span class="area-category-item-title1">分类</span>
        <a class="area-category-item-title2">全部</a>
        <div class="area-category-item-right">
          <div class="area-category-item-right-top">
            <a href="#" v-for="(item,index) in cateList" :key="index">{{item}}</a>
          </div>
          <div class="area-category-item-right-bottom">
            <div
              class="area-category-item-right-bottom-table"
              v-for="item in classfyList"
              :key="item.type"
            >
              <m-select :name="item.title" :list="item.sub_list" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="area-address">
      <div class="area-address-list">
        <span class="area-address-list-title1">区域</span>
        <a class="area-address-list-title2">全部</a>
        <div class="area-address-list-right">
          <!-- <div class="area-address-list-right-top">
            <a v-for="(item,index) in areaList" :key="index">{{item}}</a>
          </div> -->
          <div class="area-address-list-right-bottom">
            <div
              class="area-address-list-right-bottom-table"
              v-for="item in areaClassify"
              :key="item.type"
            >
              <m-select :name="item.title" :list="item.sub_list" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MSelect from "../GoodsList/select.vue";
export default {
  data() {
    return {
      cateList: [
        "重汽市场",
        "一汽市场",
        "东风市场",
        "北汽市场",
        "江淮市场",
        "山西市场",
        "陕西市场"
      ],
      classfyList: [
        {
          title: "山东分站",
          type: "shan",
          sub_list: ["全部", "发动机", "进气系统", "排气系统", "电器电子"]
        },
        {
          title: "江西分站",
          type: "jiang",
          sub_list: ["全部", "养护用品", "洗车机", "环卫绿化", "货物运输"]
        },
        {
          title: "广东分站",
          type: "guang",
          sub_list: ["全部", "传感器", "车身", "空调", "灯具"]
        },
        {
          title: "东北分站",
          type: "dong",
          sub_list: ["全部", "供油系统", "点火系", "起动系", "压缩机"]
        }
      ],
      areaList: ["推荐商圈", "推荐场地"],
      areaClassify: [
        {
          title: "推荐商圈",
          type: "recommend",
          sub_list: ["全部", "北京", "深圳"]
        },
        {
          title: "推荐场地",
          type: "place",
          sub_list: ["全部", "济南", "青岛"]
        }
      ]
    };
  },
  components: {
    MSelect
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main/goodslist/area.scss";
</style>