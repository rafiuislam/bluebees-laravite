<script setup>
import HomeBanner from "../components/HomeBanner.vue";

import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

const props = reactive({
    title: "About Us",

    bannerImg: "../../images/contact-hero-banner.jpg",
});

const formData = reactive({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
});

const rules = computed(() => {
    return {
        fname: {
            required: required,
            minLength: minLength(2),
            // containsUsername: helpers.withMessage(
            //     "Must contain Rafiu",
            //     containsUsername
            // ),
        },
        lname: {
            required: required,
            minLength: minLength(3),
        },
        email: {
            required: required,
            email,
        },
        phone: {
            minLength: minLength(10),
        },
        company: "",
        service: "",
        budget: "",
        message: "",
    };
});

const $v = useVuelidate(rules, formData);

const submitForm = async () => {
    const result = await $v.value.$validate();
    if (result) {
        alert("Form Submitted");
    } else {
        alert("Form not Submitted");
    }
};
</script>

<template>
    <HomeBanner />
    <!-- Route Banner -->
    <img class="img-fluid bannerimg" :src="props.bannerImg" alt="" />
    <div class="d-flex justify-content-center route">
        <p class="routeTitle">Contact</p>
    </div>

    <section class="contact-page">
        <!-- Title&header -->
        <div class="container">
            <div class="d-flex justify-content-center">
                <h1 class="title">Let’s Get Your Project Started!</h1>
            </div>
            <div class="d-flex justify-content-center">
                <p>
                    Get in touch with us whether you have an inquiry regarding
                    highlights, preliminaries, evaluating, need a demo, or
                    whatever else, BlueBees AI is prepared to respond to every
                    one of your inquiries. We provide meaningful solutions for
                    products where we can ensure your ROI.
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
                        <a
                            href="https://www.google.com/maps/dir//Manama+MS+Toren,+8th+Floor+GA-99%2F3%2FA%2FB,+Dhaka,+1212/@23.7801366,90.3557589,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755c7371d769487:0xf2345a284c325164!2m2!1d90.4257993!2d23.7801524"
                        >
                            Manama MS Toren, 8th Floor GA-99/3/A/B, Pragati
                            Sarani, Middle Badda, Gulshan, Dhaka 1212,
                            Bangladesh
                        </a>
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
                        <a href="mailto:info@bluebees.ventures">
                            info@bluebees.ventures
                        </a>
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
                        <a href="tel:+880 9638-946339 ">
                            +880 9638-946339 | +880 16663
                        </a>
                    </button>
                </div>
            </div>
        </div>

        <div class="container sec">
            <div class="mx-auto text-center message">
                If you have any queries or need any kind of helps then sent us a
                message. Our Experts will help you to grow your business !
            </div>
            <!-- Form     -->
            <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="form-group col-md-6 pb-4 position-relative">
                        <label for="fname">First Name *</label>
                        <input
                            type="text"
                            class="form-control"
                            id="fname"
                            placeholder="Your First Name"
                            v-model="formData.fname"
                        />
                        <div class="space"></div>
                        <span
                            class="text-danger"
                            v-for="error of $v.fname.$errors"
                            :key="error.$uid"
                        >
                            {{ error.$message }}
                        </span>
                    </div>
                    <div class="form-group col-md-6 pb-4 position-relative">
                        <label for="lname">Last Name *</label>
                        <input
                            type="text"
                            class="form-control"
                            id="lname"
                            placeholder="Your Last Name"
                            v-model="formData.lname"
                        />
                        <div class="space"></div>
                        <span
                            class="text-danger"
                            v-for="error of $v.lname.$errors"
                            :key="error.$uid"
                        >
                            {{ error.$message }}
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6 pb-4 position-relative">
                        <label for="inputEmail">Email *</label>
                        <input
                            type="email"
                            class="form-control"
                            id="inputEmail"
                            placeholder="Your Email"
                            v-model="formData.email"
                        />
                        <div class="space"></div>
                        <span
                            class="text-danger"
                            v-for="error of $v.email.$errors"
                            :key="error.$uid"
                        >
                            {{ error.$message }}
                        </span>
                    </div>
                    <div class="form-group col-md-6 pb-4 position-relative">
                        <label for="cell">Phone</label>
                        <input
                            type="number"
                            class="form-control"
                            id="cell"
                            placeholder="Your Phone"
                            v-model="formData.phone"
                        />
                        <span
                            class="text-danger"
                            v-for="error of $v.phone.$errors"
                            :key="error.$uid"
                        >
                            {{ error.$message }}
                        </span>
                    </div>
                </div>
                <div class="form-group pb-4 position-relative">
                    <label for="cname">Company Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="cname"
                        placeholder="Company name"
                        v-model="formData.company"
                    />
                </div>
                <div class="form-group pb-4">
                    <label for="sname">Service Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="sname"
                        placeholder="Service name"
                        v-model="formData.service"
                    />
                </div>
                <div class="form-group pb-4">
                    <label for="quantity">Approximate Budget in Taka</label>
                    <input
                        type="number"
                        class="form-control"
                        id="quantity"
                        placeholder="Type your budget in Taka"
                        v-model="formData.budget"
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
                        placeholder="Your Message..."
                        v-model="formData.message"
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
                        <a href="#" class="box">
                            <i class="fa fa-twitter fa-x"></i>
                        </a>
                    </div>
                    <button
                        @click="handleSubmit"
                        class="col-lg-6 col-md-6 col-sm-12 send-btn"
                    >
                        Send
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
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3651.0802091625583!2d90.42361801445638!3d23.780157943556933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sManama%20MS%20Toren%2C%208th%20Floor%20GA-99%2F3%2FA%2FB%2C%20Pragati%20Sarani%2C%20Middle%20Badda%2C%20Gulshan%2C%20Dhaka%201212%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1671859889719!5m2!1sen!2sbd"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
            ></iframe>
        </div>
    </section>
</template>
