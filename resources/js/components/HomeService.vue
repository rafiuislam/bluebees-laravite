<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "Breakpoints",
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        props: {
            title: "Our Services",
            subHeader:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            image: [
                "../../images/ui-ux-design-icon.png",
                "../../images/web-application-icon.png",
                "../../images/consultancy-icon.png",
                "../../images/Mobile-Application.png",
                "../../images/consultancy-icon.png",
                "../../images/e-commerce.png",
                "../../images/erp-soft.png",
                "../../images/hr-soft.png",
                "../../images/pos.png",
            ],
            header: [
                "UI UX Design ",
                "Web Application ",
                "Custom Software ",
                "Mobile Application ",
                "Consultancy",
                "E-Commerce",
                "ERP Software",
                "HR Software",
                "Point Of Sales",
            ],
        },
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: "center",
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 2,
                snapAlign: "start",
            },
            // 1024 and up
            1024: {
                itemsToShow: 4,
                snapAlign: "start",
            },
        },
    }),
});
</script>

<template>
    <div class="container">
        <div class="box-container">
            <div class="d-flex justify-content-center">
                <h1 class="title">{{ props.title }}</h1>
            </div>
            <Carousel :settings="settings" :breakpoints="breakpoints">
                <Slide
                    v-for="(slide, index) in props.header.length"
                    :key="slide"
                >
                    <div class="carousel__item">
                        <div class="service-container">
                            <div class="">
                                <div class="">
                                    <div class="service-item text-center">
                                        <div class="service-icon">
                                            <img
                                                :src="props.image[index]"
                                                alt=""
                                                class="img-fluid"
                                                width="150%"
                                                height="150%"
                                            />
                                        </div>
                                        <h3>{{ props.header[index] }}</h3>
                                        <p>
                                            {{ props.subHeader }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>
</template>
