import { createApp } from 'vue'
import router from './router/router.js'
import Toast from "vue-toastification";
import CoreuiVue from '@coreui/vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import "vue-toastification/dist/index.css";
import './style.css'
import App from './App.vue'

const options = {
    // You can set your default options here
};

createApp(App)
    .use(router)
    .use(Toast, options)
    .use(CoreuiVue)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .component('Accordion', Accordion)
    .component('AccordionPanel', AccordionPanel)
    .component('AccordionHeader', AccordionHeader)
    .component('AccordionContent', AccordionContent)
    .mount('#app')
