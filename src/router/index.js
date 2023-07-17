import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
// import { useCookies } from 'vue3-cookies';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      component: () => import('../layouts/HomeView.vue'),
      children: [
        {
          path: '/science',
          name: 'science',
          component: () => import('../views/ScienceDirection.vue')
        },
        {
          path: '/employees',
          name: 'employees',
          component: () => import('../views/EmployeesView.vue')
        }
      ]
    }
  ]
})

 


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if(!token && to.name == 'cart') {
    next({name: 'home'})
  } else {
    if(token) {
      next()
    }
  }
  next()
})

export default router
