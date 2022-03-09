import Vue from 'vue'
import VueRouter from 'vue-router'

import introduce from '@/view/Introduce'
import Resume from '@/view/Resume'
import Demo from '@/view/Demo'
import Study from '@/view/Study'
import Blog from '@/view/Blog'
import Contact from '@/view/Contact'

import Starrysky from '@/view/other/Starrysky'
import Sidenav from '@/view/other/Sidenav'

import Home from '@/components/Home'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/sidenav', },

  { path: '/Starrysky', component: Starrysky },
  {
    path: '/sidenav', component: Sidenav, children: [
      { path: '/introduce', component: introduce },
      { path: '/resume', component: Resume },
      { path: '/demo', component: Demo },
      { path: '/study', component: Study },
      { path: '/blog', component: Blog },
      { path: '/contact', component: Contact },
    ],
  },
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
