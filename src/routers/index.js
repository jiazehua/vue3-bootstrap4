import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../site/index.vue')
    },
    {
        path: '/alert',
        name: 'alert',
        component: () => import('../site/alert.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;