import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentRegistration from '../components/StudentRegistration.vue'
import MatchingResults from '../views/MatchingResults.vue'
import ContractCreation from '../views/ContractCreation.vue'
import ContractGenerator from '../views/ContractGenerator.vue'
import Matched from '../views/Matched.vue'
import OlderPersonRegistration from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/student-registration',
      name: 'StudentRegistration',
      component: StudentRegistration
    },
    {
      path: '/matching-results',
      name: 'MatchingResults',
      component: MatchingResults
    },
    {
      path: '/contract-creation',
      name: 'ContractCreation',
      component: ContractCreation
    },
    {
      path: '/older-person-registration',
      name: 'OlderPersonRegistration',
      component: OlderPersonRegistration
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/contract-generator',
      name: 'ContractGenerator',
      component: ContractGenerator
    },
    {
      path: '/matched',
      name: 'Matched',
      component: Matched
    },
  ],
})

export default router
