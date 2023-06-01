<template>
  <div class="py-[70px] bg-[#373737] text-white lg:grid lg:grid-cols-12">
    <div class="lg:col-span-3 px-4">
      <img
        src="/src/assets/images/logo-white.png"
        class="w-[300px] h-[69px]"
        alt="Cotton Candy Inc."
      />
    </div>
    <div class="lg:col-span-5 px-4 mt-6 lg:mt-0 lg:grid lg:grid-cols-3">
      <div class="lg:col-span-1 flex flex-col px-4">
        <h5 class="font-semibold tracking-[3px] mb-[4px]">MENU</h5>
        <router-link class="py-2.5 font-semibold cursor-pointer" to="/"
          >Home</router-link
        >
        <router-link class="py-2.5 font-semibold cursor-pointer" to="/about"
          >About</router-link
        >
        <router-link class="py-2.5 font-semibold cursor-pointer" to="/services"
          >Services</router-link
        >
      </div>

      <div class="lg:col-span-1 flex flex-col mt-6 lg:mt-0 px-4">
        <h5 class="font-semibold tracking-[3px] mb-[4px]">POLICIES</h5>
        <a
          class="py-2.5 font-semibold cursor-pointer"
          href="/uploads/Supplier-Diversity-Policy-CottonCandy.pdf"
          target="_blank"
          rel="noopener noreferrer nofollow"
          >Supplier Diversity</a
        >
        <a
          class="py-2.5 font-semibold cursor-pointer"
          href="/uploads/CottonCandy-Privacy_Policy.pdf"
          target="_blank"
          rel="noopener noreferrer nofollow"
          >Privacy Policy</a
        >
      </div>
    </div>
    <div class="lg:col-span-4 px-4 mt-6 lg:mt-0 pl-6 lg:pl-0">
      <div class="flex flex-row mt-1">
        <a
          href="https://www.pinterest.ca/cottoncandypromotions/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            src="/src/assets/images/pinterest.png"
            class="w-[43px]"
            alt="Pinterest Conton candy"
          />
        </a>

        <a
          href="https://www.linkedin.com/company/cotton-candy-inc./"
          class="pl-2.5"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            src="/src/assets/images/linkedin.png"
            class="w-[43px]"
            alt="Linkedin Conton candy"
          />
        </a>
      </div>
      <p class="text-2.5 font-normal mt-3">&copy; Cotton Candy Inc.</p>
    </div>
  </div>
</template>
