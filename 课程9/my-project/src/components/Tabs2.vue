<template>
    <div>
       <h2 @click="toggleShow">
           这是全局mixins
            <span v-if="isShowing">
                显示
            </span>
            <span v-else>
                隐藏
            </span>
       </h2>
       <Card>
           <h3 v-if="isShowing">这是一行文字</h3>
       </Card>
    </div>
</template>

<script>
    import Card from './card'
    import{ chang } from "./chang.js"
    export default {
       mixins:[chang],
       components:{
           Card
       }
    }
</script>

<style>

</style>