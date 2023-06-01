<script setup>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const slideImages = ["slider1.jpg", "slider2.jpg"];
const imageSrc = (value) => {
  return new URL(`/src/assets/images/slider/${value}`, import.meta.url);
};
</script>

<template>
  <section class="banner-slider">
    <Carousel :autoplay="5000" :transition="600">
      <Slide v-for="slide in slideImages" :key="slide">
        <img :src="imageSrc(slide)" class="w-full" />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<style lang="scss">
.banner-slider {
  .carousel__pagination {
    position: absolute;
    left: 50%;
    bottom: 18px;
  }

  .carousel__pagination-item .carousel__pagination-button {
    border-radius: 60%;
    width: 8px;
    height: 8px;
    background-color: #dadada;
  }

  .carousel__pagination-item .carousel__pagination-button--active {
    background-color: #999999 !important;
  }
}
</style>
