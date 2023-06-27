import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import LoginView from '../components/sitebar.vue'
=======
import HomeView from '../views/HomeView.vue'
>>>>>>> 16349952d6a4ffca8bb91fd8b981f95d8c0074f0

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
