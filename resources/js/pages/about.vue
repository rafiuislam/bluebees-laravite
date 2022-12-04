<script setup>
import HomeBanner from "../components/HomeBanner.vue";
import HomeClient from "../components/HomeClient.vue";
import HomeSlider from "../components/HomeSlider.vue";

import { reactive } from "vue";

const props = reactive({
    title: "About Us",
    teamMsg:
        " Sed tempor eget leo ut gravida. Quisque congue sagittis purus, sit amet frinfringilla sapien quis, tempor id, scelerisque  Sed tempor eget leo ut gravida. Quisque congue sagittis purus, sit amet frinfringilla sapien quis, tempor id, scelerisque  Sed tempor eget leo ut gravida. Quisque congue sagittis purus, ",
    subHeader:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare consectetur massa et ultrices. Morbi gravida mi sed ex ultrices consectetur. Proin tincidunt ligula sit amet scelerisque semper. Aenean at nulla et magna interdum scelerisque. Quisque eu ante gravida sem ultrices eleifend. Nam mollis, leo sed sagittis finibus, nulla metus aliquet nisl, sit amet pellentesque lectus magna a ligula. Duis a mauris sit amet lectus pharetra maximus. Proin semper mi id est blandit porttitor. Sed consequat quam eleifend leo varius, at lobortis urna accumsan. Donec dignissim tempor mollis. Fusce egestas sagittis augue in vulputate. Etiam sit amet condimentum justo. Sed mollis rhoncus dolor, nec eleifend neque pretium quis. <br/><br/> Nulla placerat, lectus facilisis convallis porta, lorem purus placerat eros, ac egestas nulla turpis vitae neque. In hac habitasse platea dictumst. Nullam euismod laoreet ligula, et consectetur ligula gravida vitae. Maecenas congue libero vel facilisis vestibulum. Proin eu dui ac mi vulputate eleifend. Etiam at egestas ligula, ut gravida ligula. Maecenas vitae feugiat elit. Donec congue dui in lorem malesuada condimentum.<br/><br/> Maecenas ac urna felis. Cras dapibus pharetra est nec blandit. Nam nec semper felis. Vestibulum in vulputate ipsum. Morbi non odio faucibus, suscipit eros nec, laoreet dolor. Morbi quis diam fringilla, efficitur lorem a, luctus massa. Duis leo libero, interdum et sapien ac, eleifend posuere orci. Nullam ut ex id urna tincidunt semper sed et dui.",
    image: "../../images/project-pic-1.jpg",
});
</script>

<template>
    <HomeBanner />

    <!-- About Us -->
    <section class="about">
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1 class="title">{{ props.title }}</h1>
            </div>
            <div class="d-flex justify-content-center">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ornare consectetur massa et ultrices. Morbi
                    gravida mi sed ex ultrices consectetur. Proin tincidunt
                    ligula sit amet scelerisque semper. Aenean at nulla et magna
                    interdum scelerisque. Quisque eu ante gravida sem ultrices
                    eleifend. Nam mollis, leo sed sagittis finibus, nulla metus
                    aliquet nisl, sit amet pellentesque lectus magna a ligula.
                    Duis a mauris sit amet lectus pharetra maximus. Proin semper
                    mi id est blandit porttitor. Sed consequat quam eleifend leo
                    varius, at lobortis urna accumsan. Donec dignissim tempor
                    mollis. Fusce egestas sagittis augue in vulputate. Etiam sit
                    amet condimentum justo. Sed mollis rhoncus dolor, nec
                    eleifend neque pretium quis. <br /><br />
                    Nulla placerat, lectus facilisis convallis porta, lorem
                    purus placerat eros, ac egestas nulla turpis vitae neque. In
                    hac habitasse platea dictumst. Nullam euismod laoreet
                    ligula, et consectetur ligula gravida vitae. Maecenas congue
                    libero vel facilisis vestibulum. Proin eu dui ac mi
                    vulputate eleifend. Etiam at egestas ligula, ut gravida
                    ligula. Maecenas vitae feugiat elit. Donec congue dui in
                    lorem malesuada condimentum.<br /><br />
                    Maecenas ac urna felis. Cras dapibus pharetra est nec
                    blandit. Nam nec semper felis. Vestibulum in vulputate
                    ipsum. Morbi non odio faucibus, suscipit eros nec, laoreet
                    dolor. Morbi quis diam fringilla, efficitur lorem a, luctus
                    massa. Duis leo libero, interdum et sapien ac, eleifend
                    posuere orci. Nullam ut ex id urna tincidunt semper sed et
                    dui.
                </p>
            </div>
            <div class="team-img text-center">
                <img class="img-fluid" src="../../images/img_wide.jpg" alt="" />
            </div>
            <div class="d-flex justify-content-center">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ornare consectetur massa et ultrices. Morbi
                    gravida mi sed ex ultrices consectetur. Proin tincidunt
                    ligula sit amet scelerisque semper. Aenean at nulla et magna
                    interdum scelerisque. Quisque eu ante gravida sem ultrices
                    eleifend. Nam mollis, leo sed sagittis finibus, nulla metus
                    aliquet nisl, sit amet pellentesque lectus magna a ligula.
                    Duis a mauris sit amet lectus pharetra maximus. Proin semper
                    mi id est blandit porttitor. Sed consequat quam eleifend leo
                    varius, at lobortis urna accumsan. Donec dignissim tempor
                    mollis. Fusce egestas sagittis augue in vulputate. Etiam sit
                    amet condimentum justo. Sed mollis rhoncus dolor, nec
                    eleifend neque pretium quis.
                    <br /><br />
                    Nulla placerat, lectus facilisis convallis porta, lorem
                    purus placerat eros, ac egestas nulla turpis vitae neque. In
                    hac habitasse platea dictumst. Nullam euismod laoreet
                    ligula, et consectetur ligula gravida vitae. Maecenas congue
                    libero vel facilisis vestibulum. Proin eu dui ac mi
                    vulputate eleifend. Etiam at egestas ligula, ut gravida
                    ligula. Maecenas vitae feugiat elit. Donec congue dui in
                    lorem malesuada condimentum.
                    <br /><br />
                    Maecenas ac urna felis. Cras dapibus pharetra est nec
                    blandit. Nam nec semper felis. Vestibulum in vulputate
                    ipsum. Morbi non odio faucibus, suscipit eros nec, laoreet
                    dolor. Morbi quis diam fringilla, efficitur lorem a, luctus
                    massa. Duis leo libero, interdum et sapien ac, eleifend
                    posuere orci. Nullam ut ex id urna tincidunt semper sed et
                    dui.
                </p>
            </div>
        </div>
    </section>

    <!-- Client section -->
    <HomeClient />

    <!-- Review section -->
    <HomeSlider />
</template>
