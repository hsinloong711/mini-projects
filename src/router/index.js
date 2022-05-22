import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Search from "../views/Search.vue";
import Age from "../views/Age.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/age",
      name: "age",
      component: Age,
    },
  ],
});

export default router;
