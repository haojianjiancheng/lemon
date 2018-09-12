// import App from './app'
import './assets/style.css'
// import './assets/style.less'

import Vue from 'vue'
import App from './App'

new Vue({
    el:'.app',
    components:{
        App
    },
    template:'<App />'
})