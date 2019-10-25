import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);
import Login from "@/router/login";
import Base from "@/router/base";

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...Login.name,
    ...Base.name
  ]
});
