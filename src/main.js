import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-ui组件库
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// import '@/view/other/fonts/font.css'
// 导入全局样式表
import './assets/css/global.css'
// 导入笔记样式
import '@/assets/css/markdown.css'





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
