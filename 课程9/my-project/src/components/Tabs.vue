<template>
    <div>
        <h3>全局mixins混入</h3>
        <button @click="toggleShow">
            <span v-if="isShowing">按钮显示1</span>
            <span v-else>按钮显示2</span>
        </button>
    </div>
</template>

<script>
    import { chang } from './chang'
    export default {
        mixins:[chang]
    }
</script>

<style>

</style>