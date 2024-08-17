import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/login/modules/LoginPage.vue')
        },
        {
          path: '/sign',
          name: 'sign',
          component: () => import('@/views/login/modules/SignPage.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: '/login'
    },

    {
      path: '/layout',
      component: () => import('@/views/layout/index.vue'),
      redirect: '/layout/classify',
      children: [
        {
          path: '/layout/classify',
          name: 'classify',
          component: () => import('@/views/layout/content/ContentClassify.vue')
        },
        {
          path: '/layout/manager',
          name: 'manager',
          component: () => import('@/views/layout/content/ContentManager.vue')
        }
      ]
    }
  ]
})

export default router
