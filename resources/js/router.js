import { createWebHistory, createRouter } from "vue-router";
import home from "./pages/home.vue";
import about from "./pages/about.vue";
import services from "./pages/services.vue";
import project from "./pages/project.vue";
import team from "./pages/team.vue";
import contact from "./pages/contact.vue";
import products from "./pages/products.vue";
// subRoutes
import ecommerce from "./pages/subPages/ecommerce.vue";
import erp from "./pages/subPages/erp.vue";
import hr from "./pages/subPages/hr.vue";
import pos from "./pages/subPages/pos.vue";
import uiux from "./pages/subPages/uiux.vue";
import webApp from "./pages/subPages/webApp.vue";
import mobileApp from "./pages/subPages/mobileApp.vue";
import customerSoft from "./pages/subPages/customerSoft.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: home,
    },
    {
        path: "/about",
        name: "About Us",
        component: about,
    },
    {
        path: "/services",
        name: "Services",
        component: services,
    },
    {
        path: "/products",
        name: "Products",
        component: products,
    },
    {
        path: "/project",
        name: "Project",
        component: project,
    },

    {
        path: "/team",
        name: "Team",
        component: team,
    },
    {
        path: "/contact",
        name: "Contact",
        component: contact,
    },
    // subRoutes
    {
        path: "/product/ecommerce",
        name: "Ecommerce",
        component: ecommerce,
    },
    {
        path: "/product/erp",
        name: "erp",
        component: erp,
    },
    {
        path: "/product/hr",
        name: "hr",
        component: hr,
    },
    {
        path: "/product/pos",
        name: "pos",
        component: pos,
    },
    {
        path: "/service/uiux",
        name: "uiux",
        component: uiux,
    },
    {
        path: "/service/webApp",
        name: "webApp",
        component: webApp,
    },
    {
        path: "/service/mobileApp",
        name: "mobileApp",
        component: mobileApp,
    },
    {
        path: "/service/customerSoft",
        name: "customerSoft",
        component: customerSoft,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
