<template>
  <div class="mark">
    <div class="mark-container">
      <dl
        class="mark-container-title"
        v-for="(item,index) in markList"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
        @mouseover="over"
      >
        <dt>{{item.title}}</dt>
        <dd>
          <ul>
            <li v-for="(v,i) in item.sub_title" :key="i">
              <a href="#">{{v}}</a>
            </li>
          </ul>
          <div class="carPic">
            <img :src="item.img" alt />
          </div>
          <div class="special">
            <span>进入特色市场</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "dong",
      markList: [
        {
          title: "东风市场",
          tab: "dong",
          img:
            "http://img.qipeiren.com/Storage/ShouYe/ShouYe_Image/www/201705281424398992510.png",
          sub_title: [
            "东风天龙",
            "旗舰东风",
            "天龙东风",
            "天锦东风",
            "大力神东风",
            "柳汽霸龙东风",
            "柳汽乘龙东风",
            "猛士东风小康"
          ]
        },
        {
          title: "重汽市场",
          tab: "zhong",
          img:
            "http://img.qipeiren.com/Storage/ShouYe/ShouYe_Image/www/201705281424465136620.png",
          sub_title: [
            "豪沃HOWO",
            "斯太尔STR",
            "金王子",
            "豪瀚HOHAN",
            "汕德卡SITRAK",
            "黄河福泺威泺"
          ]
        },
        {
          title: "一汽市场",
          tab: "yi",
          img:
            "http://img.qipeiren.com/Storage/ShouYe/ShouYe_Image/www/201705281424515368710.png",
          sub_title: ["解放J6", "奥威", "大威", "骏威", "三赛", "其他（解放）"]
        },
        {
          title: "陕汽市场",
          tab: "shan",
          img:
            "http://img.qipeiren.com/Storage/ShouYe/ShouYe_Image/www/201705281424569500800.png",
          sub_title: [
            "陕汽",
            "德龙陕汽",
            "奥龙陕汽",
            "轩德陕汽",
            "华山欧舒特陕汽",
            "通家陕汽",
            "延安",
            "其他（陕汽）"
          ]
        },
        {
          title: "北汽市场",
          tab: "bei",
          img:
            "http://img.qipeiren.com/Storage/ShouYe/ShouYe_Image/www/201705281425021136900.png",
          sub_title: [
            "欧曼",
            "欧马",
            "可奥",
            "铃福",
            "田金",
            "刚福",
            "田骁",
            "运瑞",
            "沃时代",
            "康瑞欧辉"
          ]
        }
      ]
    };
  },
  methods: {
    over(e) {
      // console.log(e.target);
      let dom = e.target;
      // console.log(e.target)
      // 目的是当鼠标一进dl就触发，所以获取dl标签名
    //   console.log(dom.tagName);
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dl") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main/mark.scss";
</style>