<script setup></script>

<template>
  <section
    id="special-orders"
    class="special-orders-bg bg-fixed bg-cover py-9 overflow-hidden sm:h-[75vh] flex flex-col justify-center relative"
  >
    <div
      class="lg:hidden absolute inset-0 bg-white bg-opacity-60 w-full h-full"
    ></div>
    <div class="w-full relative">
      <div class="max-w-6xl mx-auto px-2 px-4 xl:px-0">
        <div class="max-w-2xl">
          <h2
            class="pt-5 uppercase text-spanish-carmine text-2xl font-bold mb-8 uppercase"
          >
            Custom Orders
          </h2>
          <h4 class="text-[25px] leading-[30px] mb-6 text-chinese-black">
            <span class="italic">Great Minds Thinking Differently</span> is our
            Mantra.
          </h4>
          <p
            class="font-lato text-lg leading-[1.8] text-dark-liver font-normal mb-6 text-justify"
          >
            Customer loyalty, event giveaways, product launch support, brand
            awareness and corporate gifts are just a few of the many ways that
            custom promotional products can help your business. Our Account
            Executives are trained to understand your business needs and to
            solve your objectives with effective product solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.special-orders-bg {
  background-image: url("/src/assets/images/services/mike-mackinnon.jpg");
  background-position: 100%;
  @media screen and (max-width: 768px) {
    background-position: 80%;
  }
}
</style>
