<template>
    <div>
          <swiper ref="mySwiper" :options="swiperOptions" class="bunners">
                <swiper-slide v-for="(item) in arr" :key="item.title"><img :src="item.image" width='100%' alt=""></swiper-slide>
                
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <ul class="list">
                <li v-for="(item,index) in arr" :key="item.title" :class="{acitve : index == num }" @click="changeIndex(index)">
                  {{item.title}}
                </li>
            </ul>
    </div>
</template>

<script>
import api from '../../api/index'
    export default {
    name: 'carrousel',
    data() {
        let  That=this
        return {
            
            num:1,
            arr:[],
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                // Some Swiper option/callback...
                
                autoplay:  {delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
                },
                loop:true,
                on: {//切换时改变li样式
                    slideChangeTransitionStart: function(){
                    if(this.activeIndex===That.arr.length+1){
                        That.num=0
                    }else{
                        That.num=this.activeIndex-1
                    }
                    
                    },
                },
            },
            
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
        api.getSwiperBunner().then(res=>{
            this.arr=res.data.result
        })
    },
    methods:{
        changeIndex(index){
            this.num=index;
            this.swiper.slideTo(index+1,1000,false)
        }
    }
}
</script>

<style lang="less" scoped>
.bunners{
    overflow: hidden;
}
.list{
    display: flex;
    flex-wrap: wrap;
    
    li{
        width: 1.2rem;
        margin:0 0.1rem;
        background-color: #f7f7f7;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.24rem;
        padding: .045rem;
        
    }
    .acitve{
        background: #f1f5ff;
        color: #4169e2;
    }
}
</style>