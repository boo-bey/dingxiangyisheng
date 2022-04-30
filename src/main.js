import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/js/phone'
import './assets/comon/rest.css'
import './utils/zoom'//禁止ios屏幕缩放
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'
Vue.use(VueAwesomeSwiper)

// import echarts from 'echarts'//第二种方法全局引入,直接挂载到原型上
// Vue.prototype.echarts=echarts

import echarts from './plugins/echarts' //第三种方法开发成插件
Vue.use(echarts)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Loading from './components/Loading'
Vue.component('Loading', Loading)
import './plugins/vant' //引入
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')