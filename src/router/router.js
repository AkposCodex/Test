import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../components/LandingPage.vue'
import AboutPage from '../components/AboutView.vue'
import AgentRegistrationView from '../components/AgentRegistrationView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutPage },
  { path: '/registration', component: AgentRegistrationView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router