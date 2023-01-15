<script setup>
import HomeBanner from "../../components/HomeBanner.vue";

import { reactive, computed } from "vue";

const props = reactive({
    title: "Tours To Visit Saint Martin",
    teamMsg:
        "Sed lobortis tempor erat vitae efficitur. Sed interdum sed neque nec gravida. In vestibulum vitae neque quis ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam massa, sagittis sit amet sem sit amet, facilisis rutrum nunc. consectetur adipiscing elit. Duis quam massa, sagittis sit amet sem sit amet, facilisis rutrum nunc. ",
    subHeader:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare consectetur massa et ultrices. Morbi gravida mi sed ex ultrices consectetur. Proin tincidunt ligula sit amet scelerisque semper. Aenean at nulla et magna interdum scelerisque. Quisque eu ante gravida sem ultrices eleifend. Nam mollis, leo sed sagittis finibus, nulla metus aliquet nisl, sit amet pellentesque lectus magna a ligula. Duis a mauris sit amet lectus pharetra maximus. Proin semper mi id est blandit porttitor. Sed consequat quam eleifend leo varius, at lobortis urna accumsan. Donec dignissim tempor mollis. Fusce egestas sagittis augue in vulputate. Etiam sit amet condimentum justo. Sed mollis rhoncus dolor, nec eleifend neque pretium quis. <br/><br/> Nulla placerat, lectus facilisis convallis porta, lorem purus placerat eros, ac egestas nulla turpis vitae neque. In hac habitasse platea dictumst. Nullam euismod laoreet ligula, et consectetur ligula gravida vitae. Maecenas congue libero vel facilisis vestibulum. Proin eu dui ac mi vulputate eleifend. Etiam at egestas ligula, ut gravida ligula. Maecenas vitae feugiat elit. Donec congue dui in lorem malesuada condimentum.<br/><br/> Maecenas ac urna felis. Cras dapibus pharetra est nec blandit. Nam nec semper felis. Vestibulum in vulputate ipsum. Morbi non odio faucibus, suscipit eros nec, laoreet dolor. Morbi quis diam fringilla, efficitur lorem a, luctus massa. Duis leo libero, interdum et sapien ac, eleifend posuere orci. Nullam ut ex id urna tincidunt semper sed et dui.",
    // image: "../../images/project-pic-1.jpg",
    image: [
        "../../images/g27.JPG",
        "../../images/g26.JPG",
        "../../images/g13.JPG",
        "../../images/g24.JPG",
        "../../images/g15.JPG",
        "../../images/g26.JPG",
        "../../images/g17.JPG",
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
    <section class="project-section gallery-details">
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1 class="title">{{ props.title }}</h1>
            </div>
            <div class="d-flex justify-content-center text-center">
                <p>
                    {{ props.teamMsg }}
                </p>
            </div>
            <div class="row">
                <div
                    class="col-lg-2 col-md-4 col-sm-6 col-12 text-center"
                    v-for="(i, index) in props.image"
                    :key="index"
                >
                    <div class="project-item">
                        <div class="project-item-box">
                            <img class="image_project" :src="i" alt="People" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
