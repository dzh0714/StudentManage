import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
// import AllGrades from "./views/AllGrades.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/allGrades',
      name: 'AllGrades',
      component: () => import('./views/AllGrades.vue')
    }, 
     {
      path: '/emphasis',
      name: 'Emphasis',
      component: () => import( './views/emphasis.vue')
    }
  ]
})
