<template>
    <table :style="{background:color}">
        <tr>
            <th :class="batype" v-for="iteam in colums" :key="iteam.key">{{iteam.title}}</th>
        </tr>
        <tr class="trContent" v-for="(iteam,index) in data" :key="index">
            <td :class="batype" v-for="(colNum,index) in iteam" :key="index">{{colNum}}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        props:{
            colums:{
                type:Array,
            },
            data:{
                type:Array,
            },
            batype:{
                type:String,
            },
            color:{
                type:String,
            }
        }
    }
</script>

<style scoped>
    table{
        border: 1px solid rgb(211, 203, 203);
        border-collapse: collapse;
        width: 100%;
        font-size: 14px;
    }
    th,td{
        border-bottom: 1px solid rgb(211, 203, 203);
        padding: 0;
        padding: 10px;
        text-align: left;
    }
    td{
        width: 33.3%;
    }
    .trContent:hover{
        background: rgb(240, 249, 255);
    }
    .border{
        border: 1px solid rgb(211, 203, 203);
    }
</style>