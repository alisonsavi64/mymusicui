const timelineRoutes = [
    {path: '/timeline/:id', component: import('@/modules/timeline/views/Timeline.vue'), meta: {requiresAuth: true}}
]

export default timelineRoutes;