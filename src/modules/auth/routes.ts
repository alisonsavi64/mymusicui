const authRoutes = [
    {
        path: "/auth/login",
        component: () => import('@/modules/auth/views/Login.vue')
    }
]

export default authRoutes;