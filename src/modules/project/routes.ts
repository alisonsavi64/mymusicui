const projectRoutes = [
    {
        path: '/', 
        component: () => import('@/modules/project/views/MyProjects.vue'),
        meta: {requiresAuth: true}
    }
]

export default projectRoutes;