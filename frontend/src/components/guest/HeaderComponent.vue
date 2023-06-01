<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const isOpenMobileMenu = ref(false);
const isProductMenuOpen = ref(false);
const isServiceMenuOpen = ref(false);
const isGolfSubmenuOpen = ref(false);
const isFallSubmenuOpen = ref(false);
const isSummerIdeaSubMenuOpen = ref(false);
const isSustainableSubmenuOpen = ref(false);

const isScrolled = ref(0);

function onScroll() {
  isScrolled.value = window.scrollY;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
<template>
  <div
    :class="[
      isScrolled > 110 ? 'lg:-translate-y-[110px]' : '',
      isScrolled > 200
        ? 'lg:fixed z-[1023] lg:top-0 lg:translate-y-[0px] transition-all ease-in-out duration-300'
        : '',
      'w-full px-4 py-5 bg-white border-b border-black/10 leading-[53px]',
    ]"
  >
    <div class="flex flex-row items-stretch justify-between">
      <div class="logo px-4 md:px-0">
        <a href="/">
          <img
            src="/src/assets/images/logo.png"
            width="300"
            height="69"
            class="w-full h-full"
            alt="Cotton Candy Inc."
          />
        </a>
      </div>
      <div class="menu flex items-center lg:items-stretch">
        <div @click="isOpenMobileMenu = !isOpenMobileMenu" class="lg:hidden">
          <span class="px-4 text-debian-red">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </span>
        </div>
        <div class="hidden lg:flex lg:items-stretch lg:justify-end">
          <ul class="m-0 pr-8 flex flex-row items-stretch justify-end">
            <li
              class="pr-8 text-[13px] tracking-[-1px] relative dropdown root-item flex"
            >
              <div class="flex items-center cursor-pointer group">
                <div
                  title="Product"
                  class="root-item-link text-[13px] font-medium uppercase"
                >
                  Product
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-[20px] h-[20px] pl-1.5 group-hover:fill-debian-red"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <ul role="menu" class="main-menu dropdown-menu">
                <li class="menu-item">
                  <a
                    title="Search USA Products"
                    target="_blank"
                    href="http://cottoncandy2.espwebsite.com"
                    >Search USA Products</a
                  >
                </li>
                <li class="menu-item">
                  <a
                    title="Search Canada Products"
                    target="_blank"
                    href="http://cottoncandy.espwebsite.com"
                    >Search Canada Products</a
                  >
                </li>
                <li class="menu-item">
                  <a
                    title="Holiday Ideas Primer 2022"
                    href="https://www.zoomcats.com/catalog/cotton-candy-holiday-ideas-primer-2022"
                    >Holiday Ideas Primer 2022</a
                  >
                </li>
                <li class="menu-item relative dropdown">
                  <a title="Golf" href="https://cottoncandy.com/golf/">Golf </a>
                  <span class="float-right pr-3 pt-2 inline-block">
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.75 1.375L7.375 7L1.75 12.625"
                        stroke="#2D3A4A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <ul role="menu" class="dropdown-menu sub-menu">
                    <li class="menu-item">
                      <a title="Golf Canada" href="https://golf.cottoncandy.ca"
                        >Golf Canada</a
                      >
                    </li>
                    <li class="menu-item">
                      <a title="Golf USA" href="https://golf.cottoncandy.com"
                        >Golf USA</a
                      >
                    </li>
                  </ul>
                </li>

                <li class="menu-item relative dropdown">
                  <a title="Fall / Winter Ideas" href="#"
                    >Fall / Winter Ideas
                  </a>
                  <span class="float-right pr-3 pt-2 inline-block">
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.75 1.375L7.375 7L1.75 12.625"
                        stroke="#2D3A4A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <ul role="menu" class="dropdown-menu sub-menu">
                    <li class="menu-item">
                      <a
                        title="Canada"
                        target="_blank"
                        href="https://catalogue.cottoncandy.ca"
                        >Canada</a
                      >
                    </li>
                    <li class="menu-item">
                      <a
                        title="USA"
                        target="_blank"
                        href="http://catalog.cottoncandy.com"
                        >USA</a
                      >
                    </li>
                  </ul>
                </li>

                <li class="menu-item relative dropdown">
                  <a title="Summer Ideas" href="#">Summer Ideas </a>
                  <span class="float-right pr-3 pt-2 inline-block">
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.75 1.375L7.375 7L1.75 12.625"
                        stroke="#2D3A4A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <ul role="menu" class="sub-menu dropdown-menu">
                    <li id="menu-item-5122" class="menu-item">
                      <a
                        title="Canada"
                        target="_blank"
                        href="http://springsummer.cottoncandy.ca"
                        >Canada</a
                      >
                    </li>
                    <li class="menu-item">
                      <a
                        title="USA"
                        target="_blank"
                        href="http://springsummer.cottoncandy.com"
                        >USA</a
                      >
                    </li>
                  </ul>
                </li>

                <li class="menu-item relative dropdown">
                  <a title="Sustainable" href="#">Sustainable </a>
                  <span class="float-right pr-3 pt-2 inline-block">
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.75 1.375L7.375 7L1.75 12.625"
                        stroke="#2D3A4A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <ul role="menu" class="sub-menu dropdown-menu">
                    <li class="menu-item">
                      <a
                        title="Sustainable 2022"
                        href="https://www.zoomcats.com/catalog/cotton-candy-sustainable-2022"
                        >Sustainable 2022</a
                      >
                    </li>
                    <li class="menu-item">
                      <a
                        title="Sustainable 2021"
                        href="https://cottoncandy.com/sustainable-2021/"
                        >Sustainable 2021</a
                      >
                    </li>
                  </ul>
                </li>

                <li class="menu-item">
                  <a title="Kits (Canada)" href="https://cottoncandykits.ca"
                    >Kits (Canada)</a
                  >
                </li>

                <li class="menu-item">
                  <a title="Lookbook Archive" href="#">Lookbook Archive</a>
                </li>
              </ul>
            </li>
            <li
              class="pr-8 text-[13px] tracking-[-1px] root-item flex flex-col justify-center"
            >
              <router-link
                title="About Us"
                class="font-medium hover:text-debian-red"
                to="/about"
                >ABOUT US</router-link
              >
            </li>
            <li
              class="pr-8 text-[13px] tracking-[-1px] relative dropdown root-item flex"
            >
              <div class="flex items-center cursor-pointer group">
                <router-link
                  title="Services"
                  class="root-item-link text-[13px] font-medium uppercase"
                  to="/services"
                >
                  Services
                </router-link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-[20px] h-[20px] pl-1.5 group-hover:fill-debian-red"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <ul role="menu" class="main-menu dropdown-menu">
                <li class="menu-item">
                  <router-link
                    title="Homefront Connection"
                    to="/homefront-connection"
                    >Homefront Connection</router-link
                  >
                </li>
                <li class="menu-item">
                  <router-link
                    title="Custom Orders"
                    to="/services/#special-orders"
                    >Custom Orders</router-link
                  >
                </li>
                <li class="menu-item">
                  <router-link title="Company Stores" to="/services/#e-store"
                    >Company Stores</router-link
                  >
                </li>
                <li class="menu-item">
                  <router-link title="PPE" to="/services/#ppe">PPE</router-link>
                </li>
                <li class="menu-item">
                  <router-link
                    title="Reward &amp; Recognition"
                    to="/services/#rewards"
                    >Reward &amp; Recognition</router-link
                  >
                </li>
                <li class="menu-item">
                  <router-link title="Design" to="/services/#marketing"
                    >Design</router-link
                  >
                </li>
              </ul>
            </li>
            <li
              class="text-[13px] tracking-[-1px] root-item flex flex-col justify-center"
            >
              <router-link
                title="Contact"
                class="font-medium hover:text-debian-red uppercase"
                to="/contact"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div
      v-if="isOpenMobileMenu"
      class="mobile-menu lg:hidden w-full mt-3 px-7 py-5"
    >
      <ul>
        <li>
          <a href="#">PRODUCT</a>
          <span
            @click="isProductMenuOpen = !isProductMenuOpen"
            class="inline-block float-right px-2 py-[5px] border border-slate-600"
          >
            <svg
              class="root-svg cursor-pointer"
              width="10"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_16_4035)">
                <path
                  d="M7.00009 12.4091C6.74421 12.4091 6.48821 12.3159 6.29321 12.1294L0.293213 6.40217C-0.0974121 6.02931 -0.0974121 5.42526 0.293213 5.05239C0.683838 4.67952 1.31665 4.67952 1.70728 5.05239L7.00009 10.1063L12.2938 5.05313C12.6845 4.68026 13.3173 4.68026 13.7079 5.05313C14.0985 5.426 14.0985 6.03005 13.7079 6.40292L7.7079 12.1302C7.51259 12.3166 7.25634 12.4091 7.00009 12.4091Z"
                  fill="#2D3A4A"
                />
              </g>
              <defs>
                <clipPath id="clip0_16_4035">
                  <rect width="14" height="15.2727" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <ul v-if="isProductMenuOpen" class="pl-3 py-2">
            <li>
              <a
                title="Search USA Products"
                target="_blank"
                href="http://cottoncandy2.espwebsite.com"
                >Search USA Products</a
              >
            </li>
            <li>
              <a
                title="Search Canada Products"
                target="_blank"
                href="http://cottoncandy.espwebsite.com"
                >Search Canada Products</a
              >
            </li>
            <li>
              <a
                title="Holiday Ideas Primer 2022"
                href="https://www.zoomcats.com/catalog/cotton-candy-holiday-ideas-primer-2022"
                >Holiday Ideas Primer 2022</a
              >
            </li>
            <li>
              <a title="Golf" href="https://cottoncandy.com/golf/">Golf </a>
              <span
                @click="isGolfSubmenuOpen = !isGolfSubmenuOpen"
                class="inline-block float-right px-2 py-[5px] border border-slate-600"
              >
                <svg
                  class="root-svg cursor-pointer"
                  width="10"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_16_4035)">
                    <path
                      d="M7.00009 12.4091C6.74421 12.4091 6.48821 12.3159 6.29321 12.1294L0.293213 6.40217C-0.0974121 6.02931 -0.0974121 5.42526 0.293213 5.05239C0.683838 4.67952 1.31665 4.67952 1.70728 5.05239L7.00009 10.1063L12.2938 5.05313C12.6845 4.68026 13.3173 4.68026 13.7079 5.05313C14.0985 5.426 14.0985 6.03005 13.7079 6.40292L7.7079 12.1302C7.51259 12.3166 7.25634 12.4091 7.00009 12.4091Z"
                      fill="#2D3A4A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_4035">
                      <rect width="14" height="15.2727" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <ul v-if="isGolfSubmenuOpen" class="px-5 py-2">
                <li>
                  <a title="Golf Canada" href="https://golf.cottoncandy.ca"
                    >Golf Canada</a
                  >
                </li>
                <li>
                  <a title="Golf USA" href="https://golf.cottoncandy.com"
                    >Golf USA</a
                  >
                </li>
              </ul>
            </li>

            <li>
              <a title="Fall / Winter Ideas" href="#">Fall / Winter Ideas </a>
              <span
                @click="isFallSubmenuOpen = !isFallSubmenuOpen"
                class="inline-block float-right px-2 py-[5px] border border-slate-600"
              >
                <svg
                  class="root-svg cursor-pointer"
                  width="10"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_16_4035)">
                    <path
                      d="M7.00009 12.4091C6.74421 12.4091 6.48821 12.3159 6.29321 12.1294L0.293213 6.40217C-0.0974121 6.02931 -0.0974121 5.42526 0.293213 5.05239C0.683838 4.67952 1.31665 4.67952 1.70728 5.05239L7.00009 10.1063L12.2938 5.05313C12.6845 4.68026 13.3173 4.68026 13.7079 5.05313C14.0985 5.426 14.0985 6.03005 13.7079 6.40292L7.7079 12.1302C7.51259 12.3166 7.25634 12.4091 7.00009 12.4091Z"
                      fill="#2D3A4A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_4035">
                      <rect width="14" height="15.2727" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <ul v-if="isFallSubmenuOpen" class="px-5 py-2">
                <li>
                  <a
                    title="Canada"
                    target="_blank"
                    href="https://catalogue.cottoncandy.ca"
                    >Canada</a
                  >
                </li>
                <li>
                  <a
                    title="USA"
                    target="_blank"
                    href="http://catalog.cottoncandy.com"
                    >USA</a
                  >
                </li>
              </ul>
            </li>

            <li>
              <a title="Summer Ideas" href="#">Summer Ideas </a>
              <span
                @click="isSummerIdeaSubMenuOpen = !isSummerIdeaSubMenuOpen"
                class="inline-block float-right px-2 py-[5px] border border-slate-600"
              >
                <svg
                  class="root-svg cursor-pointer"
                  width="10"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_16_4035)">
                    <path
                      d="M7.00009 12.4091C6.74421 12.4091 6.48821 12.3159 6.29321 12.1294L0.293213 6.40217C-0.0974121 6.02931 -0.0974121 5.42526 0.293213 5.05239C0.683838 4.67952 1.31665 4.67952 1.70728 5.05239L7.00009 10.1063L12.2938 5.05313C12.6845 4.68026 13.3173 4.68026 13.7079 5.05313C14.0985 5.426 14.0985 6.03005 13.7079 6.40292L7.7079 12.1302C7.51259 12.3166 7.25634 12.4091 7.00009 12.4091Z"
                      fill="#2D3A4A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_4035">
                      <rect width="14" height="15.2727" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <ul v-if="isSummerIdeaSubMenuOpen" class="px-5 py-2">
                <li>
                  <a
                    title="Canada"
                    target="_blank"
                    href="http://springsummer.cottoncandy.ca"
                    >Canada</a
                  >
                </li>
                <li>
                  <a
                    title="USA"
                    target="_blank"
                    href="http://springsummer.cottoncandy.com"
                    >USA</a
                  >
                </li>
              </ul>
            </li>

            <li>
              <a title="Sustainable" href="#">Sustainable </a>
              <span
                @click="isSustainableSubmenuOpen = !isSustainableSubmenuOpen"
                class="inline-block float-right px-2 py-[5px] border border-slate-600"
              >
                <svg
                  class="root-svg cursor-pointer"
                  width="10"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_16_4035)">
                    <path
                      d="M7.00009 12.4091C6.74421 12.4091 6.48821 12.3159 6.29321 12.1294L0.293213 6.40217C-0.0974121 6.02931 -0.0974121 5.42526 0.293213 5.05239C0.683838 4.67952 1.31665 4.67952 1.70728 5.05239L7.00009 10.1063L12.2938 5.05313C12.6845 4.68026 13.3173 4.68026 13.7079 5.05313C14.0985 5.426 14.0985 6.03005 13.7079 6.40292L7.7079 12.1302C7.51259 12.3166 7.25634 12.4091 7.00009 12.4091Z"
                      fill="#2D3A4A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_4035">
                      <rect width="14" height="15.2727" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <ul v-if="isSustainableSubmenuOpen" class="px-5 py-2">
                <li>
                  <a
                    title="Sustainable 2022"
                    href="https://www.zoomcats.com/catalog/cotton-candy-sustainable-2022"
                    >Sustainable 2022</a
                  >
                </li>
                <li>
                  <a
                    title="Sustainable 2021"
                    href="https://cottoncandy.com/sustainable-2021/"
                    >Sustainable 2021</a
                  >
                </li>
              </ul>
            </li>

            <li>
              <a title="Kits (Canada)" href="https://cottoncandykits.ca"
                >Kits (Canada)</a
              >
            </li>

            <li>
              <a title="Lookbook Archive" href="#">Lookbook Archive</a>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/about">ABOUT US</router-link>
        </li>
        <li>
          <router-link to="/services">SERVICES</router-link>
          <span
            @click="isServiceMenuOpen = !isServiceMenuOpen"
            class="inline-block float-right px-2 py-[5px] border border-slate-600"
          >
            <svg
              class="root-svg cursor-pointer"
              width="10"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_16_4035)">
                <path
                  d="M7.00009 12.4091C6.74421 12.4091 6.48821 12.3159 6.29321 12.1294L0.293213 6.40217C-0.0974121 6.02931 -0.0974121 5.42526 0.293213 5.05239C0.683838 4.67952 1.31665 4.67952 1.70728 5.05239L7.00009 10.1063L12.2938 5.05313C12.6845 4.68026 13.3173 4.68026 13.7079 5.05313C14.0985 5.426 14.0985 6.03005 13.7079 6.40292L7.7079 12.1302C7.51259 12.3166 7.25634 12.4091 7.00009 12.4091Z"
                  fill="#2D3A4A"
                />
              </g>
              <defs>
                <clipPath id="clip0_16_4035">
                  <rect width="14" height="15.2727" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <ul v-if="isServiceMenuOpen" class="pl-3 py-2">
            <li>
              <router-link
                title="Homefront Connection"
                to="/homefront-connection"
                >Homefront Connection</router-link
              >
            </li>
            <li>
              <router-link title="Custom Orders" to="/services/#special-orders"
                >Custom Orders</router-link
              >
            </li>
            <li>
              <router-link title="Company Stores" to="/services/#e-store"
                >Company Stores</router-link
              >
            </li>
            <li>
              <router-link title="PPE" to="/services/#ppe">PPE</router-link>
            </li>
            <li>
              <router-link
                title="Reward &amp; Recognition"
                to="/services/#rewards"
                >Reward &amp; Recognition</router-link
              >
            </li>

            <li>
              <router-link title="Design" to="/services/#marketing"
                >Design</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/contact">CONTACT</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.dropdown {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  .dropdown-menu {
    left: 0;
    width: 200px;
    padding: 0;
    position: absolute;
    z-index: 100000;
    top: 100%;
    opacity: 0;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transform: translate3d(0, 10px, 0);
    -webkit-transform: translate3d(0, 10px, 0);
    -moz-transform: translate3d(0, 10px, 0);
    visibility: hidden;
    margin-top: -1px;
    float: left;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
    box-shadow: 0 6px 12px rgb(0 0 0 / 18%);

    li {
      position: relative;
      line-height: 30px;
      width: 100%;
      vertical-align: top;

      a {
        color: #8c979e;
        width: 100%;
        font-size: 14px;
        text-transform: none;
        font-weight: 400;
        height: auto;
        padding: 15px 24px;
        letter-spacing: -1px;
        max-width: 100%;
        white-space: normal;
        clear: both;
        line-height: 1.42857143;
        cursor: pointer;
        font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial",
          "sans-serif";

        &:hover {
          color: #d50d56;
        }
      }

      &:hover {
        svg {
          path {
            stroke: #d50d56;
          }
        }
      }

      ul {
        left: 100%;
        top: -10px;
        li {
          a {
            font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial",
              "sans-serif";
            &:hover {
              color: #d50d56;
            }
          }
        }
      }
    }
  }
}

