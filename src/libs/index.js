import IAlert from './alert/index.vue'
function install(Vue) {
    Vue.component('IAlert', IAlert);
}

var plugin = {
    install
};

export { default as IAlert } from './alert/index.vue'

export { install };
export default plugin;
