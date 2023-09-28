import { createRouter, createWebHistory } from 'vue-router';
import ChefHomeComponent from '@/chefs/pages/chef-home.component.vue';

const router= createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/chefs' },
      { path: '/chefs', component: ChefHomeComponent },

    ]
  });

export default router;
