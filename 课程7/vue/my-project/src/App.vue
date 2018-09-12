<template>
  <div id="app">
    <Table batype="border" color="orange" :colums="columns1" :data="data1"></Table>
    <Button name="success" size="long">按钮</Button>
    <Button name="error" size="long">按钮</Button>
    <Button size="300">按钮</Button>
    <Tabs :tabs="tabs1"/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld'
import Tabs from "./components/tabs"
import Button from "./components/button"
import Table from "./components/tables"

import { text1 } from './components/3'
import { text2 as text3 } from './components/3'
//import * as text from './components/3'
import fn1,{ text6 ,fn3,fn4} from './components/3'


console.log(text1)
text1()
console.log(text3)
text3()
//console.log(text)
fn1.fn1()
text6()
fn3()

export default {
  name: 'App',
  components: {
    Button,
    Table,
    Tabs
  },
  data () {
      return {
          columns1: [
              {
                  title: '姓名',
                  key: 'name'
              },
              {
                  title: '年龄',
                  key: 'age'
              },
              {
                  title: '地址',
                  key: 'address'
              }
          ],
          data1: [
              {
                  name: '王小明',
                  age: 18,
                  address: '北京市朝阳区芍药居'
              },
              {
                  name: '张小刚',
                  age: 25,
                  address: '北京市海淀区西二旗'
              },
              {
                  name: '李小红',
                  age: 30,
                  address: '上海市浦东新区世纪大道'
              },
              {
                  name: '周小伟',
                  age: 26,
                  address: '深圳市南山区深南大道'
              }
          ],
          tabs1:[
            {
              id:"导航栏1",
              title:"导航栏1的内容"
            },
            {
              id:"导航栏2",
              title:"导航栏2的内容"
            },
            {
              id:"导航栏3",
              title:"导航栏3的内容"
            },
          ]
      }
  }
}
</script>

<style>

</style>
