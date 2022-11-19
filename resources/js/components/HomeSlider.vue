<template>
    <!-- <section class="slider">
        <h1 class="title">Our Happy Customers</h1>
        <div class="slides">
            <div class="slide col-md-12">
                <div class="image">
                    <img src="../../images/happy-client-icon.png" alt="" />
                </div>
                <div class="content text-center">
                    <div class="slide-text">
                        Sed tempor eget leo ut gravida. Quisque congue sagittis
                        purus, sit amet frinfringilla sapien quis, tempor id,
                        scelerisque Sed tempor eget leo ut gravida. Quisque
                        congue sagittis purus, sit amet frinfringilla sapien
                        quis, tempor id, scelerisque Sed tempor eget leo ut
                        gravida. Quisque congue sagittis purus,
                    </div>
                    <p>
                        <span style="color: #00abe5" class="text-color">
                            Abdulla,
                        </span>
                        Client
                    </p>
                </div>
            </div>
            <div class="slide col-md-12">
                <div class="image">
                    <img src="../../images/happy-client-icon.png" alt="" />
                </div>
                <div class="content text-center">
                    <div class="slide-text">
                        Sed tempor eget leo ut gravida. Quisque congue sagittis
                        purus, sit amet frinfringilla sapien quis, tempor id,
                        scelerisque Sed tempor eget leo ut gravida. Quisque
                        congue sagittis purus, sit amet frinfringilla sapien
                        quis, tempor id, scelerisque Sed tempor eget leo ut
                        gravida. Quisque congue sagittis purus,
                    </div>
                    <p>
                        <span style="color: #00abe5" class="text-color">
                            Abdulla,
                        </span>
                        Client
                    </p>
                </div>
            </div>
            <div class="slide col-md-12">
                <div class="image">
                    <img src="../../images/happy-client-icon.png" alt="" />
                </div>
                <div class="content text-center">
                    <div class="slide-text">
                        Sed tempor eget leo ut gravida. Quisque congue sagittis
                        purus, sit amet frinfringilla sapien quis, tempor id,
                        scelerisque Sed tempor eget leo ut gravida. Quisque
                        congue sagittis purus, sit amet frinfringilla sapien
                        quis, tempor id, scelerisque Sed tempor eget leo ut
                        gravida. Quisque congue sagittis purus,
                    </div>
                    <p>
                        <span style="color: #00abe5" class="text-color">
                            Abdulla,
                        </span>
                        Client
                    </p>
                </div>
            </div>
            <div class="slide col-md-12">
                <div class="image">
                    <img src="../../images/happy-client-icon.png" alt="" />
                </div>
                <div class="content text-center">
                    <div class="slide-text">
                        Sed tempor eget leo ut gravida. Quisque congue sagittis
                        purus, sit amet frinfringilla sapien quis, tempor id,
                        scelerisque Sed tempor eget leo ut gravida. Quisque
                        congue sagittis purus, sit amet frinfringilla sapien
                        quis, tempor id, scelerisque Sed tempor eget leo ut
                        gravida. Quisque congue sagittis purus,
                    </div>
                    <p>
                        <span style="color: #00abe5" class="text-color">
                            Abdulla,
                        </span>
                        Client
                    </p>
                </div>
            </div>
            <div class="slide col-md-12">
                <div class="image">
                    <img src="../../images/happy-client-icon.png" alt="" />
                </div>
                <div class="content text-center">
                    <div class="slide-text">
                        Sed tempor eget leo ut gravida. Quisque congue sagittis
                        purus, sit amet frinfringilla sapien quis, tempor id,
                        scelerisque Sed tempor eget leo ut gravida. Quisque
                        congue sagittis purus, sit amet frinfringilla sapien
                        quis, tempor id, scelerisque Sed tempor eget leo ut
                        gravida. Quisque congue sagittis purus,
                    </div>
                    <p>
                        <span style="color: #00abe5" class="text-color">
                            Abdulla,
                        </span>
                        Client
                    </p>
                </div>
            </div>
            <div class="slide col-md-12">
                <div class="image">
                    <img src="../../images/happy-client-icon.png" alt="" />
                </div>
                <div class="content text-center">
                    <div class="slide-text">
                        Sed tempor eget leo ut gravida. Quisque congue sagittis
                        purus, sit amet frinfringilla sapien quis, tempor id,
                        scelerisque Sed tempor eget leo ut gravida. Quisque
                        congue sagittis purus, sit amet frinfringilla sapien
                        quis, tempor id, scelerisque Sed tempor eget leo ut
                        gravida. Quisque congue sagittis purus,
                    </div>
                    <p>
                        <span style="color: #00abe5" class="text-color">
                            Abdulla,
                        </span>
                        Client
                    </p>
                </div>
            </div>
        </div>
    </section> -->
    <section class="slider">
        <h1 class="title">Our Happy Customers</h1>
        <div class="container">
            <Carousel
                :settings="settings"
                :wrapAround="true"
                :transition="500"
                :breakpoints="breakpoints"
            >
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">
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
});
</script>

<style scoped>
.carousel__item {
    width: auto;
    height: auto;
}

.carousel__slide {
    padding: 10px 0px;
}

.carousel__viewport {
    perspective: 2000px;
    width: 100%;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.5;
    transform: rotateY(-10deg) scale(0.5);
}

.carousel__slide--prev {
    opacity: 0.5;
    transform: rotateY(-10deg) scale(0.7);
}

.carousel__slide--next {
    opacity: 0.5;
    transform: rotateY(10deg) scale(0.7);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>
