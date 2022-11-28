<template>
    <div class="container">
        <h1 class="title">{{ props.title }}</h1>
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">
                    <div class="service-container">
                        <div class="">
                            <div class="">
                                <div class="service-item text-center">
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
                        </div>
                    </div>
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

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
            image: "../../images/ui-ux-design-icon.png",
            header: "UI UX Design",
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
