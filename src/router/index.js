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
const Blog = () => import('@/view/Blog')
const Contact = () => import('@/view/Contact')

// 笔记
const VueBasic = () => import('@/view/notes/VueBasic')
const GitBasic = () => import('@/view/notes/GitBasic')
const jQuery = () => import('@/view/notes/jQuery')
const Css = () => import('@/view/notes/Css')


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Home', },
  {
    path: '/home', component: Home, children: [
      { path: '/', redirect: '/about' },
      { path: '/about', component: About },
      { path: '/introduce', component: Introduce },
      { path: '/resume', component: Resume },
      { path: '/demo', component: Demo },
      {
        path: '/study', component: Study,
        children: [
          // { path: '/vuebasic', name: 'VueBasic', component: VueBasic },
        ]
      },
      { path: '/blog', component: Blog },
      { path: '/contact', component: Contact },
    ],

  },
  { path: '/vuebasic', component: VueBasic },
  { path: '/gitbasic', component: GitBasic },
  { path: '/jquery', component: jQuery },
  { path: '/css', component: Css },
  // {
  //   path: '/home', component: Home, children: [
  //     { path: '/introduce', component: introduce },
  //     { path: '/resume', component: Resume },
  //     { path: '/demo', component: Demo },
  //     { path: '/study', component: Study },
  //     { path: '/blog', component: Blog },
  //     { path: '/contact', component: Contact },
  //   ]
  // }
]

const router = new VueRouter({
  routes
})

export default router
