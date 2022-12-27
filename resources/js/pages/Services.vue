<script setup>
import HomeBanner from "../components/HomeBanner.vue";

import { reactive } from "vue";

const props = reactive({
    title: "What We Can Do For You",
    teamMsg:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare consectetur massa et ultrices. Morbi gravida mi sed ex ultrices consectetur. Proin tincidunt ligula sit amet scelerisque semper. Aenean at nulla et magna interdum scelerisque. Quisque eu ante gravida sem ultrices eleifend. Nam mollis, leo sed sagittis finibus, nulla metus aliquet nisl, sit amet pellentesque lectus magna a ligula. Duis a mauris sit amet lectus pharetra maximus. Proin semper mi id est blandit portti",
    header: [
        "UI UX Design ",
        "Web Application Development",
        "Mobile Application Development",
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
});
</script>

<template>
    <HomeBanner />
    <section class="services-page">
        <!-- Title&header -->
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1 class="title">{{ props.title }}</h1>
            </div>
            <div class="d-flex justify-content-center">
                <p class="text">
                    {{ props.teamMsg }}
                </p>
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
                        <div class="service-icon">
                            <img
                                :src="props.image[index]"
                                alt="ui-ux"
                                class="img-fluid"
                            />
                        </div>
                        <h3>{{ props.header[index] }}</h3>
                        <p>
                            {{ props.subHeader }}
                        </p>
                    </div>
                </div>
                <!-- <div class="col-lg-3 col-md-6 col-12">
                    <div
                        class="service-item text-center justify-content-center"
                    >
                        <div class="service-icon">
                            <img
                                src="../../images/ui-ux-design-icon.png"
                                alt="ui-ux"
                                class="img-fluid"
                            />
                        </div>
                        <h3>{{ props.header }}</h3>
                        <p>
                            {{ props.subHeader }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div
                        class="service-item text-center justify-content-center"
                    >
                        <div class="service-icon">
                            <img
                                src="../../images/ui-ux-design-icon.png"
                                alt="ui-ux"
                                class="img-fluid"
                            />
                        </div>
                        <h3>{{ props.header }}</h3>
                        <p>
                            {{ props.subHeader }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div
                        class="service-item text-center justify-content-center"
                    >
                        <div class="service-icon">
                            <img
                                src="../../images/ui-ux-design-icon.png"
                                alt="ui-ux"
                                class="img-fluid"
                            />
                        </div>
                        <h3>{{ props.header }}</h3>
                        <p>
                            {{ props.subHeader }}
                        </p>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>
