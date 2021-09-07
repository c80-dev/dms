require('./bootstrap');

 window.Vue = require('vue').default;

 import router from './router';
 import store from './store';
 import  './axios';

 Vue.mixin(require('./asset'));
 Vue.component('app', require('./App.vue').default)

 const app = new Vue({
    router,
    store,
    el: '#app',
 });

