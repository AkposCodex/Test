import { createMemoryHistory, createRouter } from 'vue-router'


import AboutView from '../components/AboutPage.vue'
import HomeView from '../components/LandingPage.vue'
import AboutPage from '../components/AboutView.vue'

const routes = [
  { path: '/about', component: AboutView },
  { path: '/', component: HomeView },
  { path: '/about2', component: AboutPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router