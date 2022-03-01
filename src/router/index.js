import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import introduce from '../components/1.introduce/Introduce.vue'
import Resume from '../components/2.resume/Resume.vue'
import Demo from '../components/3.demo/Demo.vue'
import Study from '../components/4.study/Study.vue'
import Blog from '../components/5.blog/Blog.vue'
import Contact from '../components/6.contact/Contact.vue'
import Login from '../components//login/Login.vue'
import Time from '../components/other/Time.vue'
import Btn from '../components/other/Btn.vue'

Vue.use(VueRouter)

const routes = [
  // { path: '/', redirect: '/button', },
  { path: '/main', component: Main, },
  { path: '/introduce', component: introduce },
  { path: '/resume', component: Resume },
  { path: '/demo', component: Demo },
  { path: '/study', component: Study },
  { path: '/blog', component: Blog },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/time', component: Time },
  { path: '/button', component: Btn },

]

const router = new VueRouter({
  routes
})

export default router
