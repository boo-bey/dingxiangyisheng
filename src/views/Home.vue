<template>
  <div class="home">
    <Loading v-if="isLoading"></Loading>
    <div v-else>
      <!-- 疫情图片 -->
      <img src="../assets/images/1.png" width="100%" alt="" />
      <!-- 病毒信息 -->
      <Cuvinfo :news="news"></Cuvinfo>
      <!-- 疫情图标 -->
      <Icon></Icon>
      <!-- 近期疫情分布 -->
      <div class="nowmap">
        <i class="icon"></i>
        <span>近期疫情分布</span>
        <span class="time">截止时间{{ time }}</span>
        <router-link to="/area">
          <div class="map">
            <div class="height">
              高风险地区<strong>{{ hleng }}</strong
              >个 中风险地区<strong>{{ mleng }}</strong
              >个
            </div>
            <span>查看全部<b class="iconfont">&#xe61d;</b></span>
          </div></router-link
        >
      </div>
      <!-- 国内疫情地图 -->
      <Cuvmap></Cuvmap>
      <!-- 国内数据 -->
      <Inlandcount :covData="covData"></Inlandcount>
      <!-- 国内疫情趋势bunner -->
      <Swiper></Swiper>
    </div>
  </div>
</template>

<script>
import api from "../api/index";
import Cuvinfo from "./Cuvinfo";
import Icon from "./Iconrourer/Icon.vue";
import Cuvmap from "./Cuvmap/ChinaMap.vue";
import Inlandcount from "./Inlandcount/index.vue";
import Swiper from "./VueSwiper/VueSwiper.vue";
import Loading from '@/components/Loading/index.vue'

export default {
  name: "Home",
  components: {
    Cuvinfo,
    Icon,
    Cuvmap,
    Inlandcount,
    Swiper,
  },
  data() {
    return {
      news: [],
      covData: {},
      riskarea: [],
      hleng: "",
      mleng: "",
      isLoading:true,
    };
  },
  created() {
    api.getCovInfo().then((res) => {
      let data = res.data.newslist[0].news;
this.isLoading=false
      //疫情热点
      this.news = data;
      //全国疫情数据统计信息
      let list = res.data.newslist[0].desc;
      this.covData = {
        currentConfirmedIncr: list.currentConfirmedIncr,
        confirmedIncr: list.confirmedIncr,
        confirmedCount: list.confirmedCount,
        suspectedCount: list.suspectedCount,
        currentConfirmedCount: list.currentConfirmedCount,
        curedCount: list.curedCount,
        deadCount: list.deadCount,
        seriousCount: list.seriousCount,
        suspectedIncr: list.suspectedIncr,
        curedIncr: list.curedIncr,
        deadIncr: list.deadIncr,
        seriousIncr: list.seriousIncr,
        modifyTime: list.modifyTime,
      };
      let hleng = res.data.newslist[0].riskarea.high.length;
      let mleng = res.data.newslist[0].riskarea.mid.length;
      this.hleng = hleng;
      this.mleng = mleng;
      this.riskarea = res.data.newslist[0].riskarea;
      
    });
  },
  computed: {
    time() {
      let data = new Date(this.covData.modifyTime);
      let year = data.getFullYear();
      let month = data.getMonth() + 1;
      let day = data.getDate();
      let hours = data.getHours();
      let minutes = data.getMinutes();
      let seconds = data.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
  },
};
/**
 * currentConfirmedIncr  	相比昨天现存确诊人数
 * confirmedIncr          相比昨天累计确诊人数
 * confirmedCount         累计确诊人数
 * suspectedCount         累计境外输入人数
 * currentConfirmedCount	现存确诊人数
  curedCount	            累计治愈人数
  deadCount	            	累计死亡人数
  seriousCount	         	现存无症状人数
  suspectedIncr	         	新增境外输入人数
  curedIncr	            	相比昨天新增治愈人数
  deadIncr	              相比昨天新增死亡人数
  seriousIncr	            相比昨天现存无症状人数
  yesterdayConfirmedCountIncr	    	相比昨天新增累计确诊人数
  yesterdaySuspectedCountIncr	  	相比昨天境外输入确诊人数
  highDangerCount	  	国内高风险地区个数
  midDangerCount	   	国内中风险地区个数
  modifyTime          截止时间
 */
</script>
<style lang="less" scope>
.home {
  margin: 0 auto;
  .nowmap {
    font-size: 0.34rem;
    font-weight: bold;
    line-height: 0.6rem;
    i {
      border-left: 0.1rem solid #007aff;
      margin-left: 0.1rem;
    }
    span {
      margin-left: 0.2rem;
    }
    .time {
      float: right;
      font-size: 0.1rem;
      color: #999;
      margin-right: 0.2rem;
    }
    .map {
      display: flex;
      border: 0.01rem solid rgb(225, 222, 222);
      justify-content: space-between;
      margin: 0.2rem;
      border-radius: 0.1rem;
      padding: 0.1rem;
      font-weight: normal;
      font-size: 0.3rem;
      span {
        color: #999;
        font-size: 0.2rem;
        color: #007aff;
        b {
          font-size: 0.2rem;
        }
      }
      .height {
        strong:nth-child(1) {
          color: red;
        }
        strong:nth-child(2) {
          color: orange;
        }
      }
    }
    .time {
      font-weight: normal;
    }
  }
}
</style>