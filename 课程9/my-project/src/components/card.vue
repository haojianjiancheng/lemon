<template>
    <div>
        <div class="card">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .card{
        width:100%;
        height: 100%;
    }
    .card:hover{
        box-shadow: 0 0 8px rgb(105, 105, 105);
    }
</style>