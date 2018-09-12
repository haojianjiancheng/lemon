<template>
    <div>
        <div class="tabs" v-for="(iteam,index) in tabs" :key="index" @click="num=index">{{ iteam.id }}</div>
        <div class="tabscon" v-for="(iteam,index) in tabs" :key="iteam.id+'1'"  v-if="index===num">{{ iteam.title }}</div>
    </div>
</template>

<script>
    export default {
        props:{
            tabs:Array
        },
        data(){
            return{
                num:1
            }
        }
    }
</script>

<style scoped>
    .tabs{
        width: 100px;
        height: 30px;
        display: inline-block;
        background: orange;
        cursor: pointer;
        border: 1px solid white;
        text-align: center;
        line-height: 30px;
    }
    .tabs:hover{
        background: rgb(241, 179, 62);
    }
    .tabscon{
        width: 304px;
        height: 200px;
        background: rgb(243, 212, 155);
        border: 1px solid white;
    }
</style>