<template>
  <div class="m-menu">
    <ul @mouseleave="menuLeave">
      <li v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <a href="#">{{item.title}}</a>
        <img src="../../assets/img/svg/arrow-right.svg" alt />
      </li>
    </ul>
    <div class="m-menu-detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(v,i) in curDetail.children">
        <div class="m-menu-detail-item-item1" :key="i">
          <div class="m-menu-detail-item-item1-left">
            <div
              class="m-menu-detail-item-item1-left-list"
              v-bind="(v.dtTitle = true) ? isShow : !isShow"
            >
              <div class="m-menu-detail-item-item1-left-list-title">
                <label for>{{v.title}}</label>
              </div>
              <div class="m-menu-detail-item-item1-left-list-content">
                <dl v-for="(dl,i) in v.dlTitle" :key="i">
                  <dt>
                    <a href="#">{{dl.title}}</a>
                    <img src="../../assets/img/svg/arrow-right.svg" alt />
                  </dt>
                  <dd>
                    <p class="dd-label" v-for="(dd,i) in dl.ddTitle" :key="i">
                      <label>|</label>
                      <a href="#">{{dd}}</a>
                    </p>
                  </dd>
                </dl>
              </div>
            </div>
            <dl
              v-bind="(v.dtTitle = true) ? isShow : !isShow"
              class="m-menu-detail-item-item1-left-dl"
            >
              <dd v-for="(dd,i) in v.ddTitle" :key="i">
                <a href="#">{{dd}}</a>
              </dd>
            </dl>
          </div>
          <div class="m-menu-detail-item-item1-close">
            <div class="m-menu-detail-item-item1-close-right" @click="close">
              <img src="../../assets/img/svg/关闭.svg" alt />
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="m-menu-down">
      <img
        src="http://img.qipeiren.com/UploadFile/UserProPic/2016/8/24/2016824111748638217.jpg"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      curDetail: null,
      menuList: [
        {
          title: "发动机系统",
          id: "1",
          children: [
            {
              title: "发动机系统",
              dlTitle: [
                {
                  title: "机体组",
                  ddTitle: [
                    "发动机总成",
                    "发动机悬置",
                    "气缸体",
                    "汽缸盖",
                    "汽缸垫",
                    "气缸套",
                    "四配套",
                    "发动机修理包",
                    "其他发动机附件"
                  ]
                },
                {
                  title: "曲柄连杆机构",
                  ddTitle: [
                    "活塞",
                    "活塞环",
                    "连杆",
                    "连杆瓦",
                    "连杆螺母",
                    "飞轮",
                    "飞轮螺栓",
                    "曲轴油封",
                    "曲轴瓦",
                    "止推瓦",
                    "定位销",
                    "正时链轮",
                    "曲轴皮带轮",
                    "扭振减振器",
                    "连杆轴承",
                    "曲轴"
                  ]
                },
                {
                  title: "曲柄连杆机构",
                  ddTitle: [
                    "活塞",
                    "活塞环",
                    "连杆",
                    "连杆瓦",
                    "连杆螺母",
                    "飞轮",
                    "飞轮螺栓",
                    "曲轴油封",
                    "曲轴瓦",
                    "止推瓦",
                    "定位销",
                    "正时链轮",
                    "曲轴皮带轮",
                    "扭振减振器",
                    "连杆轴承",
                    "曲轴"
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "进排气系统",
          id: "2",
          children: [
            {
              title: "进排气系统",
              dlTitle: [
                {
                  title: "进气系统",
                  ddTitle: [
                    "空气滤清器",
                    "滤芯",
                    "空气预滤器",
                    "进气歧管",
                    "进气分配器",
                    "进气通道",
                    "进气过滤管"
                  ]
                },
                {
                  title: "排气系统",
                  ddTitle: [
                    "排气歧管",
                    "排气管螺栓",
                    "排气管弹簧",
                    "消声器",
                    "排气摇臂轴",
                    "排气系统附件"
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "点火启动供油系统",
          id: "3",
          children: [
            {
              title: "点火启动供油系统",
              dlTitle: [
                {
                  title: "供油系统",
                  ddTitle: [
                    "喷油器",
                    "喷油泵",
                    "输油泵",
                    "汽油泵",
                    "汽油滤清器",
                    "燃油箱",
                    "油门拉线",
                    "空气流量计",
                    "油门踏板",
                    "化油器",
                    "油水分离器",
                    "喷油提前器"
                  ]
                },
                {
                  title: "点火系",
                  ddTitle: [
                    "点火开关",
                    "点火线圈",
                    "分电器",
                    "汽油泵",
                    "高压点火线",
                    "点火信号发生器",
                    "点火器附件",
                    "断电器",
                    "油门踏板",
                    "化油器",
                    "油水分离器",
                    "全负荷开关"
                  ]
                },
                {
                  title: "起动系",
                  ddTitle: [
                    "蓄电池",
                    "喷油泵",
                    "输油泵",
                    "汽油泵",
                    "汽油滤清器",
                    "燃油箱",
                    "油门拉线",
                    "预热器",
                    "油门踏板",
                    "化油器",
                    "油水分离器",
                    "单项离合器"
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "行走系统",
          children: [
            {
              title: "行走系统",
              ddTitle: [
                "前桥",
                "半轴",
                "主从动轮",
                "车架总成",
                "脱钩",
                "蓄电池托架",
                "前桥",
                "半轴",
                "主从动轮",
                "车架总成",
                "脱钩",
                "蓄电池托架",
                "前桥",
                "半轴",
                "主从动轮",
                "车架总成",
                "脱钩",
                "蓄电池托架",
                "前桥",
                "半轴",
                "主从动轮",
                "车架总成",
                "脱钩",
                "蓄电池托架"
              ]
            }
          ]
        },
        {
          title: "制动系统",
          children: [
            {
              title: "制动系统",
              ddTitle: [
                "空气压缩机",
                "制动钳",
                "ABS泵",
                "手控阀",
                "储能器",
                "手制动拉杆",
                "空气压缩机",
                "制动钳",
                "ABS泵",
                "手控阀",
                "储能器",
                "手制动拉杆",
                "空气压缩机",
                "制动钳",
                "ABS泵",
                "手控阀",
                "储能器",
                "手制动拉杆"
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    menuEnter(item) {
      // console.log(item);
      this.curDetail = item;
    },
    menuLeave() {
      var self = this;
      this.timer = setTimeout(function() {
        self.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    },
    close(){
      this.curDetail = null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main/menu.scss";
</style>