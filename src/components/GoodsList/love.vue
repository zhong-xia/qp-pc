<template>
    <div class="love">
        <a class="love-contain" v-for="(item,index) in loveList" :key="index">
            <img :src="item.img" alt="">
            <span class="love-contain-title">{{item.title}}</span>
            <el-rate v-model="item.score" disabled text-color="#ff9900" score-template="{value}"></el-rate>
            <!-- <span v-if="item.score > 4.5" class="juli">很好</span>
            <span v-if="item.score > 4" class="juli">好</span>
            <span v-if="item.score > 3.5" class="juli">不错</span>
            <span v-if="item.score > 3" class="juli">一般</span>
            <span v-else class="juli">差</span> -->
            <span class="s-item-comment-total">{{item.commentNum}}人评论</span>
            <span class="love-contain-address">{{item.address}}</span>
            <span class="love-contain-price">￥{{item.price}}</span>
        </a>
    </div>

</template>

<script>
export default {
    data(){
        return{
            loveList:[
                {
                    title:'配件',
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573917136595&di=a88afd969eb74647b98df84ca0c834e3&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fm2%2FM02%2FDB%2F3C%2FwKhQclRmzbaEEximAAAAAB5vSZk291.jpg',
                    commentNum:1107,
                    address:'济南',
                    price:100,
                    score:5
                },{
                    title:'配件',
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573917136595&di=a88afd969eb74647b98df84ca0c834e3&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fm2%2FM02%2FDB%2F3C%2FwKhQclRmzbaEEximAAAAAB5vSZk291.jpg',
                    commentNum:1107,
                    address:'济南',
                    price:100,
                    score:5
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/main/goodslist/love.scss';
</style>
