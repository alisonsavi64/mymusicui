import { createRouter, createWebHistory } from 'vue-router';
import MyProjects from '../modules/project/views/MyProjects.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/projects',
      name: 'MyProjects',
      component: MyProjects, 
    },
  ],
});

export default router;