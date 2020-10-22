import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
}, {
    path: "/button",
    name: "Button",
    component: () =>
        import("../views/Button.vue")
}, {
    path: "/color",
    name: "Color",
    component: () =>
        import("../views/Color.vue")
}, {
    path: "/toast",
    name: "Toast",
    component: () =>
        import("../views/Toast.vue")
}, {
    path: "/dialog",
    name: "Dialog",
    component: () =>
        import("../views/Dialog.vue")
}, {
    path: "/loading",
    name: "Loading",
    component: () =>
        import("../views/Loading.vue")
}];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

export default router;