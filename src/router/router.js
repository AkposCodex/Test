import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '../components/LandingPage.vue'
import AboutPage from '../components/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router