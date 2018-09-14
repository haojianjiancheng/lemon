<template>
    <div class="box">
        <img :src="imgpath" alt="">
        <div class="lv">
            <h3><slot name="h3"></slot></h3>
            <p><slot name="p"></slot></p>
            <a :href="apath"></a>
        </div>
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
        .box{
        background:#fe7253;
        width: 360px;
        height: 240px;
        position: relative;
        transition:all .4s ease-in-out;
        overflow: hidden;
    }
    .box img{
        width: 100%;
        height: 100%;
        display: block;
        transition:all .4s ease-in-out;
        opacity:1;
    }
    .box:hover img{
        position:absolute;
        transform:scale(1.1);
        opacity:.6;
    }
    .lv{
        
        overflow: hidden;
        color:#fff;
    }
    .lv::before,.lv::after{
        position: absolute;
        content: ' ';
        opacity: 0;
        transition:opacity 0.4s,transform .4s;
    }
    .lv::before{
        top:8%;
        right:10%;
        bottom:8%;
        left:10%;
        border-top:1px solid #fff;
        border-bottom:1px solid #fff;
        transform:scale(0,1);
        transform-origin:0 0;
    }
    .lv::after{
        top:8%;
        right:10%;
        bottom:8%;
        left:10%;
        border-right:1px solid #fff;
        border-left:1px solid #fff;
        transform:scale(1,0);
        transform-origin: 0 0;
    }
    .box:hover .lv::before,.box:hover .lv::after{
        opacity: 1;
        transform: scale(1);
    }
    .box>.lv>h3{
        position: absolute;
        top: 20%;
        left: 10%;
        width: 80%;
        text-align: center;
    }
    .box>.lv>p{
        position: absolute;
        top: 60%;
        left: 10%;
        width: 80%;
        text-align: center;
        opacity: 0;
        transition: all .4s;
    }
    .box:hover p{
        opacity: 1;
        top: 45%;
    }
    a{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
    }
</style>