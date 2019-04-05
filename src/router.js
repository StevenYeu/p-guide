import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { persona5 } from './constants/Data'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/p5/guide',
      name: 'P5 Guide',
      component: () => import('./views/Guide.vue'),
      props: { characters: persona5.confidants, title: 'Persona 5', subtitle: 'Confidant Guide' }
    }
  ]
})
