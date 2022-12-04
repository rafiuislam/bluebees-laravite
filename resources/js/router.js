import { createWebHistory, createRouter } from "vue-router";
import home from "./pages/home.vue";
import about from "./pages/about.vue";
import services from "./pages/services.vue";
import project from "./pages/project.vue";
import team from "./pages/team.vue";
import contact from "./pages/contact.vue";
import products from "./pages/products.vue";

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
    {
        path: "/products",
        name: "products",
        component: products,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
