import { createWebHistory, createRouter } from "vue-router";
// import home from "./pages/home.vue";
// // import about from "./pages/about.vue";
// import services from "./pages/services.vue";
// import project from "./pages/project.vue";
// import team from "./pages/team.vue";
// import contact from "./pages/contact.vue";
// import products from "./pages/products.vue";
// // subRoutes
// import ecommerce from "./pages/subPages/ecommerce.vue";
// import erp from "./pages/subPages/erp.vue";
// import hr from "./pages/subPages/hr.vue";
// import pos from "./pages/subPages/pos.vue";
// import uiux from "./pages/subPages/uiux.vue";
// import webApp from "./pages/subPages/webApp.vue";
// import mobileApp from "./pages/subPages/mobileApp.vue";
// import customerSoft from "./pages/subPages/customerSoft.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        // component: home,
        component: () => import("./pages/home.vue"),
    },
    {
        path: "/about",
        name: "About Us",

        component: () => import("./pages/about.vue"),
    },
    {
        path: "/services",
        name: "Services",

        component: () => import("./pages/services.vue"),
    },
    {
        path: "/products",
        name: "Products",

        component: () => import("./pages/products.vue"),
    },
    {
        path: "/project",
        name: "Project",

        component: () => import("./pages/project.vue"),
    },
    {
        path: "/gallery",
        name: "Gallery",

        component: () => import("./pages/gallery.vue"),
    },

    {
        path: "/team",
        name: "Team",

        component: () => import("./pages/team.vue"),
    },
    {
        path: "/contact",
        name: "Contact",

        component: () => import("./pages/contact.vue"),
    },
    // subRoutes
    {
        path: "/product/ecommerce",
        name: "Ecommerce",
        // component: ecommerce,
        component: () => import("./pages/subPages/ecommerce.vue"),
    },
    {
        path: "/product/erp",
        name: "erp",
        // component: erp,
        component: () => import("./pages/subPages/erp.vue"),
    },
    {
        path: "/product/hr",
        name: "hr",
        // component: hr,
        component: () => import("./pages/subPages/hr.vue"),
    },
    {
        path: "/product/pos",
        name: "pos",
        // component: pos,
        component: () => import("./pages/subPages/pos.vue"),
    },
    {
        path: "/service/uiux",
        name: "uiux",
        // component: uiux,
        component: () => import("./pages/subPages/uiux.vue"),
    },
    {
        path: "/service/webApp",
        name: "webApp",
        // component: webApp,
        component: () => import("./pages/subPages/webApp.vue"),
    },
    {
        path: "/service/mobileApp",
        name: "mobileApp",
        // component: mobileApp,
        component: () => import("./pages/subPages/mobileApp.vue"),
    },
    {
        path: "/service/customerSoft",
        name: "customerSoft",
        // component: customerSoft,
        component: () => import("./pages/subPages/customerSoft.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
