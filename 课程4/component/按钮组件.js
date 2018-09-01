Vue.component('Button',{
    props:{
        color:{
            type:String,
            default:'danger',
            validator(value){
                if(!(value==='primary'||value==='success'||value==='info'||value==='warning'||value==='danger')){
                    console.error("没有这个颜色")
                    return false
                }
                return true
            }
        },
        size:{
            type:String,
            default:'lg',
            validator(value){
                if(!(value==='lg'||value==='xs'||value==='sm')) {
                    console.error('没有这个大小，大小必须是"lg"||"sm"||"xs"')
                    return false
                }
                return true
            }
        }
    },
    template:
    `
    <button class="btn" :class="['btn-group-'+size,'btn-'+color]">
        <slot></slot>
    </button>
    `
})