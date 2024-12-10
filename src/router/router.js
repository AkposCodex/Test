import { createMemoryHistory, createRouter } from 'vue-router'


import AboutView from '../components/AboutPage.vue'
import HomeView from '../components/LandingPage.vue'

const routes = [
  { path: '/about', component: AboutView },
  { path: '/', component: HomeView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router