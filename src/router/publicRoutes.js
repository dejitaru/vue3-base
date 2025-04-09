import BlankLayout from '@/layouts/BlankLayout.vue'
export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/public/Home.vue'),
        meta: {
            layout: BlankLayout
        }
    },
    {
        path: '/login',
        name: 'public-login',
        component: () => import('../views/public/Login.vue'),
        meta: {
            layout: BlankLayout
        }
    },
    {
        path: '/logout',
        name: 'logoutPage',
        component: () => import('../views/public/Logout.vue'),
        meta: {
            layout: BlankLayout
        }
    },
    {
        path: '/:catchAll(.*)*',
        name: 'pageNotFound',
        component: () => import('../views/public/PageNotFound.vue'),
        meta: {
            layout: BlankLayout
        }
    },
]