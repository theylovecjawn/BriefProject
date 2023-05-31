import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import ContactPage from './views/ContactPage.vue'
import AboutUs from './views/AboutUs.vue'
import SearchedPage from './views/SearchedPage.vue'

const routes = [
   {
      path: '/',
      component: HomePage
   },
   {
      path: '/contact',
      component: ContactPage
   },
   {
      path: '/aboutus',
      component: AboutUs
   },
   {
      path: '/searched',
      component: SearchedPage
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router