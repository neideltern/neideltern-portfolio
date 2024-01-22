import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../views/ContactView.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const app = 'Neideltern'
    document.title = `${app} · ${to.name}`
    next()
})

export default router
