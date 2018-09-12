Vue.component("slideButton",{
    props:{
        value:Boolean
    },
    template:
        `
        <div class="button-bg" :class="{'button-bg-change':value}" @click="value=!value">
            <div class="button-btn">
            </div>
        </div>
        `
    ,
    data(){
        return{
            value:this.mValue
        }
    }
})