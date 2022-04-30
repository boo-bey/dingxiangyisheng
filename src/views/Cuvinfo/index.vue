<template>
  <div class="info">
    <div class="infop">
      <img src="../../assets/images/2.png" alt="" /><a href="">查看更多 ></a>
    </div>

    <p v-for="item in news" :key="item.id">
      <span>最新</span>
      {{ item.title }}
      <i class="iconfont">&#xe61d;</i>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      tpye: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.info {
  .infop::after {
    content: "";
    display: block;
    clear: both;
  }
  .infop {
    margin-bottom: 0.2rem;
  }
  img {
    width: 1.4rem;
    height: 0.48rem;
    border-left: 0.1rem solid #007aff;
    padding-left: 0.2rem;
    float: left;
  }
  a {
    float: right;
    color: #007aff;
  }
  padding: 0.2rem;
  p {
    line-height: 0.8rem;
    color: #666;
    letter-spacing: 0.02rem;
    color: #1a1a1a;
    font-size: 0.3rem;
    span {
      background: red;
      border-radius: 0.05rem;
      color: white;
      font-size: 0.11rem;
      margin-right: 0.1rem;
      line-height: 0.46rem;
    }
    i{
      float: right;
      color: #999;
    }
  }
}
</style>