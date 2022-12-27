<script setup>
import { reactive } from "vue";

const props = reactive({
    title: "Our Clients",
    image: [
        "../../images/01.png",
        "../../images/02.png",
        "../../images/03.png",
        "../../images/04.png",
        "../../images/05.png",
        "../../images/06.png",
        "../../images/07.png",
        "../../images/08.png",
        "../../images/09.png",
        "../../images/10.png",
        "../../images/11.png",
        "../../images/12.png",
    ],
});
</script>

<template>
    <section class="client">
        <div class="client-bg"></div>
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1 class="title">{{ props.title }}</h1>
            </div>

            <div class="client_container">
                <div
                    v-for="(i, index) in props.image.length"
                    :key="index"
                    class="col-md-2 col-sm-6 col-6"
                >
                    <img :src="props.image[index]" alt="client" />
                </div>
                <!-- <div class="col-md-2 col-sm-6 col-6">
                    <img src="../../images/02.png" alt="client" />
                </div>
                <div class="col-md-2 col-sm-6 col-6">
                    <img src="../../images/03.png" alt="client" />
                </div>
                <div class="col-md-2 col-sm-6 col-6">
                    <img src="../../images/04.png" alt="client" />
                </div>
                <div class="col-md-2 col-sm-6 col-6">
                    <img src="../../images/05.png" alt="client" />
                </div>
                <div class="col-md-2 col-sm-6 col-6">
                    <img src="../../images/06.png" alt="client" />
                </div>
                <div class="border col-md-2 col-sm-6 col-6">
                    <img src="../../images/07.png" alt="client" />
                </div>
                <div class="col-md-2 col-sm-6 col-6">
                    <img src="../../images/08.png" alt="client" />
                </div>
                <div class="col-md-2 col-sm-6 col-6">
                    <img src="../../images/09.png" alt="client" />
                </div>
                <div class="col-md-2 col-sm-6 col-6">
                    <img src="../../images/10.png" alt="client" />
                </div>
                <div class="col-md-2 col-sm-6 col-6">
                    <img
                        src="../../images/11.png"
                        alt="client"
                        style="width: 100%; height: 100%"
                    />
                </div>
                <div class="border col-md-2 col-sm-6 col-6">
                    <img src="../../images/12.png" alt="client" />
                </div> -->
            </div>
        </div>
    </section>
</template>
