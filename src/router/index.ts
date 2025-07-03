import { createRouter, createWebHistory } from 'vue-router';
import MyProjects from '../modules/project/views/MyProjects.vue'; 
import authRoutes from '@/modules/auth/routes';
import projectRoutes from '@/modules/project/routes';
import { useAuthStore } from '@/modules/auth/store';


const routes = [
  ...authRoutes,
  ...projectRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

router.beforeEach((to, _, next) => {
  const auth = useAuthStore();
  if(to.meta.requiresAuth && !auth.token){
    return next('/auth/login');
  }
  next();
});

export default router;