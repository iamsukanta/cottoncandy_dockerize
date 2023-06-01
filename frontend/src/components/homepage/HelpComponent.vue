<script setup>
  const grids = [
    {
      url: 'https://cottoncandy2.espwebsite.com/ProductResults/?SearchTerms=apparel&referrerPage=Home',
      imgUrl: 'Apparel_btn.jpg',
      altText: 'Apparel button',
      new: true
    },
    {
      url: 'https://cottoncandy2.espwebsite.com/ProductResults/?SearchTerms=drinkware&referrerPage=Home',
      imgUrl: 'Drinkware_btn.jpg',
      altText: 'Drinkware button',
      new: false
    },
    {
      url: 'https://cottoncandy2.espwebsite.com/ProductResults/?SearchTerms=bags&referrerPage=Home',
      imgUrl: 'Bags_btn.jpg',
      altText: 'Bags button',
      new: false
    },
    {
      url: 'https://cottoncandy2.espwebsite.com/ProductResults/?SearchTerms=writing&referrerPage=Home',
      imgUrl: 'Writing-Instruments_btn.jpg',
      altText: 'Writing Instruments button',
      new: true
    },
    {
      url: 'https://cottoncandy2.espwebsite.com/ProductResults/?SearchTerms=technology&referrerPage=Home',
      imgUrl: 'Technology_btn.jpg',
      altText: 'Technology button',
      new: false
    },
    {
      url: 'https://cottoncandy2.espwebsite.com/ProductResults/?SearchTerms=headwear&referrerPage=Home',
      imgUrl: 'Headwear-and-Accessories_btn.jpg',
      altText: 'Headwear and Accessories button',
      new: true
    },
    {
      url: 'https://cottoncandy2.espwebsite.com/ProductResults/?SearchTerms=events&referrerPage=Home',
      imgUrl: 'Events_btn.jpg',
      altText: 'Events button',
      new: false
    },
    {
      url: 'https://cottoncandy2.espwebsite.com/ProductResults/?SearchTerms=outdoors&referrerPage=Home',
      imgUrl: 'Outdoors_btn.jpg',
      altText: 'Outdoors button',
      new: false
    },
    {
      url: 'https://cottoncandy2.espwebsite.com/ProductResults/?SearchTerms=travel&referrerPage=Home',
      imgUrl: 'Travel_btn.jpg',
      altText: 'Travel button',
      new: false
    },
    {
      url: 'https://cottoncandy2.espwebsite.com/ProductResults/?SearchTerms=golf&referrerPage=Home',
      imgUrl: 'Golf_btn.jpg',
      altText: 'Golf button',
      new: false
    }
  ];

  const imageSrc = (value) => {
    return new URL(`/src/assets/images/help/${value}`, import.meta.url);
  };
</script>

<template>
  <section
    class="bg-cultured px-2.5 py-12"
  >
    <div class="max-w-7xl mx-auto">
      <div class="mx-auto pt-8 pb-20">
        <h2 class="py-5 text-center leading-[48px] text-[2.45rem] text-morning-blue">
          Let us help you find what you are searching for.
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="p-2.5" v-for="(item, index) in grids" :key="index">
          <a class="relative group" :href="item.url" target="_blank" rel="noopener noreferrer nofollow">
            <div class="absolute w-[30px] h-[30px] bg-cultured rounded-full -right-1.5 -top-1.5 flex items-center justify-center" v-if="item.new">
              <span class="w-4 h-4 bg-[#79B40C] rounded-full"></span>
            </div>
            <img class="w-full group-hover:opacity-70" :src="imageSrc(item.imgUrl)" :alt="item.altText">
            <!-- <div class="group-hover:block hidden absolute inset-0 w-full h-full bg-black/70 text-white"></div> -->
          </a>
        </div>
      </div>

      <div class="mt-12 p-2.5">
        <div class="w-full flex items-center justify-end space-x-2">
          <span class="w-4 h-4 bg-[#79B40C] rounded-full"></span>
          <span class="italic text-morning-blue text-[1rem]"> = Added new products</span>
        </div>
      </div>
    </div>
  </section>
</template>
