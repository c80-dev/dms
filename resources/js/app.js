require('./bootstrap');

 window.Vue = require('vue').default;

 import router from './router';
 import store from './store';
 import  './axios';
 import VueLaravelPagination from "vue-cli-laravel-pagination";

 Vue.mixin(require('./asset'));
 Vue.component('app', require('./App.vue').default);
 Vue.use(VueLaravelPagination);

 const app = new Vue({
    router,
    store,
    el: '#app',
 });

