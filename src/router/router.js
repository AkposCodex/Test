import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../components/LandingPage.vue'
import AboutPage from '../components/AboutView.vue'
import AgentRegistrationView from '../components/AgentRegistrationView.vue'

const routes = [
  { path: '/', component: HomeView, name: 'home', },
  { path: '/about', component: AboutPage, name: 'about', meta: { title: 'Xpenspay | About Us' } },
  { path: '/registration', component: AgentRegistrationView, name: 'registration', meta: { title: 'Xpenspay | Become An Agent' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const DEFAULT_TITLE = 'Xpenspay - Your New Way To Pay';
router.afterEach((to, from) => {
  // Use the title from the route's meta, or fall back to a default
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router