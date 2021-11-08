
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index/home.vue')
  },
  {
    path: '/playground',
    name: 'Playground',
    component: () => import('@/views/playground/playground.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'is-active'
})

export default router