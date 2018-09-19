<template>
    <div>
        <h2>2018新闻</h2>
        <ul>
            <li>
                <router-link to="/news/2018/222">2018年的新闻222</router-link>
            </li>
        </ul>
                     
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$route.params.id)
            console.log(this.$route.params.data)
        },
    }
</script>

<style>

</style>