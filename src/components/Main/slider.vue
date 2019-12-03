<template>
  <div class="slider">
     
      <div class="slider-top">
        <el-carousel height="375px">
          <el-carousel-item v-for="(item,index) in carouselList" :key="index">
            <img :src="item.img" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
     
       <div class="slider-bottom">
        <ul>
          <li v-for="(item,index) in bottomImgList" :key="index">
            <img :src="item.img" alt />
          </li>
        </ul>
      </div> 
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselList: [
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2019/11/1/2019111115288762774.png"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2019/11/1/20191111058401840426.png"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2019/11/1/20191111058335033053.png"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2019/11/1/20191111058465917453.png"
        }
      ],
      bottomImgList: [
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2019/11/1/20191111118566213397.jpg"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2019/11/1/20191111120166695010.jpg"
        },
        {
          url: "#",
          img:
            "http://img.qipeiren.com/UploadFile/UserProPic/2019/11/1/20191111120543326053.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main/slider.scss";
</style>