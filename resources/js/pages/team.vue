<script setup>
import HomeBanner from "../components/HomeBanner.vue";

import { reactive } from "vue";

const props = reactive({
    title: "Our Team",
    name: "Imdadul Haque Mipel",
    subTitle: "Manager",
    header: "Sed lobortis tempor erat vitae efficitur. Sed interdum sed neque nec gravida. In vestibulum vitae neque quis ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam massa, sagittis sit amet sem sit amet, facilisis rutrum nunc. consectetur adipiscing elit. Duis quam massa, sagittis sit amet sem sit amet, facilisis rutrum nunc. ",
    subHeader:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare consectetur massa et ultrices. Morbi gravida mi sed ex ultrices consectetur. Proin tincidunt ligula sit amet scelerisque semper. Aenean at nulla et magna interdum scelerisque. Quisque eu ante gravida sem ultrices eleifend. Nam mollis, leo sed sagittis finibus, nulla metus aliquet nisl, sit amet pellentesque lectus magna a ligula. Duis a mauris sit amet lectus pharetra maximus. Proin semper mi id est blandit porttitor. Sed consequat quam eleifend leo varius, at lobortis urna accumsan. Donec dignissim tempor mollis. Fusce egestas sagittis augue in vulputate. Etiam sit amet condimentum justo. Sed mollis rhoncus dolor, nec eleifend neque pretium quis. <br/><br/> Nulla placerat, lectus facilisis convallis porta, lorem purus placerat eros, ac egestas nulla turpis vitae neque. In hac habitasse platea dictumst. Nullam euismod laoreet ligula, et consectetur ligula gravida vitae. Maecenas congue libero vel facilisis vestibulum. Proin eu dui ac mi vulputate eleifend. Etiam at egestas ligula, ut gravida ligula. Maecenas vitae feugiat elit. Donec congue dui in lorem malesuada condimentum.<br/><br/> Maecenas ac urna felis. Cras dapibus pharetra est nec blandit. Nam nec semper felis. Vestibulum in vulputate ipsum. Morbi non odio faucibus, suscipit eros nec, laoreet dolor. Morbi quis diam fringilla, efficitur lorem a, luctus massa. Duis leo libero, interdum et sapien ac, eleifend posuere orci. Nullam ut ex id urna tincidunt semper sed et dui.",
    image: "../../images/project-pic-1.jpg",
});
</script>

<template>
    <HomeBanner />

    <!-- project section -->
    <section class="project-section team-page">
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1 class="title">{{ props.title }}</h1>
            </div>
            <div class="d-flex justify-content-center">
                <p>
                    {{ props.header }}
                </p>
            </div>
            <!-- employer card -->
            <div class="row sec">
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="project-item-box">
                        <img
                            src="../../images/project-pic-3.jpg"
                            class="img-fluid"
                            alt="project"
                        />
                    </div>
                </div>
                <div class="col-lg-9 col-md-6 col-12">
                    <div class="d-flex justify-content-start">
                        <span class="name left">Mahin Mazher</span>
                    </div>
                    <div class="d-flex justify-content-start">
                        <span class="subTitle left">
                            Founder & Managing Director
                        </span>
                    </div>
                    <div class="d-flex justify-content-start">
                        <span class="subTitle left desc">
                            In dapibus blandit turpis porttitor ultrices. Fusce
                            tempor turpis eu magna placerat, sed porttitor arcu
                            suscipit. Quisque rhoncus, lacus tincidunt vehicula
                            varius, tellus neque ullamcorper nibh, eget feugiat
                            augue felis ut metus. Praesent interdum molestie
                            eros id ullamcorper. Nullam venenatis, felis eu
                            sodales maximus, nulla turpis vehicula orci, nec
                            laoreet nulla velit sit amet sapien. Duis auctor
                            metus ac sapien volutpat, non rutrum lectus aliquam.
                            Cras urna nulla, volutpat at suscipit id, dignissim
                            id nunc. Integer a rutrum turpis, nec molestie nibh.
                            Ut euismod felis sit amet leo dictum pretium. Nam
                            fringilla vitae leo nec rhoncus. Donec dui lorem,
                            lobortis non consequat vel, venenatis eget turpis.
                            Duis et diam massa. Etiam tincidunt, ligula vel
                            semper blandit, arcu diam rutrum nisl, eu porttitor
                            sem nisl ac ex.
                        </span>
                    </div>
                    <!-- social icons -->
                    <div
                        class="social-links justify-content-center justify-content-md-start"
                    >
                        <a href="#" class="box">
                            <i class="fa fa-linkedin fa-x"></i>
                        </a>
                        <a href="#" id="twit" class="box">
                            <i class="fa fa-twitter fa-x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row sec">
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="project-item-box">
                        <img
                            src="../../images/project-pic-3.jpg"
                            class="img-fluid"
                            alt="project"
                        />
                    </div>
                </div>
                <div class="col-lg-9 col-md-6 col-12">
                    <div class="d-flex justify-content-start">
                        <span class="name left">A S M Rezaul Karim</span>
                    </div>
                    <div class="d-flex justify-content-start">
                        <span class="subTitle left">
                            Director, BlueBees Limited
                        </span>
                    </div>
                    <div class="d-flex justify-content-start">
                        <span class="subTitle left desc">
                            In dapibus blandit turpis porttitor ultrices. Fusce
                            tempor turpis eu magna placerat, sed porttitor arcu
                            suscipit. Quisque rhoncus, lacus tincidunt vehicula
                            varius, tellus neque ullamcorper nibh, eget feugiat
                            augue felis ut metus. Praesent interdum molestie
                            eros id ullamcorper. Nullam venenatis, felis eu
                            sodales maximus, nulla turpis vehicula orci, nec
                            laoreet nulla velit sit amet sapien. Duis auctor
                            metus ac sapien volutpat, non rutrum lectus aliquam.
                            Cras urna nulla, volutpat at suscipit id, dignissim
                            id nunc. Integer a rutrum turpis, nec molestie nibh.
                            Ut euismod felis sit amet leo dictum pretium. Nam
                            fringilla vitae leo nec rhoncus. Donec dui lorem,
                            lobortis non consequat vel, venenatis eget turpis.
                            Duis et diam massa. Etiam tincidunt, ligula vel
                            semper blandit, arcu diam rutrum nisl, eu porttitor
                            sem nisl ac ex.
                        </span>
                    </div>
                    <!-- social icons -->
                    <div
                        class="social-links justify-content-center justify-content-md-start"
                    >
                        <a href="#" class="box">
                            <i class="fa fa-linkedin fa-x"></i>
                        </a>
                        <a href="#" id="twit" class="box">
                            <i class="fa fa-twitter fa-x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <!-- employee card -->
            <div class="row">
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 pb-4">
                    <div class="project-item">
                        <div class="project-item-box">
                            <img
                                src="../../images/project-pic-3.jpg"
                                class="image_project"
                                alt="project"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="name">{{ props.name }}</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <span class="subTitle">
                                {{ props.subTitle }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
