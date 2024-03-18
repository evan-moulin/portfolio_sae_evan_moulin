import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import portfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'
import SmlView from '../views/SmlView.vue'
import indexView from '../views/indexView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',               name: 'home',          component: indexView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/portfolio', name: 'portfolio', component: portfolioView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/sml', name: 'sml', component: SmlView },
    
    
  ]
})

export default router
