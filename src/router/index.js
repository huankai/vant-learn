import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);
import Login from "@/router/login";
import Base from "@/router/base";
import Blank from "@/router/blank";

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...Login.name,
    ...Base.name,
    ...Blank.name
  ]
});

router.beforeEach((to, from, next) => {
  next();
})

export default router;
