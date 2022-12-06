<script setup>
import HomeBanner from "../components/HomeBanner.vue";

import { reactive } from "vue";

const props = reactive({
    title: "Let’s Get Your Project Started!",

    subTitle:
        "Get in touch with us whether you have an inquiry regarding highlights, preliminaries, evaluating, need a demo, or whatever else, BlueBees AI is prepared to respond to every one of your inquiries. We provide meaningful solutions for products where we can ensure your ROI.",
});
</script>

<template>
    <HomeBanner />
    <section class="contact-page">
        <!-- Title&header -->
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1 class="title">{{ props.title }}</h1>
            </div>
            <div class="d-flex justify-content-center">
                <p>
                    {{ props.subTitle }}
                </p>
            </div>
        </div>
        <!-- Location -->
        <div class="container">
            <div class="row text-center loco">
                <div class="col-md pb-5 pb-md-4 position-relative">
                    <span class="circle">
                        <i
                            class="fa fa-home text-center"
                            aria-hidden="false"
                        ></i>
                    </span>

                    <button
                        type="submit"
                        class="col-lg-6 col-md-6 col-sm-12 btn"
                    >
                        Manama MS Toren, 8th Floor GA-99/3/A/B, Pragati Sarani,
                        Middle Badda, Gulshan, Dhaka 1212, Bangladesh
                    </button>
                </div>
                <div class="col-md pb-5 pb-md-4 position-relative">
                    <span class="circle">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <button
                        type="submit"
                        class="col-lg-6 col-md-6 col-sm-12 btn"
                        style="
                            color: #0d4e96;
                            @include font(primary, 17, 28, semi-bold);
                        "
                    >
                        info@bluebees.ventures
                    </button>
                </div>
                <div class="col-md pb-5 pb-md-4 position-relative">
                    <span class="circle">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <button
                        type="submit"
                        class="col-lg-6 col-md-6 col-sm-12 btn"
                        style="@include font(primary, 17, 28, semi-bold);"
                    >
                        +880 9638-946339 | +880 16663
                    </button>
                </div>
            </div>
        </div>
        <!-- Form     -->
        <div class="container sec">
            <div class="mx-auto text-center message">
                If you have any queries or need any kind of helps then sent us a
                message. Our Experts will help you to grow your business !
            </div>
            <form>
                <div class="row">
                    <div class="form-group col-md-6 pb-4">
                        <label for="fname">First Name *</label>
                        <input
                            type="text"
                            class="form-control"
                            id="fname"
                            name="fname"
                            placeholder="Your First Name"
                        />
                    </div>
                    <div class="form-group col-md-6 pb-4">
                        <label for="lname">Last Name *</label>
                        <input
                            type="text"
                            class="form-control"
                            id="lname"
                            name="lname"
                            placeholder="Your Last Name"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6 pb-4">
                        <label for="inputEmail4">Email *</label>
                        <input
                            type="email"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="Your Email"
                        />
                    </div>
                    <div class="form-group col-md-6 pb-4">
                        <label for="cell">Phone</label>
                        <input
                            type="number"
                            class="form-control"
                            id="cell"
                            name="cell"
                            min="7"
                            max="15"
                            placeholder="Your Phone"
                        />
                    </div>
                </div>
                <div class="form-group pb-4">
                    <label for="cname">Company Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="cname"
                        name="cname"
                        placeholder="Company name"
                    />
                </div>
                <div class="form-group pb-4">
                    <label for="sname">Service Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="sname"
                        name="sname"
                        placeholder="Service name"
                    />
                </div>
                <div class="form-group pb-4">
                    <label for="quantity">Approximate Budget in Taka</label>
                    <input
                        type="number"
                        class="form-control"
                        id="quantity"
                        name="quantity"
                        placeholder="Type your budget in Taka"
                    />
                </div>
                <div class="form-group pb-5">
                    <label for="commet"
                        >Give us a quick summary about your project</label
                    >
                    <textarea
                        rows="4"
                        cols="50"
                        class="form-control"
                        id="commet"
                        name="comment"
                        placeholder="Your Message..."
                    ></textarea>
                </div>
                <div class="social row">
                    <!-- social icons -->
                    <div
                        class="social-links justify-content-center justify-content-md-start col-lg-6 col-md-6 col-sm-12"
                    >
                        <a href="#" class="box">
                            <i
                                class="fa fa-facebook fa-x"
                                style="margin: 0px 2px"
                            ></i>
                        </a>
                        <a href="#" class="box">
                            <i class="fa fa-linkedin fa-x"></i>
                        </a>
                        <a href="#" id="twit" class="box">
                            <i class="fa fa-twitter fa-x"></i>
                        </a>
                    </div>
                    <button
                        type="submit"
                        class="col-lg-6 col-md-6 col-sm-12 sign-btn"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
        <div
            id="map-container-google-2"
            class="z-depth-1-half map-container container"
            style="height: 500px"
        >
            <iframe
                src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                style="border: 0"
                allowfullscreen
            ></iframe>
        </div>
    </section>
</template>
