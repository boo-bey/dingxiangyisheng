// 所有的请求的接口的方法
import axios from 'axios'
import base from './base'
import md5 from 'md5-js'

const api={
    //病毒信息获取
    getCovInfo(){
       return axios.get(base.host+base.covInfo)
    },
    getChinaData(){
        return axios.get(base.baseurl+base.chinaData)
    },
    //获取城市接口
    getCity(city_name){
        //MD5加密字符串：appid16604city_name北京formatjson+密钥
        //参数：format=json&appid=16604&city_name=%E5%8C%97%E4%BA%AC&sign=9df3e7e3e96f396bb08260c48961f0a9
        //安装md5：npm i md5-js -S
        // let canshu='format=json&appid=16604&city_name='+city_name+'&sign=加密字符串'
        let rules=md5('appid16604city_name'+city_name+'formatjson835fb8dddf532a84bb0cafd678c254e8')
        let canshu='format=json&appid=16604&city_name='+city_name+'&sign='+rules
        return axios.get(base.baseurl+base.city+'?'+canshu);
    },
    getSwiperBunner(){
        return axios.get(base.swiperBunner)
    },
    getCeshi(){
        return axios.get(base.getCeshi)
    }
}



export default api