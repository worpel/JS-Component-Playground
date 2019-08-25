require('./bootstrap');

window.Vue = require('vue');

Vue.component('scroll-link', require('./components/ScrollLink.vue').default);
Vue.component('v-dropdown', require('./components/Dropdown.vue').default);

new Vue({
    el: '#app'
});
