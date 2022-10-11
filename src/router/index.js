import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsVue.vue')
  },
 
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginVue.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/RegVue.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsBVue.vue')
  },
  {
    path: '/news/:id',
    name: 'detail',
    component: () => import('../views/DetailVue.vue') 
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/AddVue.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/EditVue.vue')
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import('../views/ProfilVue.vue')
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: () => import('../views/AvatarVue.vue')
  },
  {
    path: '/image',
    name: 'image',
    component: () => import('../views/ImageVue.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminVue.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
