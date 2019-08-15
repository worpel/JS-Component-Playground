<template>
  <a href="href" @click.prevent="scroll">
    <slot></slot>
  </a>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill';

export default {
    props: ['href'],

    methods: {
        scroll() {
            document.querySelector(this.href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    },

    // Adds support for older browsers
    mounted() {
        smoothscroll.polyfill();
        console.log('test');
    }
};
</script>

<style>
</style>