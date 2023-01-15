<script setup>
import HomeBanner from "../components/HomeBanner.vue";
import HomeClient from "../components/HomeClient.vue";
import HomeSlider from "../components/HomeSlider.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { reactive } from "vue";

const props = reactive({
    title: "Career",
    positions: [
        "UI/UX Designer",
        "Sr. Software Engineer",
        "Jr. Software Engineer",
        "Front End Developer",
        "Jr. Front End Developer",
        "Manager (Operation)",
    ],
    teamMsg:
        " Sed tempor eget leo ut gravida. Quisque congue sagittis purus, sit amet frinfringilla sapien quis, tempor id, scelerisque  Sed tempor eget leo ut gravida. Quisque congue sagittis purus, sit amet frinfringilla sapien quis, tempor id, scelerisque  Sed tempor eget leo ut gravida. Quisque congue sagittis purus, ",

    image: "../../images/info.png",
    bannerImg: "../../images/about-banner.jpg",
    reasonQ: [
        "Background of the Organization",
        "Working Environment",
        "Career Progression",
        "Employee-Friendly Policy",
    ],
    reasonA: [
        "“BlueBees AI”, established in the year 2019, has been a leading entity in various fields of business for over 4 Years.The continued success of BlueBees AI is credited to the undying dedication of the owners, professional management and staff. The BlueBees AI draw strength from collective efforts of employees backed by the companies’ policies and service rules that uphold our business ethics and organizational culture.",
        "A trendsetter in every sen se, the management of BlueBees AI Companies promotes teamwork, creativity, individuality, transparency, and vibrancy in the office  environment. The multi-talented management body is always keen to develop knowledge-base and skills in the employees. We proudly proclaim ‘work is fun’!",
        "The work-environment and working opportunities that exist in BlueBees AI Companies empowered by corporate culture will ignite your passion, which in turn will help you to grow along with the organizational growth. The multi talented management body is always positive to develop your knowledge and skills to enable your growth in the career path aligning with the business.",
        "We have competitive pay scale, 2 festival bonuses and Earn leave facilities, annual and periodic performance review and increment, critical illness coverage and all other standard practices that are expected in a top class organization. We have accordingly developed our HR policies and procedures as a recipe for long term association of the employees that starts from fair and impartial recruitment and selection, to development and retention processes.",
    ],
});
</script>

<template>
    <HomeBanner />
    <!-- Route Banner -->

    <img class="img-fluid bannerimg" :src="props.bannerImg" alt="" />
    <div class="d-flex justify-content-center route">
        <p class="routeTitle">Career</p>
    </div>

    <!-- About Us -->
    <section class="career-page">
        <div class="container">
            <div class="row text-center loco">
                <div
                    v-for="(i, index) in props.positions"
                    :key="index"
                    class="col-md pb-5 pb-md-4 mb-3 position-relative"
                >
                    <span class="circle">
                        <i
                            class="fa fa-briefcase blue text-center"
                            aria-hidden="true"
                        ></i>
                        <!-- <font-awesome-icon icon="fa-light fa-briefcase" /> -->
                    </span>

                    <button
                        type="submit"
                        class="col-lg-6 col-md-6 col-sm-12 btn"
                    >
                        <a href="">
                            <h1 class="text-center">
                                {{ i }}
                            </h1>
                        </a>
                        <a href="">
                            <p class="text-center">Vacancy: {{ index }}</p>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section class="reg">
        <div class="client-bg"></div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
                <div class="info-text h-100 d-flex align-items-center">
                    <div class="info">
                        <h1>
                            Register for future job <br />
                            opportunities
                        </h1>
                        <p>
                            We keep up a library of qualified applicants who
                            might be directly for a situation at PATH later on.
                        </p>
                        <div>
                            <button
                                class="col-lg-6 col-md-6 col-sm-12 send-btn text-center"
                            >
                                Submit Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="col-lg-6 col-md-6 col-12 pt-2 img-container text-center d-flex align-items-center"
            >
                <img class="img-fluid" :src="props.image" alt="" />
            </div>
        </div>
    </section>
    <section class="reg">
        <div class="row">
            <div class="info">
                <h1>Why Should You Join BlueBees AI Companies?</h1>
            </div>

            <div
                class="row info d-flex align-items-start pb-5"
                v-for="(i, index) in props.reasonQ"
                :key="index"
            >
                <div class="col-lg-3 col-md-3 col-12">
                    <h1 class="light">{{ i }}</h1>
                </div>
                <div class="col-lg-8 col-md-8 col-12">
                    {{ props.reasonA[index] }}
                </div>
            </div>
        </div>
    </section>

    <!-- Register Banner -->
    <!-- Register Reasons -->
</template>