.menu {
  ul {
    .root-item {
      .root-item-link {
        color: #4c4c4c;
      }
      &:hover {
        .root-item-link {
          color: #d50d56;
        }
        .root-svg {
          path {
            stroke: #d50d56;
            fill: #d50d56;
          }
        }
      }
    }
    li {
      &:hover {
        .main-menu {
          -webkit-transition: all 0.3s ease;
          display: block;
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, 0px, 0);
          -webkit-transform: translate3d(0, 0px, 0);
          -moz-transform: translate3d(0, 0px, 0);
        }
      }
      .main-menu {
        li {
          &:hover {
            background-color: #efefef;
            .sub-menu {
              display: block;
              opacity: 1;
              visibility: visible;
              transform: translate3d(0, 0px, 0);
              -webkit-transform: translate3d(0, 0px, 0);
              -moz-transform: translate3d(0, 0px, 0);
            }
          }
        }
      }
    }
  }
}

.mobile-menu {
  ul {
    li {
      line-height: 35px;
      a {
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: -1px;
        color: #4c4c4c;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        max-width: 100%;
        white-space: normal;
        font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial",
          "sans-serif";
      }

      ul {
        li {
          position: relative;
          line-height: 45px;
          width: 100%;
          vertical-align: top;
          a {
            width: auto;
            word-wrap: break-word;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 249px;
            padding: 15px 16px;
            color: #8c979e;
            width: 100%;
            font-size: 14px;
            text-transform: none;
            font-weight: 400;
            font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial",
              "sans-serif";
          }
        }
      }
    }
  }
}
</style>
