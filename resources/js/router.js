import { createWebHistory, createRouter } from "vue-router";
import home from "./pages/home.vue";
import about from "./pages/about.vue";
import services from "./pages/services.vue";
import project from "./pages/project.vue";
import team from "./pages/team.vue";
import contact from "./pages/contact.vue";
import career from "./pages/career.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: home,
    },
    {
        path: "/about",
        name: "About",
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
        path: "/career",
        name: "Career",
        component: career,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
