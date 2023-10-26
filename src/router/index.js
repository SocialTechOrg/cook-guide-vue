import { createRouter, createWebHistory } from 'vue-router';
import ChefHomeComponent from '@/chefs/pages/chef-home.component.vue';
import ProfileComponent from "@/shared/pages/profile.component.vue";
import CustomerComponent from "@/shared/pages/customer-home.component.vue";

const router= createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/chef-home' },
      { path: '/myrecipes-chef', component: ChefHomeComponent },
      { path: '/profile', component: ProfileComponent },
      { path: '/home', component: CustomerComponent},
      { path: '/:notFound(.*)', redirect: '/home'}
    ]}
  );

export default router;

