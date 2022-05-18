import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
const Home = () => import('@/components/Home')

// 侧边栏导航
const About = () => import('@/view/About')
const Introduce = () => import('@/view/Introduce')
const Resume = () => import('@/view/Resume')
const Demo = () => import('@/view/Demo')
const Study = () => import('@/view/Study')
const Comments = () => import('@/view/Comments')
const Contact = () => import('@/view/Contact')

// 笔记
const Notes = () => import('@/view/Notes')

// 练习demo


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/about', },
  {
    path: '/home', component: Home, children: [
      { path: '/', redirect: '/introduce' },
      { path: '/introduce', component: Introduce },
      { path: '/resume', component: Resume },
      { path: '/demo', component: Demo },
      { path: '/study', component: Study },
      { path: '/comments', component: Comments },
      { path: '/contact', component: Contact },
    ],

  },
  { path: '/about', component: About },
  { path: '/notes', component: Notes},
]

const router = new VueRouter({
  routes
})

export default router
