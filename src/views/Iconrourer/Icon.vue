<template>
  <div class="imgs">
    <div class="img">
      <img src="../../assets/images/yz.png" alt="" />
      <p>问医生</p>
    </div>
    <div class="img">
      <img src="../../assets/images/hsjc.png" alt="" />
      <p>核酸检测</p>
    </div>
    <router-link to="/prevention">
      <div class="img">
        <img src="../../assets/images/fywz.png" alt="" />
        <p>防疫物资</p>
    </div></router-link>
    <router-link to="/trivel">
      <div class="img">
        <img src="../../assets/images/cxzc.png" alt="" />
        <p>出行政策</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Icon",
};
</script>

<style lang="less" scoped>
.imgs {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #f7f7f7;
  padding: 0.2rem;
  box-sizing: border-box;
  .img {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 0.8rem;
    }
  }
}
</style>