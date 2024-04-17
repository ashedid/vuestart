import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/home',
        name: 'Home',
        // 异步加载，打包时代码分割，性能优化
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
]

const router = createRouter({
    history: createWebHistory(), // 路由模式：history模式
    routes: routes
})

export default router;

