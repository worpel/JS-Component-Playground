<template>
  <div class="dropdown relative">
    <div
      class="dropdown-trigger"
      @click.prevent="isOpen = !isOpen"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <slot name="trigger"></slot>
    </div>

    <transition name="pop-out-quick">
      <ul
        v-show="isOpen"
        class="dropdown-menu z-10 absolute mt-2 bg-black text-white rounded"
        :class="classes"
      >
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
    props: ['classes'],

    data() {
        return {
            isOpen: false
        };
    },

    watch: {
        isOpen(isOpen) {
            if (isOpen) {
                document.addEventListener('click', this.closeIfClickedOutside);
            }
        }
    },

    methods: {
        closeIfClickedOutside(e) {
            if (!e.target.closest('.dropdown')) {
                this.isOpen = false;
            }
        }
    }
};
</script>

<style>
.pop-out-quick-enter-active,
.pop-out-quick-leave-active {
    transition: all 0.4s;
}

.pop-out-quick-enter,
.pop-out-quick-leave-active {
    opacity: 0;
    transform: translateY(-7px);
}
</style>