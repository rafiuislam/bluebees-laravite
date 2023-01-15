<script setup>
import HomeBanner from "../../components/HomeBanner.vue";

import { reactive, ref, onMounted, watchEffect, nextTick } from "vue";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

const images = ref([
    "../../images/g22.JPG",
    "../../images/g21.JPG",
    "../../images/g23.JPG",
    "../../images/g24.JPG",
]);
let index = ref(0);

const props = reactive({
    title: "Football Tournament",
    teamMsg:
        "Sed lobortis tempor erat vitae efficitur. Sed interdum sed neque nec gravida. In vestibulum vitae neque quis ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam massa, sagittis sit amet sem sit amet, facilisis rutrum nunc. consectetur adipiscing elit. Duis quam massa, sagittis sit amet sem sit amet, facilisis rutrum nunc. ",
    subHeader:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare consectetur massa et ultrices. Morbi gravida mi sed ex ultrices consectetur. Proin tincidunt ligula sit amet scelerisque semper. Aenean at nulla et magna interdum scelerisque. Quisque eu ante gravida sem ultrices eleifend. Nam mollis, leo sed sagittis finibus, nulla metus aliquet nisl, sit amet pellentesque lectus magna a ligula. Duis a mauris sit amet lectus pharetra maximus. Proin semper mi id est blandit porttitor. Sed consequat quam eleifend leo varius, at lobortis urna accumsan. Donec dignissim tempor mollis. Fusce egestas sagittis augue in vulputate. Etiam sit amet condimentum justo. Sed mollis rhoncus dolor, nec eleifend neque pretium quis. <br/><br/> Nulla placerat, lectus facilisis convallis porta, lorem purus placerat eros, ac egestas nulla turpis vitae neque. In hac habitasse platea dictumst. Nullam euismod laoreet ligula, et consectetur ligula gravida vitae. Maecenas congue libero vel facilisis vestibulum. Proin eu dui ac mi vulputate eleifend. Etiam at egestas ligula, ut gravida ligula. Maecenas vitae feugiat elit. Donec congue dui in lorem malesuada condimentum.<br/><br/> Maecenas ac urna felis. Cras dapibus pharetra est nec blandit. Nam nec semper felis. Vestibulum in vulputate ipsum. Morbi non odio faucibus, suscipit eros nec, laoreet dolor. Morbi quis diam fringilla, efficitur lorem a, luctus massa. Duis leo libero, interdum et sapien ac, eleifend posuere orci. Nullam ut ex id urna tincidunt semper sed et dui.",
    // image: "../../images/project-pic-1.jpg",
    image: [
        "../../images/g22.JPG",
        "../../images/g21.JPG",
        "../../images/g23.JPG",
        "../../images/g24.JPG",
        "../../images/g25.JPG",
        "../../images/g26.JPG",
        "../../images/g27.JPG",
        "../../images/g28.JPG",
        "../../images/g25.JPG",
        "../../images/g26.JPG",
        "../../images/g27.JPG",
        "../../images/g28.JPG",
    ],
    imageTitle: [
        "Football Tournament",
        "Football Match",
        "Tours To Visit Sylhet",
        "Tours To Visit Saint Martin",
        "Office Functions",
        "Birthday Parties",
        "Inhouse Events",
        "Award Ceremony",
    ],
    bannerImg: "../../images/team-hero-banner.jpg",
});
</script>

<template>
    <HomeBanner />
    <!-- Route Banner -->
    <img class="img-fluid bannerimg" :src="props.bannerImg" alt="" />
    <div class="d-flex justify-content-center route">
        <p class="routeTitle">Gallery</p>
    </div>
    <!-- project section -->

    <div>
        <CoolLightBox
            v-if="index !== null"
            :images="images"
            :index="index?.value"
            @close="index = null"
        >
        </CoolLightBox>

        <div class="images-wrapper">
            <div
                href="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="
                    index.value === null
                        ? (index.value = imageIndex)
                        : (index.value = imageIndex)
                "
            >
                <img :src="image" alt="" />
            </div>
        </div>
    </div>
</template>
