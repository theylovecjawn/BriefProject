import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import ContactPage from './views/ContactPage.vue'

const routes = [
   {
      path: '/',
      component: HomePage
   },
   {
      path: '/contact',
      component: ContactPage
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router