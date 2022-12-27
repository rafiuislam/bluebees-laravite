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
});
</script>

<template>
    <HomeBanner />
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
                                alt="ui-ux"
                                class="img-fluid"
                            />
                        </div>
                        <h3>{{ props.header[index] }}</h3>
                        <p>
                            {{ props.subHeader[index] }}
                        </p>
                        <div class="text-center pb-lg-0 pb-md-5 pb-sm-5 pb-5">
                            <button class="btn">Veiw More</button>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-3 col-md-6 col-12">
                    <div
                        class="products-item text-center justify-content-center"
                    >
                        <div class="products-icon">
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
                        <div class="text-center pb-lg-0 pb-md-5 pb-sm-5 pb-5">
                            <button class="btn">Veiw More</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div
                        class="products-item text-center justify-content-center"
                    >
                        <div class="products-icon">
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
                        <div class="text-center pb-lg-0 pb-md-5 pb-sm-5 pb-5">
                            <button class="btn">Veiw More</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div
                        class="products-item text-center justify-content-center"
                    >
                        <div class="products-icon">
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
                        <div class="text-center pb-lg-0 pb-md-5 pb-sm-5 pb-5">
                            <button class="btn">Veiw More</button>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>
