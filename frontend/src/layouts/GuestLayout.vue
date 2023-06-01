<script setup>
import HeaderComponent from "../components/guest/HeaderComponent.vue";
import FooterComponent from "../components/guest/FooterComponent.vue";
import ContactComponent from "../components/guest/ContactComponent.vue";
import ScrollToTopComponent from "../components/guest/ScrollToTopComponent.vue";
</script>

<template>
  <div class="w-full">
    <HeaderComponent />
    <slot />
    <contact-component></contact-component>
    <FooterComponent />
    <scroll-to-top-component></scroll-to-top-component>
  </div>
</template>
