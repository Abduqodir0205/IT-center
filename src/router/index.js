import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
// import { useCookies } from 'vue3-cookies';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  console.log(token);
  console.log(to, 'to');
  console.log(from, 'from');
  if(!token && to.name !== 'login') {
    next({name: 'login'})
  } else {
    if(token) {
      next()
    }
  }
  next()
})

export default router
