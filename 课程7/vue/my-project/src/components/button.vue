<template>
   <button type="button" :class="name" :style="{width:isize}" @click="vm">
       <slot></slot>
    </button>
</template>

<script>
    export default {
        props:{
            name:{
                type:String,
                validator(value){
                if(!(value==='success'||value==='error')){
                        console.error("没有这个颜色")
                        return false
                    }
                    return true
                }
            },
            size:{
                type:[String,Number],
                default:"long"
            }
        },
        computed:{
            isize(){
                if(this.size==="long"){
                    return '100%'
                }
                return this.size+"px"
            }
        },
        methods:{
           vm(){
                console.log(this)
           }
        }
}
</script>

<style scoped>
    button{
        border:none;
        padding: 3px 4px;
        width: 100%;
        border-radius: 4px;
        display: inline-block;
        margin-top: 4px;
    }
   .success{
       color: aliceblue;
       background: #33d685;
   }
   .success:hover{
       color: aliceblue;
       background: #43df91;
   }
    .error{
       color: aliceblue;
       background: #ff5c33;
   }
   .error:hover{
       color: aliceblue;
       background: #fa7553;
   }
</style>