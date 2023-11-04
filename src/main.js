import { createApp } from 'vue'
import App from './App.vue'

// Router
import router from "./router/index.js";

import PrimeVue from "primevue/config";
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

//Add Components
import Button from 'primevue/button';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import InlineMessage from 'primevue/inlinemessage';
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import SidebarComponent from "primevue/sidebar";

import ToastService from "primevue/toastservice";


import { createPinia } from 'pinia'
const pinia = createPinia()
createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .use(pinia)
    .use(ToastService)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-dialog', Dialog)
    .component('pv-inline-message', InlineMessage)
    .component('pv-input-text', InputText)
    .component('pv-textarea', Textarea)
    .component('pv-sidebar', SidebarComponent)
    .mount('#app');
