<template>
  <div class="trivel">
    <div class="back">返回疫情动态</div>
    <h2>出行防疫政策查询</h2>
    <van-field
      v-model="fieldValue"
      readonly
      @click="show = true"
    />
     <van-field
      v-model="fieldValue1"
      readonly
     
      @click="show1 = true"
    />
    <div><span>===</span></div>
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择出发城市"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
    <van-popup v-model="show1" round position="bottom">
      <van-cascader
        v-model="cascaderValue1"
        title="请选择到达城市"
        :options="options"
        @close="show1 = false"
        @finish="onFinish1"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Trivel",
  data() {
    return {
      show: false,
      show1:false,
      fieldValue: "上海",
      fieldValue1:'北京',
      cascaderValue: "",
      cascaderValue1:"",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).length>1?selectedOptions.map((option) => option.text).splice(1,1).join(''):'';
      console.log(selectedOptions)
    },
    onFinish1({ selectedOptions }) {
      this.show1 = false;
      this.fieldValue1 = selectedOptions.map((option) => option.text).length>1?selectedOptions.map((option) => option.text).splice(1,1).join(''):'';
      console.log(selectedOptions)
    },
  },
};
</script>

<style lang="less" scoped>
.trivel {
  background: url("../../assets/images/trivel.png") no-repeat;
  background-size: cover;
  width: 100%;
  padding-top: 74.7%;
  margin-bottom: -44%;
  .back {
    position: absolute;
    top: 0.24rem;
    right: 0.24rem;
    padding: 0.09rem 0.24rem;
    color: #fff;
    font-weight: 400;
    font-size: 0.22rem;
    line-height: normal;
    background-color: rgba(19, 15, 133, 0.5);
    border-radius: 0.24rem;
  }
  .van-cell.van-field{
    width: 50%;
    float: left;
    input{
      padding: 10px;
    }
  }
}
</style>