<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const windowSize = ref(window.innerWidth);
onMounted(() => {
  window.addEventListener("resize", () => {
    windowSize.value = window.innerWidth;
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    windowSize.value = window.innerWidth;
  });
});

const perItem = computed(() => {
  if (windowSize.value <= 500) {
    return 1;
  } else if (windowSize.value > 500 && windowSize.value <= 900) {
    return 3;
  } else if (windowSize.value > 900 && windowSize.value <= 1400) {
    return 4;
  } else {
    return 5;
  }
});

const brandImages = [
  "arcTeryx.png",
  "armour.png",
  "ogio.jpg",
  "american-apparel.png",
  // "sonos.png",
  // "stormtech.png",
  // "bose.jpg",
  // "swell.png",
  "titleist.png",
  "adidas.jpg",
  "columbia.png",
  // "callaway.jpg",
  // "carhartt.png",
  // "coleman.jpg",
  // "columbia-sportsware.png",
  // "helly-hansen.png",
  // "lacoste.png",
  // "nike.png",
  // "ray-ban.png",
  // "roots.png",
  "spyder.png",
  "the-north-face.png",
  "under-armour.png",
  "yeti.png",
  "boneco.jpg",
];
const imageSrc = (value) => {
  return new URL(`/src/assets/images/brands/${value}`, import.meta.url);
};
</script>

<template>
  <section class="brand-section px-2.5 pt-12 pb-24 bg-[#6C6C6C]">
    <h4
      class="text-center text-white text-[21px] font-lato tracking-[5px] font-bold"
    >
      BRAND NAME ACCESS
    </h4>
    <div class="brand-slider my-14">
      <Carousel :autoplay="5000" :itemsToShow="perItem" :transition="600">
        <Slide v-for="slide in brandImages" :key="slide">
          <div class="flex">
            <div
              class="w-full px-7 py-5 flex items-center justify-center h-[200px]"
            >
              <img :src="imageSrc(slide)" class="w-[130px] h-auto" />
            </div>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style lang="scss">
.brand-section {
  .carousel__pagination {
    position: absolute;
    left: 47.5%;
    bottom: -80px;
    @media screen and (max-width: 499px) and (min-width: 100px) {
      left: 14%;
    }

    @media screen and (max-width: 699px) and (min-width: 500px) {
      left: 36%;
    }

    @media screen and (max-width: 999px) and (min-width: 700px) {
      left: 42%;
    }

    @media screen and (max-width: 1499px) and (min-width: 1000px) {
      left: 44%;
    }
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
