import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        // component: home,
        component: () => import("./pages/home.vue"),
    },
    {
        path: "/about/aboutUs",
        name: "About Us",

        component: () => import("./pages/about.vue"),
    },
    {
        path: "/about/career",
        name: "Career",

        component: () => import("./pages/career.vue"),
    },
    {
        path: "/about/career/register",
        name: "Register",

        component: () => import("./pages/register.vue"),
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
        path: "/gallery/FootballTournament",
        name: "FootballTournament",
        component: () => import("./pages/subPages/gallery1.vue"),
    },
    {
        path: "/gallery/FootballMatch",
        name: "FootballMatch",
        component: () => import("./pages/subPages/gallery2.vue"),
    },
    {
        path: "/gallery/ToursToVisitSylhet",
        name: "ToursToVisitSylhet",
        component: () => import("./pages/subPages/gallery3.vue"),
    },
    {
        path: "/gallery/ToursToVisitSaintMartin",
        name: "ToursToVisitSaintMartin",
        component: () => import("./pages/subPages/gallery4.vue"),
    },
    {
        path: "/gallery/OfficeFunctions",
        name: "OfficeFunctions",
        component: () => import("./pages/subPages/gallery5.vue"),
    },
    {
        path: "/gallery/BirthdayParties",
        name: "BirthdayParties",
        component: () => import("./pages/subPages/gallery6.vue"),
    },
    {
        path: "/gallery/InhouseEvents",
        name: "InhouseEvents",
        component: () => import("./pages/subPages/gallery7.vue"),
    },
    {
        path: "/gallery/AwardCeremony",
        name: "AwardCeremony",
        component: () => import("./pages/subPages/gallery8.vue"),
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
