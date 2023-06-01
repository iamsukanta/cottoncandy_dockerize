<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrY = ref(0);

function onScroll() {
  scrY.value = window.scrollY;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
<template>
  <transition
    enter-active-class="ease-out duration-300"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="ease-out duration-300"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <button
      class="fixed bottom-32 right-6 bg-debian-red opacity-80 px-2.5 py-4 text-white border-2 border-white w-11 h-11 flex items-center hover:border-debian-red transition-all ease-in-out duration-300"
      v-show="scrY > 300"
      @click="scrollToTop()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        class="text-[18px] font-bold w-5 h-5 leading-[27px]"
        fill="currentColor"
      >
        <path
          d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
        />
      </svg>
    </button>
  </transition>
</template>
