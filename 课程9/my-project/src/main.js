// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.directive('inputa', {
  // 当被绑定的元素插入到 DOM 中时……
  bind(el,binding,vnode){
    el.value=binding.value
    // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    el.addEventListener('input',function(){
      vnode.context[binding.expression]=el.value
    })
  },
  inserted(el,binding) {
    //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  },
  update(el,binding){
    //vnode 更新，运行这个钩子
    el.value=binding.value
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
