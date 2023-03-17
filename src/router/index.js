import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '../components/HomePage.vue'
import InformationHistoryList from '../components/InformationHistoryList.vue'
import ProfileCard from '../components/ProfileCard.vue'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/infomationhistory/',
    name: 'InformationHistoryList',
    component: InformationHistoryList,
    props: route => ({
      books: route.params.books
    }),
  },
  {
    path: '/profile',
    name: 'ProfileCard',
    component: ProfileCard,
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
