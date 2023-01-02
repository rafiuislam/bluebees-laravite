<script setup>
import HomeBanner from "../../components/HomeBanner.vue";

import { reactive } from "vue";

const props = reactive({
    title: "The Best Mobile Applicaion Solution",
    teamMsg:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare consectetur massa et ultrices. Morbi gravida mi sed ex ultrices consectetur. Proin tincidunt ligula sit amet scelerisque semper. Aenean at nulla et magna interdum scelerisque. Quisque eu ante gravida sem ultrices eleifend. Nam mollis, leo sed sagittis finibus, nulla metus aliquet nisl, sit amet pellentesque lectus magna a ligula. Duis a mauris sit amet lectus pharetra maximus. Proin semper mi id est blandit portti",
    header: "UI UX Design",
    subHeader:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: [
        "../../images/e-commerce-pic-1.jpg",
        "../../images/e-commerce-pic-2.jpg",
    ],
});
</script>

<template>
    <HomeBanner />
    <section class="products-ecommerce">
        <!-- Title&header -->
        <div
            class="d-flex justify-content-center text-center container flex-lg-row flex-column"
        >
            <div class="col-12 col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
                <div
                    class="d-flex justify-content-start text-center text-sm-start"
                >
                    <h1 class="title">{{ props.title }}</h1>
                </div>
                <div class="d-flex justify-content-start">
                    <p class="text text-center text-sm-start">
                        {{ props.teamMsg }}
                    </p>
                </div>
                <div
                    class="pb-lg-0 pb-md-5 pb-sm-5 pb-5 text-center text-sm-start"
                >
                    <button class="btn">Documentation</button>
                    <button class="btn last">Request Demo</button>
                </div>
            </div>
            <!-- center Image -->
            <div
                class="col-12 col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2 mb-5"
            >
                <div
                    class="h-100 w-100 d-flex justify-content-center align-items-center"
                >
                    <img :src="props.image[0]" class="bgImg" alt="project" />
                </div>
            </div>
        </div>
        <div class="space"></div>
        <div
            class="d-flex justify-content-center text-center container flex-lg-row flex-column"
        >
            <div class="col-12 col-lg-6 col-md-12 col-sm-12 order-2">
                <div
                    class="d-flex justify-content-start text-center text-sm-start"
                >
                    <h1 class="title">
                        The Smartest Mobile Applicaion Solution
                    </h1>
                </div>
                <div class="d-flex justify-content-start">
                    <p class="text text-center text-sm-start">
                        {{ props.teamMsg }}
                    </p>
                </div>
            </div>
            <!-- center Image -->
            <div class="col-12 col-lg-6 col-md-12 col-sm-12 order-1 mb-5">
                <div
                    class="h-100 w-100 d-flex justify-content-center align-items-center"
                >
                    <img :src="props.image[1]" class="bgImg" alt="project" />
                </div>
            </div>
        </div>
    </section>
</template>
