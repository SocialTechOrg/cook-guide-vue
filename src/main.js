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


const app = createApp(App)

createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .use(router).mount('#app')

