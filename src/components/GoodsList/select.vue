<template>

      <div class="m-product-select">
        <dl class="tab">
            <dt>
                {{name}}
                <i class="el-icon-caret-bottom"></i>
            </dt>
            <dd>
                <dt class="select-title">{{name}}</dt>
                <span v-for="(item,index) in list" :key="index">{{item}}</span>
            </dd>
        </dl>
    </div>
    <!-- <div class="area-select">
        <dl class="area-select-tab" >
            <dt class="area-select-tab-dt">
                <a href="#">{{name}}</a>
                <i class="el-icon-caret-bottom"></i>
            </dt>
            <dd>
               
                    <span>{{name}}</span>
                <a v-for="(v,i) in list" :key="i">{{v}}</a>
                
                
            </dd>
        </dl>
    </div> -->

</template>

<script>
export default {
    props:[
        'name',
        'list'
    ]
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/main/goodslist/select.scss';
</style>