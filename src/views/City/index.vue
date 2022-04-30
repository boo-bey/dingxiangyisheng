<template>
  <div>
    <Loading v-show="isLoading"></Loading>
    <div v-show="!isLoading">
        <h2>{{ cityname }}-- 城市界面</h2>
        <div  id="main" style="width: 7.5rem; height: 9rem"></div>
    </div>
    
  </div>
</template>

<script>
import Loading from '@/components/Loading/index.vue'
import api from "../../api/index";
export default {
  props: ["cityname"],
  data() {
    return {
      isLoading:true
    }
  },
  components:{
    Loading,
  },
  
  mounted() {
    api.getCity(this.cityname).then((res) => {
      let arr = res.data.retdata.subList;
      let newArr = [];
      arr.forEach((item) => {
        let obj = {};
        obj.name = item.city;//要处理市
        obj.value = item.confirm;
        newArr.push(obj);
      });
      this.$mycharts.cityMap("main", this.cityname,newArr);
     this.isLoading=false
    });
    
  },
 
  
  
};
</script>

<style lang="less" scoped>
h2 {
  margin-bottom: 1rem;
}
</style>