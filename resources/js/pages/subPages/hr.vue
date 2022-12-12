<script setup>
import HomeBanner from "../../components/HomeBanner.vue";

import { reactive } from "vue";

const props = reactive({
    title: "The Best HR Software Solution",
    teamMsg:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare consectetur massa et ultrices. Morbi gravida mi sed ex ultrices consectetur. Proin tincidunt ligula sit amet scelerisque semper. Aenean at nulla et magna interdum scelerisque. Quisque eu ante gravida sem ultrices eleifend. Nam mollis, leo sed sagittis finibus, nulla metus aliquet nisl, sit amet pellentesque lectus magna a ligula. Duis a mauris sit amet lectus pharetra maximus. Proin semper mi id est blandit portti",
    header: "UI UX Design",
    subHeader:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "../../images/ui-ux-design-icon.png",
});
</script>
main-box d-flex justify-content-between align-items-center
<template>
    <HomeBanner />
    <section class="products-ecommerce">
        <!-- Title&header -->
        <div class="d-flex justify-content-center text-center container">
            <div class="col-6">
                <div class="d-flex justify-content-start">
                    <h1 class="title">{{ props.title }}</h1>
                </div>
                <div class="d-flex justify-content-start">
                    <p class="text text-start">
                        {{ props.teamMsg }}
                    </p>
                </div>
                <div class="pb-lg-0 pb-md-5 pb-sm-5 pb-5 text-start">
                    <button class="btn">Documentation</button>
                    <button class="btn last">Request Demo</button>
                </div>
            </div>
            <div class="col-6">
                <img
                    src="../../../images/ui-ux-design-icon.png"
                    class="image_project"
                    alt="project"
                />
            </div>
        </div>
        <div class="space"></div>
        <div class="d-flex justify-content-center text-center container">
            <div class="col-6 order-2">
                <div class="d-flex justify-content-start">
                    <h1 class="title">The Smartest HR Software Solution</h1>
                </div>
                <div class="d-flex justify-content-start">
                    <p class="text text-start">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur ornare consectetur massa et ultrices. Morbi
                        gravida mi sed ex ultrices consectetur. Proin tincidunt
                        ligula sit amet scelerisque semper. Aenean at nulla et
                        magna interdum scelerisque. Quisque eu ante gravida sem
                        ultrices eleifend. Nam mollis, leo sed sagittis finibus,
                        nulla metus aliquet nisl, sit amet pellentesque lectus
                        magna a ligula. Duis a mauris sit amet lectus pharetra
                        maximus. Proin semper mi id est blandit portti
                    </p>
                </div>
            </div>
            <div class="col-6 order-1">
                <img
                    src="../../../images/ui-ux-design-icon.png"
                    class="image_project"
                    alt="project"
                />
                <div class="" style="width: 200px"></div>
            </div>
        </div>
    </section>
</template>
