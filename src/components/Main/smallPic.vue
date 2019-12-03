<template>
  <div class="smallPic">
      <a href="#" v-for="(item,index) in picList" :key="index">
        <img :src="item.img" alt />
      </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picList: [
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2017/9/25/2017925173506046130.gif"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2016/5/19/2016519181086116031.gif"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2018/8/1/20188193813327197.gif"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2019/2/26/2019226161223403918.gif"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2019/4/15/20194151458326336306.gif"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2016/5/21/201652112823727328.gif"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/main/smallPic.scss';
</style>