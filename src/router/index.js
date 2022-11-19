import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DiaryWrite from "../views/DiaryWrite.vue";
//import OtherDiaryView from "../views/OtherDiaryView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/write",
    name: "diaryWrite",
    component: DiaryWrite,
  },
  {
    path: "/write/:bno",
    name: "diaryWrite",
    component: DiaryWrite,
  },
  // {
  //   path: "/other",
  //   name: "OtherDiaryView",
  //   component: OtherDiaryView,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
