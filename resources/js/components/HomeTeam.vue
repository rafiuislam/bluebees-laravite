<script setup>
import { reactive } from "vue";

const props = reactive({
    title: "Our Team",
    subHeader:
        " Sed tempor eget leo ut gravida. Quisque congue sagittis purus, sit amet frinfringilla sapien quis, tempor id, scelerisque  Sed tempor eget leo ut gravida. Quisque congue sagittis purus, sit amet frinfringilla sapien quis, tempor id, scelerisque  Sed tempor eget leo ut gravida. Quisque congue sagittis purus,",
    teamMsg:
        " We are a tech-based organization partnered with a Singaporean based company that is ready to assist customers from all over the world with state-of-the-art services they can rely on. We created The BlueBees.ai with the idea of making it easy for small and upcoming innovative businesses to access professional services they can rely on. Our commitment is to help these businesses grow and expand in rewarding ways.",
    image: "../../images/project-pic-1.jpg",
    teamImg: "../../images/team.png",
    blueImg: "/images/info.png",
});
</script>

<template>
    <section class="team">
        <div class="team-right-bg"></div>
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1 class="title">{{ props.title }}</h1>
            </div>

            <div class="d-flex justify-content-center">
                <p>
                    {{ props.subHeader }}
                </p>
            </div>

            <div class="text-center team-work">
                <router-link :to="{ name: 'Team' }">
                    <button class="btn">See More Our Team</button>
                </router-link>
            </div>
            <div class="team-img text-center">
                <img class="img-fluid" :src="props.teamImg" alt="" />
            </div>

            <div class="info-wrap">
                <div class="info-box">
                    <div class="row">
                        <div class="col-md-7">
                            <div
                                class="info-text h-100 d-flex align-items-center"
                            >
                                <div class="info">
                                    <h2>BlueBees ai</h2>
                                    <p>
                                        {{ props.teamMsg }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 img-container">
                            <img
                                class="img-fluid img-icon"
                                :src="props.blueImg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
