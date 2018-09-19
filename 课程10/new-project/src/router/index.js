import Vue from "vue"
import VueRouter from "vue-router"

import Home from "@/views/Home"
import News from "@/views/News"
import new1 from "@/views/new1"
import new2 from "@/views/new2"
import Notfind from "@/views/Notfind"


Vue.use(VueRouter)

export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:'/news',
            component:News,
            alias:'/newslist',
            children:[
                {
                    path:':data',
                    component:new1,
                    children:[
                        {
                            path:':id',
                            component:new2
                        }
                    ]
                }
            ]
        },
        {
            path:'/notfind',
            component:Notfind
        },
        {
            path:'*',
            redirect:"/notfind"
        }
    ]
})