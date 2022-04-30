<template>
  <div class="content">
    <div class="title">
      国内疫情地图<span>--更新时间：{{ time }}</span>
    </div>
    <!-- <div id="main" style="width: 7.5rem; height: 6.5rem"></div>
    <div id="main1" style="width: 7.5rem; height: 6.5rem"></div> -->

    <van-tabs
      v-model="active"
      animated
      @change="change"
      :swipeable="true"
      line-width="0.7rem"
    >
     
      <van-tab title="现存确诊">
       
        <div v-loading="show" id="main1" style="width: 7.5rem; height: 6.5rem"></div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="main" style="width: 7.5rem; height: 6.5rem"></div>
      </van-tab>
    </van-tabs>
     <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import api from "../../api/index";
// import echarts from "echarts";//1.在局部组件内使用
export default {
  data() {
    return {
      maplist: [],
      active: 0,
      arr: [],
      time: "",
      isLoading:true,
      show:true
    };
  },
  // mounted() {
  //   this.getBar();
  // },
  // methods: {
  //   getBar() {
  //     // 基于准备好的dom，初始化echarts实例
  //     var myChart = this.echarts.init(document.getElementById("main"));

  //     // 指定图表的配置项和数据

  //     var option = {
  //       title: {
  //         text: "ECharts 入门示例",
  //       },
  //       tooltip: {},
  //       legend: {
  //         data: ["销量"],
  //       },
  //       xAxis: {
  //         data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  //       },
  //       yAxis: {},
  //       series: [
  //         {
  //           name: "销量",
  //           type: "line",
  //           data: [5, 20, 36, 10, 10, 20],
  //         },
  //       ],
  //     };

  //     // 使用刚指定的配置项和数据显示图表。
  //     myChart.setOption(option);
  //   },
  // },
  mounted() {
    // { name: '内蒙古',value: 200},
    // {name: '北京',value: 800}
    //获取疫情数据
    let localdata = JSON.parse(localStorage.getItem("chinadata"));
    if (localdata) {
      this.maplist = localdata;
      this.isLoading=false
    } else {
      api.getChinaData().then((res) => {
        let chinadata = res.data.retdata;
        localStorage.setItem("chinadata", JSON.stringify(chinadata));
        this.isLoading=false;
      });
    }
    let n = localdata.length;
    let arr = [];
    let newarr = [];
    for (let i = 0; i < n; i++) {
      let obj = {};
      let newobj = {};
      obj.name = localdata[i].xArea; //城市名称
      obj.value = localdata[i].confirm; //累计确诊人数
      newobj.name = localdata[i].xArea;
      newobj.value = localdata[i].curConfirm;
      arr.push(obj);
      newarr.push(newobj);
    }
    this.arr = arr;
    this.$nextTick(() => {
      this.$mycharts.chinaMap("main1", newarr); //现存
     
    });
    let shijian = new Date();
    let year = shijian.getFullYear();
    let month = shijian.getMonth() + 1;
    let day = shijian.getDate();
    this.time = year + "-" + month + "-" + day;
    this.show=false
  },
  
  methods: {
    change() {
      this.$nextTick(() => {
        this.$mycharts.chinaMap("main", this.arr);
         
      });
    },
  },
  
};
</script>

<style lang="less" scoped>
.content {
  position: relative;
  .chinamap {
    #main {
      background: rgb(233, 230, 230);
    }
  }
  .title {
    padding: 0.2rem;
  }
}
</style>