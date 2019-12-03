<template>
    <div class="hot">
        <p class="hot-title">热门
            <b>品牌</b>
        </p>
        <div class="hot-contain">
            <div class="hot-contain-pic" v-for="(item,index) in picList" 
            :key="index" 
            :class="{active:kind==item.tab}"
            :data-type="item.tab"
            @mouseover="over">
                <dl>
                    <dt>
                        <img :src="item.img" alt="">
                    </dt>
                    <dd>{{item.title}}</dd>
                </dl>
                <div class="back">
                    <p class="title">{{item.title}}</p>
                    <div class="enter">
                        <a href="#">点击进入</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            kind:'',
            picList:[
                {
                    tab:'cai',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085618854222.png',
                    title:'采埃孚'
                },{
                    tab:'zhong',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601090536492801.png',
                    title:'重汽亲人配件'
                }, {
                    tab:'bo',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085617887020.png',
                    title:'博世'
                },{
                    tab:'fa',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085633689848.png',
                    title:'法士特'
                },{
                    tab:'fu',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085614345814.png',
                    title:'弗列加'
                },{
                    tab:'gai',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085614704615.png',
                    title:'盖茨'
                }, {
                    tab:'han',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085701177096.png',
                    title:'汉德车桥'
                },{
                    tab:'huo',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085716277923.png',
                    title:'霍尔塞特'
                },{
                    tab:'wei',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085705014703.png',
                    title:'威伯科'
                },{
                    tab:'chai',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601090535041999.png',
                    title:'潍柴动力'
                }, {
                    tab:'yu',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085744061572.png',
                    title:'玉柴'
                },{
                    tab:'rui',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085615531416.png',
                    title:'盖瑞特'
                },{
                    ta:'zhao',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085625219033.png',
                    title:'朝柴'
                },{
                    tab:'lei',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085633175047.png',
                    title:'法雷奥'
                }, {
                    tab:'shuang',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085724202737.png',
                    title:'双星轮胎'
                },{
                    tab:'ke',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085713703918.png',
                    title:'壳牌'
                },{
                    tab:'da',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085320140308.png',
                    title:'大众'
                },{
                    tab:'ao',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085316458702.png',
                    title:'奥迪'
                }, {
                    tab:'ben',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085318065504.png',
                    title:'本田'
                },{
                    tab:'bao',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085317581904.png',
                    title:'宝马'
                },{
                    tab:'lu',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085324180715.png',
                    title:'路虎'
                },{
                    tab:'feng',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085321013910.png',
                    title:'丰田'
                }, {
                    tab:'xue',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085328735923.png',
                    title:'东风雪铁龙'
                },{
                    tab:'ha',
                    img:'http://img.qipeiren.com/qipeiren/images/brand-icon/new/201706/20170601085321637911.png',
                    title:'哈弗'
                }
            ]
        }
    },
    methods:{
        over(e){
            let dom = e.target;
            let tagName = dom.tagName.toLowerCase();
            // console.log(tagName)
            if(tagName != 'div'){
                return false;
            }
            this.kind = dom.getAttribute("data-type");
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/main/hot.scss';
</style>