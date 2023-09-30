import { createRouter, createWebHistory } from 'vue-router';
import ChefHomeComponent from '@/chefs/pages/chef-home.component.vue';
import ProfileComponent from "@/shared/pages/profile.component.vue";

const router= createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/chef-home' },
      { path: '/chef-home', component: ChefHomeComponent },
      { path: '/profile', component: ProfileComponent }
    ]}
  );

export default router;
