<script setup>
import { reactive } from "vue";

const props = reactive({
    title: "Our Team",
    subHeader:
        " Sed tempor eget leo ut gravida. Quisque congue sagittis purus, sit amet frinfringilla sapien quis, tempor id, scelerisque  Sed tempor eget leo ut gravida. Quisque congue sagittis purus, sit amet frinfringilla sapien quis, tempor id, scelerisque  Sed tempor eget leo ut gravida. Quisque congue sagittis purus, ",
    teamMsg:
        " We are a tech-based organization partnered with a Singaporean based company that is ready to assist customers from all over the world with state-of-the-art services they can rely on. We created The BlueBees.ai with the idea of making it easy for small and upcoming innovative businesses to access professional services they can rely on. Our commitment is to help these businesses grow and expand in rewarding ways.",
    banner: "../../images/main-banner-home.jpg",
});
</script>

<template>
    <div class="home-banner">
        <img :src="props.banner" />
        <div class="banner-caption">
            <div class="container d-flex">
                <h2>
                    BlueBees AI Your Trusted Software
                    <a class="under"> Development </a>
                    Company
                </h2>
            </div>
        </div>
    </div>
</template>
