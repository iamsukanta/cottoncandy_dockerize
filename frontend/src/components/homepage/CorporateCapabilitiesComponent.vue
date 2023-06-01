<script setup>
const corporateData = [
  {
    image: "apparel.png",
    title: { part1: "Corporate", part2: "Apparel" },
    backText:
      "Brand name access, custom designs, and uniform programs all tailored to fit your requirements.",
  },
  {
    image: "events.png",
    title: { part1: "Events &", part2: "Tradeshows" },
    backText:
      "Promotional giveaways, banners, support materials, custom displays and specialized brand presence.",
  },

  {
    image: "executive.png",
    title: { part1: "Executive", part2: "Gifts" },
    backText:
      "Unique suggestions to build client loyalty, stakeholder appreciation, recruiting, onboarding and more.",
  },

  {
    image: "sales.png",
    title: { part1: "Point Of Sale", part2: "Displays" },
    backText:
      "From menu stands to coasters, banners to posters, signs to hangers, flags to dart boards.",
  },

  {
    image: "design.png",
    title: { part1: "Design &", part2: "Marketing" },
    backText:
      "Custom graphics for product, print and digital realms including web development and social media.",
  },

  {
    image: "packaging.png",
    title: { part1: "Custom", part2: "Packaging" },
    backText:
      "Use creative boxing, bagging, hangtags or bellybands to heighten product presentation and perceived value.",
  },

  {
    image: "embroidery.png",
    title: { part1: "Design &", part2: "Embroidery" },
    backText: "PPPC Gold Medalists for Best Embroidery 2016 & 2017",
  },

  {
    image: "warehouse.png",
    title: { part1: "Warehouse &", part2: "Fulfilment" },
    backText:
      "State of the art and secure facilities, with resources scalable to handle projects of any scope and size.",
  },

  {
    image: "printing.png",
    title: { part1: "Heat Transfer &", part2: "Screen Printing" },
    backText:
      "Quality apparel decoration with high quality graphics, eco-friendly inks and production methods.",
  },

  {
    image: "offshore.png",
    title: { part1: "Offshore", part2: "Sourcing" },
    backText:
      "Compliant manufacturing and purchasing efficiencies for custom or high volume orders.",
  },

  {
    image: "awards.png",
    title: { part1: "Awards &", part2: "Recognition" },
    backText:
      "Commemorate milestones, achievements and closings with  custom trophies, tombstones and deal toys.",
  },

  {
    image: "tournament.png",
    title: { part1: "Tournament", part2: "Prizing" },
    backText:
      "Prizing programs, glove & shoe fitting programs, swag bags, accessories, clubs, bags, apparel and, yes, balls.",
  },
];
const imageSrc = (value) => {
  return new URL(`/src/assets/images/corporates/${value}`, import.meta.url);
};
</script>

<template>
  <section class="corporate-capabilities px-2.5 md:px-0 py-20">
    <div class="py-10">
      <h4
        class="text-center font-lato text-spanish-carmine text-[21px] tracking-[0.2em] font-bold"
      >
        CORPORATE CAPABILITIES
      </h4>
      <h2
        class="text-center font-lato text-morning-blue text-[39.2px] pt-[20px] pb-[20px] leading-[48px]"
      >
        Your one-stop solution for all your merchandise needs.
      </h2>
      <h5
        class="text-center font-lato text-morning-blue text-[25.2px] leading-[48px]"
      >
        Rollover each icon to read more.
      </h5>
    </div>
    <div class="max-w-[1400px] mx-auto">
      <div class="md:grid md:grid-cols-4">
        <div
          v-for="(corporate, index) in corporateData"
          :key="index"
          class="font-lato lg:col-span-1 md:col-span-2 py-9 px-2.5 text-center"
        >
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  :src="imageSrc(corporate.image)"
                  class="max-w-[138px] max-h-[138px] mx-auto"
                />
                <h3
                  class="text-[21px] font-bold text-dark-liver leading-[1.3em]"
                >
                  {{ corporate.title.part1 }} <br />
                  {{ corporate.title.part2 }}
                </h3>
              </div>

              <div class="flip-card-back flex items-center justify-center">
                <span
                  class="text-white font-bold px-[26px] text-[18.8px] leading-[21.8px] font-lato"
                  >{{ corporate.backText }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.flip-card {
  background-color: transparent;
  height: 250px;
  width: 250px;
  perspective: 1000px;
  margin: 0px auto;
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      -webkit-perspective: 0;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
    }

    .flip-card-back {
      background-color: #db2369;
      color: white;
      transform: rotateY(180deg);
      border-radius: 100%;
      line-height: 20px;
      text-align: center;
      margin: -23px auto;
    }
  }
  &:hover {
    .flip-card-inner {
      transform: rotateY(180deg);
    }
  }
}
</style>
