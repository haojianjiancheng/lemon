<template>  
  <div>
    <Card>
       <h1>首页</h1>
    </Card>
    <Card2>
       <p slot="title">没有死亡的挽歌</p>
       <p slot="extra">阿多尼斯</p>
       <div>
         <p>我在被囚的祖国身后奔跑</p>
         <p>在婚宴的丛林里，在摇铃的童年里</p>
         <p>我召集了睫毛和臆想</p>
         <p>在青草和收成的床边</p>
         <p>我夹紧了马鞍</p>
         <p>向着你——我的祖国疾驰</p>
         <p>啊，眼帘之上的冰雪之国</p>
       </div>
    </Card2>
    <Card>
      <imgButton :imgpath="img[0]" :apath="a">
        <h3 slot="h3">疲惫爬上了肩膀</h3>
        <p slot="p">{{message}}</p>
      </imgButton>

      <imgButton2 :imgpath="img[1]" :apath="a">
        <h3 slot="h3">快乐降临于我</h3>
        <p slot="p">而且成群结队</p>
      </imgButton2>
    </Card>
    <p>{{message}}</p>
    <input type="text" v-model="message">
    <input type="text" v-inputa="message"><br>
    <button v-ff:click="clicks">自定义点击事件</button>
    <div v-if="show">
      <Card>
        <p>自定义点击事件</p>
      </Card>
    </div>
    <tabs></tabs>
    <tabs2></tabs2>
  </div>
</template>

<script>
import Card from './components/card'
import Card2 from './components/card2'
import imgButton from './components/imgMangin'
import imgButton2 from './components/imgMangin2'
import tabs from './components/tabs'
import tabs2 from './components/tabs2'

export default {
  name: 'App',
  components: {
    Card,
    Card2,
    imgButton,
    imgButton2,
    tabs,
    tabs2
  },
  data(){
    return{
      img:[require("./assets/imgas/1.jpg"),require("./assets/imgas/2.jpg")],
      a:"#",
      message:'全局自定义组件模拟双向绑定',
      show:false
    }
  },
  directives:{
    ff:{
      bind(el,binding){
        el.addEventListener(binding.arg,binding.value)
      }
    }
  },
  methods:{
    clicks(){
      console.log("自定义点击事件")
      this.show=!this.show
    }
  }
}
</script>

<style>
  .card{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
</style>
