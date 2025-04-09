import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from "./publicRoutes"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    ...publicRoutes,
    /*...adminRoutes,
    ...clientRoutes*/
    ],
    linkActiveClass: 'active',
    scrollBehavior: function (to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        } else {
            setTimeout(() => {
                window.scrollTo(0, 0)
            }, 0)
        }
    }
})
/*
router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user')); // Suponiendo que guardaste el usuario logueado aquí
    const requiresAuth = to.meta.requireAuth;
    const allowedRoles = to.meta.roles;

    if (requiresAuth && !user) {
        return next({ name: 'public-login' });
    }
    if (requiresAuth && allowedRoles && !allowedRoles.includes(user.current_role)) {
        return next({ name: 'public-login' });
    }
    next();
});
*/
export default router
