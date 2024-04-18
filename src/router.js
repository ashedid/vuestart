import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/home',
        name: 'Home',
        // async load, performance improves
        component: () => import('@/views/Home.vue')
    },
    {
        path: "/content",
        component: () => import("@/views/Content.vue")
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/user/:id/name/:name/age/:age',
        name: 'User',
        component: () => import('@/views/User.vue')
    },
    {
        path: "/userHistory/:id/name/:name?",
        name: "history",
        component: () => import("@/views/User.vue")
    },
    {
        path: "/vip",
        component: () => import("@/views/vip.vue"),
        children: [
            {
                path: '',
                component: () => import("@/views/Default.vue")
            },
            {
                path: 'order',
                component: () => import("@/views/Order.vue")
            },
            {
                path: 'info',
                component: () => import("@/views/Info.vue")
            }
        ]
    },
    {
        path: "/svip",
        // redirect: "/vip"
        redirect: { name: 'history', params: { id: '100', name: 'David' } }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;

