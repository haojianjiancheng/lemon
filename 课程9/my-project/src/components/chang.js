export const chang={
    data(){
        return{
            isShowing:false
        }
    },
    methods:{
        toggleShow(){
            this.isShowing=!this.isShowing
        }
    }
}