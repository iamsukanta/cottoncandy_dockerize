<template>
  <section class="learn-more bg-cultured px-2.5 py-24">
    <div class="max-w-7xl mx-auto">
      <div class="lg:grid lg:grid-cols-3">
        <div class="py-1.5 lg:px-9">
          <div class="flex flex-col justify-center text-center">
            <img
              src="/src/assets/images/customer1.png"
              class="max-w-[280px] max-h-[280px] mx-auto"
            />
            <h1
              class="font-bold text-morning-blue text-[2.8em] leading-[3rem] pt-5 mb-1.5"
            >
              Custom Orders
            </h1>
            <p class="text-morning-blue font-normal mb-[24px]">
              Great Minds Thinking Differently <br />
              is our Mantra.
            </p>
            <router-link to="/services">
              <p
                class="inline-block pr-5 md:font-normal text-lg md:text-[25.2px] text-debian-red"
              >
                Learn more
              </p>
              <div class="arrow-icon inline-block"></div>
            </router-link>
          </div>
        </div>

        <div class="py-1.5 lg:px-9 mt-10 lg:mt-0">
          <div class="flex flex-col justify-center text-center">
            <img
              src="/src/assets/images/customer2.png"
              class="max-w-[280px] max-h-[280px] mx-auto"
            />
            <h1
              class="font-bold text-morning-blue text-[2.8em] leading-[3rem] pt-5 mb-1.5"
            >
              E-Stores
            </h1>
            <p class="text-morning-blue font-normal mb-[24px]">
              Branding certainty and spend control in a <br />
              single E-Store Solution Portal.
            </p>
            <router-link to="/services/#e-store">
              <p
                class="inline-block pr-5 md:font-normal text-lg md:text-[25.2px] text-debian-red"
              >
                Learn more
              </p>
              <div class="arrow-icon inline-block"></div>
            </router-link>
          </div>
        </div>

        <div class="py-1.5 lg:px-9 mt-10 lg:mt-0">
          <div class="flex flex-col justify-center text-center">
            <img
              src="/src/assets/images/customer3.png"
              class="max-w-[280px] max-h-[280px] mx-auto"
            />
            <h1
              class="font-bold text-morning-blue text-[2.8em] leading-[3rem] pt-5 mb-1.5"
            >
              PPE
            </h1>
            <p class="text-morning-blue font-normal mb-[24px]">
              Healthcare agency authorized products from a network of trusted
              suppliers.
            </p>
            <router-link to="/services/#ppe">
              <p
                class="inline-block pr-5 md:font-normal text-lg md:text-[25.2px] text-debian-red"
              >
                Learn more
              </p>
              <div class="arrow-icon inline-block"></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.arrow-icon {
  position: relative;
  height: 0px;
  width: 0px;
  top: -2px;
  border: 5px solid;
  border-color: #d50d56 #d50d56 transparent transparent;
  transform: rotate(45deg);
  &::before {
    top: 0px;
    right: 0px;
    transform-origin: top right;
    transform: rotate(45deg);
    content: "";
    display: block;
    position: absolute;
    height: 0;
    width: 0;
    border: 4px solid;
    border-color: #d50d56 transparent transparent #d50d56;
  }

  &::after {
    top: 0px;
    right: 0px;
    transform-origin: top right;
    transform: rotate(-45deg);
    content: "";
    display: block;
    position: absolute;
    height: 0;
    width: 0;
    border: 4px solid;
    border-color: transparent #d50d56 #d50d56 transparent;
  }
}
</style>
