<template>
    <div class="category">
        <dl class="category-pinyin">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(item,index) in list" :key="index">
                <a :href="'#city-' + item">{{item}}</a>
            </dd>
        </dl>
        <dl v-for="(item,index) in cityList" 
        :key="index" 
        class="category-char"
        :id="'city-' + firstChar">
            <dt>
                <span>{{item.firstChar}}</span>
            </dt>
            <dd v-for="(v,i) in item.city" :key="i">
                <a href="">{{v}}</a>
            </dd>
        </dl>
    </div>

</template>

<script>
export default {
    data(){
        return{
            list:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
            cityList:[
                {
                    firstChar:'A',
                    city:['鞍山','安庆','安阳','安顺','安康']
                }, {
                    firstChar:'B',
                    city:['北京','包头','保定','本溪','滨州','宝山']
                },{
                    firstChar:'C',
                    city:['重庆','成都','长沙','长春','常州','滁州']
                },{
                    firstChar:'D',
                    city:['大连','大理','东莞']
                },{
                    firstChar:'E',
                    city:['鄂尔多斯','鄂州','恩平','峨眉山']
                },{
                    firstChar:'F',
                    city:['福州','浮山','肥城']
                },{
                    firstChar:'G',
                    city:['广州','贵阳','桂林']
                },{
                    firstChar:'H',
                    city:['合肥','杭州','哈尔滨','衡阳','呼和浩特','海口']
                },{
                    firstChar:'J',
                    city:['济南','吉林','济宁']
                },{
                    firstChar:'K',
                    city:['昆明','开封']
                },{
                    firstChar:'L',
                    city:['临沂','聊城','洛阳']
                },{
                    firstChar:'M',
                    city:['牡丹江','马鞍山']
                },{
                    firstChar:'N',
                    city:['南京','南昌']
                },{
                    firstChar:'P',
                    city:['平顶山']
                },{
                    firstChar:'Q',
                    city:['青岛']
                },{
                    firstChar:'R',
                    city:['日照']
                },{
                    firstChar:'S',
                    city:['上海','深圳','沈阳','石家庄','三亚']
                },{
                    firstChar:'T',
                    city:['天津','太原','泰安','台州']
                },{
                    firstChar:'W',
                    city:['武汉','无锡','潍坊','威海','乌鲁木齐']
                },{
                    firstChar:'X',
                    city:['西安','厦门']
                },{
                    firstChar:'Y',
                    city:['烟台','扬州']
                },{
                    firstChar:'Z',
                    city:['淄博','郑州']
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/main/changeCity/category.scss';
</style>