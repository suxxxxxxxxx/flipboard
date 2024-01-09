import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../views/contents/HomePage.vue')
  },
  {
    path: '/laibian',
    name: 'laibian',
    component: () => import('../views/contents/LaiBian.vue')
  },
  {
    path: '/shuhua',
    name: 'shuhua',
    component: () => import('../views/contents/ShuHua.vue')
  },
  {
    path: '/loginview',
    name: 'loginview',
    component: () => import('../views/contents/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
