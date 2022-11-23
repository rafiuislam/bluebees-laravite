<template>
    <section class="slider">
        <h1 class="title">Our Happy Customers</h1>
        <div class="container">
            <!-- Demo -->
            <Carousel
                id="thumbnails"
                :settings="settings"
                :wrapAround="true"
                :transition="500"
                :breakpoints="breakpoints"
                v-model="currentSlide"
                ref="carousel"
            >
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item" @click="slideTo(slide - 1)">
                        <div class="image">
                            <img
                                src="../../images/happy-client-icon.png"
                                alt=""
                            />
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>

            <Carousel
                id="gallery"
                :items-to-show="1"
                :transition="500"
                :wrap-around="true"
                v-model="currentSlide"
            >
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">
                        <div class="caption">
                            <p class="text-center">
                                {{ slide }} Sed tempor eget leo ut gravida.
                                Quisque congue sagittis purus, sit amet
                                frinfringilla sapien quis, tempor id,
                                scelerisque Sed tempor eget leo ut gravida.
                                Quisque congue sagittis purus, sit amet
                                frinfringilla sapien quis, tempor id,
                                scelerisque Sed tempor eget leo ut gravida.
                                Quisque congue sagittis purus,
                            </p>
                            <h5><span>Abdulla,</span> Client</h5>
                        </div>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </section>
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
        // carousel settings
        currentSlide: 0,
        settings: {
            itemsToShow: 1,
            snapAlign: "center",
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 3.5,
                snapAlign: "center",
            },
            // 1024 and up
            1024: {
                itemsToShow: 5,
                snapAlign: "center",
            },
        },
    }),
    methods: {
        slideTo(val) {
            this.currentSlide = val;
        },
    },
});
</script>
