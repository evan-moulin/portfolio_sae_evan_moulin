import { createRouter, createWebHistory } from 'vue-router'
import SmlView from '../views/SmlView.vue'
import indexView from '../views/indexView.vue'
import BenevolactionView from '@/views/BenevolactionView.vue'
import CinephoriaView from '@/views/CinephoriaView.vue'
import CanopeeView from '@/views/CanopeeView.vue'
import EdenioView from '@/views/EdenioView.vue'
import pinotView from '@/views/pinotView.vue'
import HandballView from '@/views/HandballView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',               name: 'home',          component: indexView },
    { path: '/sml', name: 'sml', component: SmlView },
    { path: '/benevolaction', name: 'benevolaction', component: BenevolactionView },
    { path: '/cinephoria', name: 'cinephoria', component: CinephoriaView },
    { path: '/canopee', name: 'canopee', component: CanopeeView },
    { path: '/edenio', name: 'edenio', component: EdenioView },
    { path: '/pinot', name: 'pinot', component: pinotView },
    { path: '/handball', name: 'handball', component: HandballView },
  ]
})

export default router
