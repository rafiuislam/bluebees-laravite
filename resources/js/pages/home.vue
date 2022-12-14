<script setup>
import HomeBanner from "../components/HomeBanner.vue";
import HomeService from "../components/HomeService.vue";
import HomeProject from "../components/HomeProject.vue";
import HomeTeam from "../components/HomeTeam.vue";
import HomeClient from "../components/HomeClient.vue";
import HomeSlider from "../components/HomeSlider.vue";
</script>

<template>
    <HomeBanner />
    <div class="gap"></div>
    <!-- service section -->
    <HomeService />

    <!-- project section -->
    <HomeProject />

    <!-- Team section -->

    <HomeTeam />

    <!-- Client section -->
    <HomeClient />

    <!-- Review section -->
    <HomeSlider />
</template>
