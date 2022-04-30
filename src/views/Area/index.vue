<template>
    <div>
        <h2>风险地区</h2>
        <div class="content">
            <div class="title" v-if="high.length>0">高风险区{{high.length}}个</div>
            <p v-for="item in high" :key="item">{{item}}</p>
            <div class="title" v-if="mid.length>0">中风险区{{mid.length}}个</div>
            <p v-for="item in mid" :key="item">{{item}}</p>
        </div>
    </div>
</template>

<script>
import api from '../../api/index'
    export default {
        name:'Area',
        data() {
            return {
                list:[],
                high:[],
                mid:[]
            }
        },
        created() {
            api.getCovInfo().then(res=>{
               let riskarea= res.data.newslist[0].riskarea
                this.high=riskarea.high
                this.mid=riskarea.mid
            })
        },

    }
</script>

<style lang="less" scoped>

</style>