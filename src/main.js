import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import v3b5 from 'vue3-bootstrap5';
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'

createApp(App).use(router).use(VueHighlightJS).mount('#app')
// createApp(App).use(router).use(v3b5).use(VueHighlightJS).mount('#app')
