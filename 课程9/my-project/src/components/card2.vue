<template>
    <div class="card2">
        <div class="title">
            <slot name="title"></slot>
            <div class="extra">
                <slot name="extra"></slot>
            </div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            bordered:Boolean,
            disHover:Boolean,
            shadow:Boolean,
            padding:Number
        }
    }
</script>

<style>
    .card2{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        border: 1px solid rgb(197, 196, 196);
    }
    .card2:hover{
        box-shadow: 0 0 8px gray;
    }
    .title{
       margin: 14px 16px;
       border-bottom: 1px solid rgb(197, 196, 196);
    }
    .extra{
        position: absolute;
        top: 0;
        right: 16px;
    }
    .content{
        width: 94%;
        height: auto;
        padding: .5% 3%;
    }
</style>