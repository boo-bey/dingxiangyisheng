<template>
  <div class="inland">
    <h3>截止北京时间{{ time }}</h3>
    <div class="counts">
      <div class="count">
        <p>较昨日<b>{{covData.currentConfirmedIncr|getadd}}</b></p>
        <span>{{covData.currentConfirmedCount|num}}</span>
        <p class="now">现存确诊</p>
      </div>
      <div class="count">
        <p>较昨日<b>{{covData.suspectedIncr|getadd}}</b></p>
        <span>{{covData.suspectedCount|num}}</span>
        <p class="now">境外输入</p>
      </div>
      <div class="count">
        <p>较昨日<b>{{covData.seriousIncr|getadd}}</b></p>
        <span>{{covData.seriousCount|num}}</span>
        <p class="now">现存无症状</p>
      </div>
      <div class="count">
        <p>较昨日<b>{{covData.confirmedIncr|getadd}}</b></p>
        <span>{{covData.confirmedCount|num}}</span>
        <p class="now">累计确诊</p>
      </div>
       <div class="count">
        <p>较昨日<b>{{covData.deadIncr|getadd}}</b></p>
        <span>{{covData.deadCount|num}}</span>
        <p class="now">累计死亡</p>
      </div>
       <div class="count">
        <p>较昨日<b>{{covData.curedIncr|getadd}}</b></p>
        <span>{{covData.curedCount|num}}</span>
        <p class="now">累计治愈</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inlandcount",
  props: ["covData"],
  filters:{
      getadd(val){
         
          if(val>0){
              return '+'+val.toLocaleString()
          }
          return val
      },
      num(val){//给数值加千位分割符
        if(val==undefined)return'';//解决报错toLocaleString()报错问题
        return val.toLocaleString()
      }

  },
  computed: {
    
    time() {
      let data = new Date(this.covData.modifyTime);
      let year = data.getFullYear();
      let month = data.getMonth()+1;
      let day = data.getDate();
      let hours=data.getHours()
      let minutes = data.getMinutes();
      let seconds = data.getSeconds();
      return year + "-" + month +'-'+day+' '+hours+':'+minutes+':'+seconds;
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

<style lang="less" scoped>
.inland {
  width: 100%;
  color: #686868;
  padding: 0.3rem;
  box-sizing: border-box;
  h3 {
    margin-bottom: 0.2rem;
  }
  .counts {
    display: flex;
    flex-wrap: wrap;
    border: #f7f7f7 solid 0.05rem;
    box-shadow: 0 0 10px 0px rgba(171, 169, 169, 0.2);
    border-radius: 0.1rem;
    .count {
      width: 33.3333333%;
      border-right: 0.02rem solid #f7f7f7;
      box-sizing: border-box;
      text-align: center;
      margin-bottom: 0.1rem;
      padding: 0.1rem;
      p {
        font-weight: bold;
      }
      b {
        font-weight: normal;
      }
      .now {
        color: #000;
      }
    }
    .count:nth-child(1) span {
      font-weight: bold;
      font-size: 0.4rem;
      color: rgb(246, 66, 66);
    }
    .count:nth-child(2) span {
      font-weight: bold;
      font-size: 0.4rem;
      color: green;
    }
    .count:nth-child(3) span {
      font-weight: bold;
      font-size: 0.4rem;
      color: orange;
    }
    .count:nth-child(4) span {
      font-weight: bold;
      font-size: 0.4rem;
      color: blue;
    }
    .count:nth-child(5) span {
      font-weight: bold;
      font-size: 0.4rem;
      color: rgb(93, 112, 146);
    }
    .count:nth-child(6) span{
      font-weight: bold;
      font-size: 0.4rem;
      color: rgb(40, 183, 163);
    }
    .count:nth-child(1) b{
        color:rgb(246, 66, 66) ;
    }
    .count:nth-child(2) b{
        color: green; ;
    }
    .count:nth-child(3) b{
       color: orange;
    }
    .count:nth-child(4) b{
       color: blue;
    }
    .count:nth-child(5) b{
        color: rgb(93, 112, 146);
    }
    .count:nth-child(6) b{
        color: rgb(40, 183, 163);
    }

  }
}
</style>