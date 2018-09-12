Vue.component('Icon',{
    props:{
        name:{
            type:String,
            default:"ok"
        },
        color:{
            type:String
        },
        size:{
            type:Number,
            default:20
        }
    },
    data(){
       
    },
    template:
    `
    <span class="glyphicon" 
    :class="iconname" 
    :style="{color:color,fontSize:size+'px'}" 
    aria-hidden="true">
    </span>
    `,
    computed:{
        iconname(){
            if(this.name){
               return "glyphicon-"+this.name
            }
        }
    },
    methods:{
       
    }
})
