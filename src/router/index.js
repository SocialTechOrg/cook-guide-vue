import { createRouter, createWebHistory } from 'vue-router';
import ChefHomeComponent from '@/chefs/pages/chef-home.component.vue';
import ProfileComponent from "@/shared/pages/profile.component.vue";
import CustomerComponent from "@/shared/pages/customer-home.component.vue";
import ViewRecipeDetailComponent from "@/shared/pages/view-recipe-detail.component.vue";
import Register from "@/authentication/pages/register.component.vue";
import Login from "@/authentication/pages/login.component.vue";

const router= createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/chef-home' },
        { path: '/register', component: Register},
        { path: '/login', component: Login},
        { path: '/myrecipes-chef', component: ChefHomeComponent },
        { path: '/profile', component: ProfileComponent },
        { path: '/home', component: CustomerComponent},
        { path: '/view-recipe/:id', component: ViewRecipeDetailComponent},
        { path: '/:notFound(.*)', redirect: '/home'}
    ]}
);

export default router;

