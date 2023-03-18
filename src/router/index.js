import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '../components/HomePage.vue'
import ProfileCard from '../components/ProfileCard.vue'
import HomeView from '../views/HomeView.vue'
import Hobby from '../components/HobbyAnime.vue';
import Project from '../components/PersonalProject.vue';
import HomePage from '../components/HomePage.vue';
import Information from '../components/InformationHistoryList.vue';
import Contact from "../components/ContactForm.vue"



const routes = [
  {
    path: '/',
    component: HomeView,
    redirect: "/home",
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomePage
      },
      {
        path: 'information',
        name: 'information',
        component: Information
      },
      {
        path: 'profile',
        name: 'profile',
        component: ProfileCard
      },
      {
        path: "hobby",
        name: "hobby",
        component: Hobby
      },
      {
        path: "project",
        name: "project",
        component: Project
      },
      {
        path: "contact",
        name: "contact",
        component: Contact
      },
    ]
  },
  

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
