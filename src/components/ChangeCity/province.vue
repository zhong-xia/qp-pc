<template>
  <div class="province">
    <div class="province-wrapper">
      <span>按省份选择：</span>
      <el-select v-model="value" filterable placeholder="省份">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          class="provinceName"
        ></el-option>
      </el-select>

      <el-select v-model="value" filterable placeholder="城市">
        <el-option
          v-for="item in cityList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          class="cityName"
        ></el-option>
      </el-select>

      <span class="search">直接搜索：</span>
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in searchList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "山东"
        },
        {
          value: "选项2",
          label: "江苏"
        },
        {
          value: "选项3",
          label: "浙江"
        },
        {
          value: "选项4",
          label: "河南"
        },
        {
          value: "选项5",
          label: "河北"
        },
        {
          value: "选项6",
          label: "四川"
        },
        {
          value: "选项7",
          label: "贵州"
        },
        {
          value: "选项8",
          label: "海南"
        },
        {
          value: "选项9",
          label: "广州"
        },
        {
          value: "选项10",
          label: "哈尔滨"
        },
        {
          value: "选项11",
          label: "辽宁"
        },
        {
          value: "选项12",
          label: "甘肃"
        },
        {
          value: "选项13",
          label: "广西"
        },
        {
          value: "选项14",
          label: "新疆"
        },
        {
          value: "选项15",
          label: "西藏"
        },
        {
          value: "选项16",
          label: "安徽"
        },
        {
          value: "选项17",
          label: "重庆"
        },
        {
          value: "选项18",
          label: "青海"
        },
        {
          value: "选项19",
          label: "吉林"
        },
        {
          value: "选项20",
          label: "福建"
        },
        {
          value: "选项21",
          label: "吉林"
        },
        {
          value: "选项22",
          label: "内蒙古"
        },
        {
          value: "选项23",
          label: "宁夏"
        },
        {
          value: "选项24",
          label: "山西"
        },
        {
          value: "选项25",
          label: "陕西"
        }
      ],
      cityList: [
        {
          value: "选项1",
          label: "济南"
        },
        {
          value: "选项2",
          label: "泰安"
        },
        {
          value: "选项3",
          label: "石家庄"
        }
      ],
      searchList: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "山东",
        "山西",
        "陕西",
        "济南"
      ]
    };
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: item, label: item };
    });
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.searchList = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.searchList = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/css/main/changeCity/province.scss';
</style>