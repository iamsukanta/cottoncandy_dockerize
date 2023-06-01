import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/sustainable-2021",
      name: "sustainable2021",
      component: () => import("../views/SustainableView.vue"),
    },
    {
      path: "/homefront-connection",
      name: "homefront-connection",
      component: () => import("../views/HomefrontConnection.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 150,
      };
    } else {
      return {
        left: 0,
        top: 0,
      };
    }
  },
});

export default router;
