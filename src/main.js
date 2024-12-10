import { createApp } from 'vue'
import router from './router/router.js'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './style.css'
import App from './App.vue'

const options = {
    // You can set your default options here
};

createApp(App)
.use(router).use(Toast, options)
.mount('#app')
