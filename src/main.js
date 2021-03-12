import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import "jquery";
import "bootstrap";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import v3b4 from 'vue3-bootstrap4';
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'

createApp(App).use(router).use(v3b4).use(VueHighlightJS).mount('#app')
