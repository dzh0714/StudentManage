import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import { setCookie, getCookie } from "@/utils/index";
// import AllGrades from "./views/AllGrades.vue"

Vue.use(Router)

let router=new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/allGrades',
      name: 'AllGrades',
      component: () => import('./views/AllGrades.vue'),
      meta: { requiresAuth: true }
    }, 
     {
      path: '/emphasis',
      name: 'Emphasis',
      component: () => import( './views/emphasis.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!getCookie()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})