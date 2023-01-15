<script setup>
import { reactive } from "vue";

const props = reactive({
    title: "Our Projects",
    subHeader:
        "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse amet, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    image: [
        "../../images/project-pic-01.jpg",
        "../../images/project-pic-02.jpg",
        "../../images/project-pic-03.jpg",
        "../../images/project-pic-04.jpg",
        "../../images/project-pic-05.jpg",
    ],
    websiteUrl: [
        "https://nilam.xyz/",
        "https://trux24.com/",
        "https://xirooms.com/",
        "https://xceramics.com/",
        "https://www.knittersland.com/",
    ],
});
</script>

<template>
    <section class="project-section">
        <div class="project-left-bg"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="project-item">
                        <div class="project-item-box first">
                            <h1>{{ props.title }}</h1>
                            <p>
                                {{ props.subHeader }}
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    v-for="(i, index) in props.image.length"
                    :key="index"
                    class="col-lg-4 col-md-6 col-12"
                >
                    <div class="project-item">
                        <div class="project-item-box">
                            <a :href="props.websiteUrl[index]" target="_blank">
                                <img
                                    :src="props.image[index]"
                                    class="image_project"
                                    alt="project"
                                />
                            </a>
                            <div
                                v-if="
                                    props.image[index] ==
                                    props.image[props.image.length - 1]
                                "
                                class="text-center project-work"
                            >
                                <router-link :to="{ name: 'Project' }">
                                    <button class="btn">Veiw More</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
