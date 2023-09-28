import { createApp } from 'vue'
import App from './App.vue'

// Prime Vue
import PrimeVue from "primevue/config";
import 'primevue/resources/primevue.min.css';

// Router
import router from "./router/index.js";

//Add Components
import 'primeicons/primeicons.css';
import Button from 'primevue/button';



const app = createApp(App)

createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .component('pv-button', Button)
    .use(router).mount('#app')

