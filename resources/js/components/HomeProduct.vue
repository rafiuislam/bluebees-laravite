<script setup>
import { reactive } from "vue";

const props = reactive({
    title: "Our Products",

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
});
</script>

<template>
    <section class="product">
        <!-- Title&header -->
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1 class="title">{{ props.title }}</h1>
            </div>
        </div>

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
                        <router-link :to="{ name: props.routes[index] }">
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
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
