import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/home',
        name: 'Home',
        // 异步加载，打包时代码分割，性能优化
        component: () => import('@/components/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/components/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(), // 路由模式：history模式
    routes: routes
})

export default router;

