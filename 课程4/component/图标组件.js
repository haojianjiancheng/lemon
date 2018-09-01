Vue.component('Icon',{
    props:{
        name:{
            type:String
        },
        color:{
            type:String
        },
        size:{
            type:Number
        }
    },
    template:`<span class="glyphicon" :class="'glyphicon-'+name" :style="{color:color,fontSize:size+'px'}" aria-hidden="true"></span>`
})
