import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DiaryWrite from "../views/DiaryWrite.vue";
import JoinView from "../views/JoinView.vue";
import LoginView from "../views/LoginView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
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
  {
    path: "/join",
    name: "joinView",
    component: JoinView,
  },
  {
    path: "/login",
    name: "loginView",
    component: LoginView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
