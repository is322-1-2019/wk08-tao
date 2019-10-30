import Vue from "vue";
import VueRouter from "vue-router";

import Ex01Page from "../components/ex01/Ex01Page.vue";
import Ex02Page from "../components/ex02/Ex02Page.vue";
import Ex03Page from "../components/ex03/Ex03Page.vue";

Vue.use(VueRouter);

const routeList = [
  {
    path: "/",
    redirect: "/ex01",
  },
  {
    path: "/ex01",
    component: Ex01Page,
  },
  {
    path: "/ex02",
    component: Ex02Page,
  },
  {
    path: "/ex03",
    component: Ex03Page,
  }
];

export const router = new VueRouter({
  routes: routeList,
});