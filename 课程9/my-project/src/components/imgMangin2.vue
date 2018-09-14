<template>
    <div id="box-4">
        <img :src="imgpath" alt="" class="box-4-caption-img">
        <div class="box-4-caption">
            <h3 class="box-4-caption-h"><slot name="h3"></slot></h3>
            <p class="box-4-caption-p"><slot name="p"></slot></p>
        </div>
        <a :href="apath" class="box-4-caption-a"></a>
    </div>
</template>

<script>
    export default {
        props:{
            imgpath:String,
            apath:String
        }
    }
</script>

<style>
    #box-4{
        width: 360px;
        height: 240px;
        overflow: hidden;
        position: relative;
    }
    #box-4>.box-4-caption-img{
        width: 100%;
        height: 100%;
        position: absolute;
    }
    #box-4>.box-4-caption{
        width: 100%;
        height: 100%;
        position: absolute;
        top: -100%;
        background: #fe7253;
        transition: all .4s;
        color: #fff;
    }
    #box-4:hover .box-4-caption{
        top: 0;
        background:rgba(254,114,83,.8);
    }
    #box-4>.box-4-caption>.box-4-caption-h{
        width: 80%;
        position: absolute;
        top: 20%;
        left: 10%;
        text-align: center;
    }
    #box-4>.box-4-caption>.box-4-caption-p{
        width: 80%;
        position: absolute;
        top: -20%;
        left: 10%;
        text-align: center;
        transition: top .6s;
    }
    #box-4:hover .box-4-caption-p{
        top: 50%;
    }
    .box-4-caption-a{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
    }
</style>