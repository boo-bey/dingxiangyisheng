# yiqing

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## echarts
1. 安装echarts： npm i echarts@4.x -S
2. 使用方式
    1. 方式1： 组件内部使用，单独使用
        1. 组件内导入：import echarts from 'echarts'
        2. 直接使用

    2. 方式2：挂在到vue原型上，所有组件都可以使用
        1. 导入：import echarts from 'echarts'
        2. main.js挂载：Vue.prototype.echarts=echarts

    3. 方式3：开发成vue插件 echarts//用的是这种方法
        1. 
## swiper 使用
1. 参考网址：https://github.com/surmon-china/vue-awesome-swiper
2. 使用步骤//注意版本vue2用老版本
    1. 安装：npm install swiper@5.x vue-awesome-swiper@4 --save
    2. main.js导入文件
        import VueAwesomeSwiper from 'vue-awesome-swiper'
        import 'swiper/css'
        Vue.use(VueAwesomeSwiper)
    3. 在组件使用
        <template>
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </template>
    4. 参数配置
        1. <script>
            export default {
                name: 'carrousel',
                data() {
                    return {
                        swiperOptions: {
                            pagination: {
                                el: '.swiper-pagination'
                            },
                            // Some Swiper option/callback...
                        }
                    }
                },
                computed: {
                    swiper() {
                        return this.$refs.mySwiper.$swiper
                    }
                },
                mounted() {
                    console.log('Current Swiper instance object', this.swiper)
                    this.swiper.slideTo(3, 1000, false)
                }
            }
        </script>
