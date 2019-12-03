<template>
<div class="sale">
    <p class="sale-title">
        热卖
        <b>产品</b>
    </p>
    <div class="sale-wrapper">
        <div class="sale-wrapper-product" v-for="(item,index) in productList" :key="index">
            <img :src="item.img" alt="">
            <a href="#">{{item.title}}</a>
            <span>￥{{item.price}}</span>
        </div>
        <a href="#">
            <dl>
                <dt>
                    <a>查看更多</a>
                    <i class="el-icon-arrow-right"></i>
                </dt>
               
            </dl>
        </a>
    </div>
</div>

</template>

<script>
export default {
    data(){
        return{
            productList:[
                {
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573814187083&di=8117385ef7f107bb5b6af87832b57aa5&imgtype=0&src=http%3A%2F%2Fimg010.hc360.cn%2Fy3%2FM04%2F18%2F84%2FwKhQh1Wk2u6EX9VqAAAAAEhRaZI342.jpg',
                    title:'汽配件',
                    price:'100'
                }, {
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573814187083&di=c8a5683c97b8cc586c8c174c524a2bc7&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fm4%2FM07%2F44%2F59%2FwKhQ6VSeEI-EDBlYAAAAAPFGI7k365.jpg',
                    title:'汽配配件',
                    price:'50'
                },{
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573814187083&di=c8a5683c97b8cc586c8c174c524a2bc7&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fm4%2FM07%2F44%2F59%2FwKhQ6VSeEI-EDBlYAAAAAPFGI7k365.jpg',
                    title:'汽配配件',
                    price:'50'
                }, {
                    img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3195105733,3984851217&fm=26&gp=0.jpg',
                    title:'车汽配',
                    price:'90'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/6/27/47b7b4f7cf85c7b24571-220.JPG',
                    title:'-25度  10KG 潍柴专用发动机冷却液 潍柴冷却液/ 潍柴专用发动机冷却液 ',
                    price:'200'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/8/26/4a069c50c254c07335bd-220.jpg',
                    title:'洋马YANMAR 4TNV98T 柴油发动机 配套现代R60G挖掘机//YANMAR洋马 4tnv98t',
                    price:'1000'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/8/13/479dbeafaa88202211c6-220.png',
                    title:'东风雷诺发电机D5010480575东风电器天运电器电喷后处理/东风雷诺发电机D5010480575',
                    price:'2700'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/7/1/49d4a64e4756fe7a456f-220.jpg',
                    title:'维柴/锡柴自主电脑板底盘黑色76针',
                    price:'902'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/6/22/446b8fc311a81f59866e-220.JPG',
                    title:'厂家直销/批发汽缸垫。玉柴系列，JA300金属汽缸垫/JA300',
                    price:'500'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/8/8/44e8beaf48c5cce12224-220.jpg',
                    title:'153前210制动凸轮轴/3501N -041/042',
                    price:'1090'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/5/4/46df828fa3adedf8962f-220.jpg',
                    title:'云内动力正品配件原厂YN4102.YN38.连杆部件/HA04047',
                    price:'789'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/6/7/4fc09de44a503dc6fe10-220.jpg',
                    title:'利欧免撬棍轮胎拆装机L8087S+390H/L8087S',
                    price:'436'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/8/20/4bf59ec5db59130024ed-220.jpg',
                    title:'一汽红塔驾驶室总成230窄体单排风情蓝/一汽红塔驾驶室',
                    price:'237'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2017/8/28/20170828120731574286-220.jpg',
                    title:'湖北大运风度驾驶室 大运驾驶室哪里好？湖北大运中心库 品牌老店 /优质的售后服务  一流的品质',
                    price:'1260'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/10/10/4d359c4bbe00493213e4-220.jpg',
                    title:'陕汽德龙新M3000X3000离合器助力器离合器分泵/DZ93189230080',
                    price:'2300'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2018/9/11/48faabd6526d2b98a9a0-220.jpg',
                    title:'东风新天龙启航版脚刹车总泵原装克诺尔脚制动阀3514010-92100/3514010-92100',
                    price:'340'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2018/9/11/48faabd6526d2b98a9a0-220.jpg',
                    title:'东风新天龙启航版脚刹车总泵原装克诺尔脚制动阀3514010-92100/3514010-92100',
                    price:'120'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/3/11/47f6909a526639ca0fa3-220.jpg',
                    title:'【QSL8.9-C360含动力包】优供东风康明斯工程机械【QSL发动机】/QSL8.9-C360 含动力包',
                    price:'2345'
                }, {
                    img:'http://img.qipeiren.com//UploadFile/UserProPic/2019/6/4/47aab1a37c4b64c0046c-220.png',
                    title:'202V27120-0002轨压传感器/200V27421-0229',
                    price:'789'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/main/sale.scss";
</style>