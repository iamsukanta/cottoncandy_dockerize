<script setup>
import GuestLayout from "../layouts/GuestLayout.vue";
import StoryComponent from "../components/about/StoryComponent.vue";
import AboutComponent from "../components/about/AboutComponent.vue";
import StrengthsComponent from "../components/about/StrengthsComponent.vue";
import CoreValueComponent from "../components/about/CoreValueComponent.vue";
import CapabilitiesComponent from "../components/about/CapabilitiesComponent.vue";
</script>
<template>
  <GuestLayout>
    <story-component></story-component>
    <about-component></about-component>
    <strengths-component></strengths-component>
    <core-value-component></core-value-component>
    <capabilities-component></capabilities-component>
  </GuestLayout>
</template>
