<script setup>
import HomeBanner from "../components/HomeBanner.vue";

import { reactive } from "vue";

const props = reactive({
    title: "What We Can Do For You",
    teamMsg:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare consectetur massa et ultrices. Morbi gravida mi sed ex ultrices consectetur. Proin tincidunt ligula sit amet scelerisque semper. Aenean at nulla et magna interdum scelerisque. Quisque eu ante gravida sem ultrices eleifend. Nam mollis, leo sed sagittis finibus, nulla metus aliquet nisl, sit amet pellentesque lectus magna a ligula. Duis a mauris sit amet lectus pharetra maximus. Proin semper mi id est blandit portti",
    header: ["E-Commerce", "ERP Software", "HR Software", "Point Of Sales"],
    subHeader: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    ],
    image: [
        "../../images/e-commerce.png",
        "../../images/erp-soft.png",
        "../../images/hr-soft.png",
        "../../images/pos.png",
    ],
    routes: ["Ecommerce", "erp", "hr", "pos"],
    bannerImg: "../../images/product-inner-banner.jpg",
});
</script>

<template>
    <HomeBanner />
    <!-- Route Banner -->
    <img class="img-fluid bannerimg" :src="props.bannerImg" alt="" />
    <div class="d-flex justify-content-center route">
        <p class="routeTitle">Products</p>
    </div>
    <section class="products-page">
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
        <div class="products-bg"></div>
        <!-- Services -->
        <div class="container">
            <div class="row text-center">
                <div
                    v-for="(i, index) in props.header.length"
                    :key="index"
                    class="col-lg-3 col-md-6 col-12 text-center"
                >
                    <div
                        class="products-item text-center justify-content-center"
                    >
                        <div class="products-icon">
                            <img
                                :src="props.image[index]"
                                alt="products"
                                class="img-fluid"
                            />
                        </div>
                        <h3>{{ props.header[index] }}</h3>
                        <p>
                            {{ props.subHeader[index] }}
                        </p>
                        <router-link :to="{ name: props.routes[index] }">
                            <div
                                class="text-center pb-lg-0 pb-md-5 pb-sm-5 pb-5"
                            >
                                <button class="btn">Veiw More</button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
