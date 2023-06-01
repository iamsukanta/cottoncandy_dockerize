<template>
  <section class="search-section relative flex">
    <img src="/src/assets/images/search-banner.jpg" class="w-full h-auto" />
    <div
      class="search-box lg:w-1/2 md:w-[400px] sm:w-[300px] absolute top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <div class="input-group relative table border-separate">
        <span
          class="table-cell left bg-white w-[55px] h-auto px-[12px] rounded-tl-[10px] rounded-bl-[10px] align-middle"
        >
          <img
            alt="search icon"
            class="icon max-w-full"
            src="/src/assets/images/search-icon.png"
          />
        </span>
        <label class="hidden" for="search_esp">Search</label>
        <input
          type="text"
          name="search-keyword"
          id="search_esp"
          size="200"
          class="form-control relative w-full bg-white border-l border-r px-5 h-[65px] text-[23px] focus:outline-0"
          aria-invalid="false"
          placeholder="Search for products"
        />
        <span
          class="table-cell right bg-white w-[55px] h-auto px-[12px] rounded-tr-[10px] rounded-br-[10px] align-middle"
        >
          <a
            class="btn-search bg-razzmatazz text-white px-[40px] py-[15px] text-[18px]"
            href="#"
            target="_self"
            rel="noopener"
            >Search</a
          >
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.search-box {
  @media screen and (max-width: 1024px) {
    width: 500px;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 320px;
    .table-cell {
      padding: 5px;
      img {
        width: 20px;
        margin-left: 13px;
      }
    }

    input {
      padding: 5px;
      height: 40px;
      font-size: 14px;
    }
    .btn-search {
      padding: 7px;
      border-radius: 5px;
      font-size: 14px;
    }
  }
}
</style>
