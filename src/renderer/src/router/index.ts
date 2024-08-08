import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@renderer/pages/layout/index.vue')
  },
  {
    path: '/login',
    component: () => import('@renderer/pages/login/index.vue'),
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
