<template>
    <div class="d-flex flex-column layout-wrap">
        <Header />
        <div class="dynamic-layout flex-grow-1">
            <router-view></router-view>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
