<template>
  <div class="content">
    <img src="../../assets/images/wzn.png" width="100%"  alt="" />
    <div class="wrapper">
        <!-- 引入vant组件库 -->
      <van-tabs v-model="active" animated class="tabs"  :sticky='true'>
        <van-tab v-for="item in arr" :title="item.title" :key="item.title" class="tab">
          <img :src="item.img" width="100%" alt="">
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
//先导入图片下面再使用
import img1 from '../../assets/images/jj.png'
import img2 from '../../assets/images/kz.png'
import img3 from '../../assets/images/xsy.png'
import img4 from '../../assets/images/wdj.png'
export default {
    data() {
        return {
            active:0,
            arr:[
                {
                    img:img1,
                    title:'消毒剂'
                },
                {
                    img:img2,
                    title:'口罩'
                },
                {
                    img:img3,
                    title:'洗手液'
                },
                {
                    img:img4,
                    title:'温度计'
                }
            ]
        }
    },
};
</script>

<style lang="less" scoped>
.content{
    img{
        display: block;
    }
    .wrapper{
        padding: 0.3rem 0.2rem;
        background: rgb(57, 61, 255);
        margin: 0;
    .tabs{
        border-radius: 5px;
    }
 }
} 
.title-style{
    border: none;
    
}

</style>