import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
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
      path: '/father',
      name: 'father',
      component: () => import('./components/demo1/father.vue')
    },
    {
      path: '/father3',
      name: 'father3',
      component: () => import('./components/demo3/father3.vue')
    },
    {
      path: '/father2',
      name: 'father2',
      component: () => import('./components/demo2/father2.vue')
    }
  ]
})
