<script setup>
import GuestLayout from "../layouts/GuestLayout.vue";
import OrderComponent from "../components/services/OrderComponent.vue";
import JumpContactComponent from "../components/services/JumpContactComponent.vue";
import EstoreComponent from "../components/services/EstoreComponent.vue";
import PpeComponent from "../components/services/PpeComponent.vue";
import SourcedProductComponent from "../components/services/SourcedProductComponent.vue";
import MarketingDesignComponent from "../components/services/MarketingDesignComponent.vue";
import InHouseServiceComponent from "../components/services/InHouseServiceComponent.vue";
import RewardRecognitionComponent from "../components/services/RewardRecognitionComponent.vue";
</script>
<template>
  <GuestLayout>
    <order-component></order-component>
    <jump-contact-component></jump-contact-component>
    <estore-component></estore-component>
    <ppe-component></ppe-component>
    <sourced-product-component></sourced-product-component>
    <marketing-design-component></marketing-design-component>
    <in-house-service-component></in-house-service-component>
    <reward-recognition-component></reward-recognition-component>
  </GuestLayout>
</template>
