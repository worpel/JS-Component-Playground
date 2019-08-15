require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

new Vue({
    el: '#app',

    methods: {
        scrollTo(selector) {
            document.querySelector(selector).scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});
