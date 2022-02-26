import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main/Main.vue'
import Content from '../components/Content.vue'
import Introduce from '../components/introduce/Introduce.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    component: Main,
    chlidren: [
      { path: 'content', component: Content },
      { path: 'introduce', component: Introduce },
    ]
  },
  { path: 'introduce', component: Introduce },

]

const router = new VueRouter({
  routes
})

export default router
