<script setup>
import HomeBanner from "../components/HomeBanner.vue";
import HomeProduct from "../components/HomeProduct.vue";
import HomeProject from "../components/HomeProject.vue";
import HomeService from "../components/HomeService.vue";
import HomeTeam from "../components/HomeTeam.vue";
import HomeClient from "../components/HomeClient.vue";
import HomeSlider from "../components/HomeSlider.vue";
</script>

<template>
    <HomeBanner />
    <div class="gap"></div>
    <!-- product section -->
    <HomeProduct />

    <!-- project section -->
    <HomeProject />

    <!-- service section -->
    <HomeService />

    <!-- Team section -->

    <HomeTeam />

    <!-- Client section -->
    <HomeClient />

    <!-- Review section -->
    <HomeSlider />
</template>
