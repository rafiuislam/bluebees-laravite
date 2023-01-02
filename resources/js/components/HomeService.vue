<script setup>
import { reactive } from "vue";

const props = reactive({
    title: "Our Services",

    header: [
        "UI UX Design ",
        "Web Application ",
        "Mobile Application ",
        "Consultancy",
    ],

    subHeader:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: [
        "../../images/ui-ux-design-icon.png",
        "../../images/web-application-icon.png",
        "../../images/Mobile-Application.png",
        "../../images/consultancy-icon.png",
    ],
    routes: ["uiux", "webApp", "mobileApp", "customerSoft"],
});
</script>

<template>
    <section class="services">
        <!-- Title&header -->
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1 class="title">{{ props.title }}</h1>
            </div>
        </div>
        <!-- Bg  -->
        <div class="client-bg"></div>

        <!-- Services -->
        <div class="container">
            <div class="row text-center">
                <div
                    v-for="(i, index) in props.header.length"
                    :key="index"
                    class="col-lg-3 col-md-6 col-12 text-center"
                >
                    <div
                        class="service-item text-center justify-content-center"
                    >
                        <router-link :to="{ name: props.routes[index] }">
                            <div class="service-icon">
                                <img
                                    :src="props.image[index]"
                                    alt="service"
                                    class="img-fluid"
                                />
                            </div>
                            <h3>{{ props.header[index] }}</h3>
                            <p>
                                {{ props.subHeader }}
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
