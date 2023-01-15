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
    email: "",
    phone: "",
    job: "",
    quantity: "",
    time: "",
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
        email: {
            required: required,
            email,
        },
        phone: {
            required: required,
            minLength: minLength(10),
        },
        job: {
            required: required,
        },
        quantity: "",
        time: "",
        message: "",
    };
});

const $v = useVuelidate(rules, formData);
let result;
const submitForm = async () => {
    result = await $v.value.$validate();
    if (result) {
        alert("Form Submitted");
        formData.fname = "";
        formData.email = "";
        formData.phone = "";
        formData.job = "";
        formData.quantity = "";
        formData.time = "";
        formData.message = "";
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
        <p class="routeTitle">Register</p>
    </div>

    <section class="contact-page">
        <div class="container pb-5">
            <div class="mx-auto text-center message">
                Apply For Future Job Opportunities
            </div>
            <!-- Form     -->
            <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="form-group col-md-6 pb-4 position-relative">
                        <label for="fname">Full Name *</label>
                        <input
                            type="text"
                            class="form-control"
                            id="fname"
                            placeholder="Your name"
                            v-model="formData.fname"
                        />

                        <span
                            class="text-danger"
                            v-for="error of $v.fname.$errors"
                            :key="error.$uid"
                            v-if="!result"
                        >
                            {{ error.$message }}
                        </span>
                    </div>
                    <div class="form-group col-md-6 pb-4 position-relative">
                        <label for="inputEmail">Email *</label>
                        <input
                            type="email"
                            class="form-control"
                            id="inputEmail"
                            placeholder="Your email"
                            v-model="formData.email"
                        />

                        <span
                            class="text-danger"
                            v-for="error of $v.email.$errors"
                            :key="error.$uid"
                            v-if="!result"
                        >
                            {{ error.$message }}
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6 pb-4 position-relative">
                        <label for="phone">Phone *</label>
                        <input
                            type="number"
                            class="form-control"
                            id="phone"
                            placeholder="Your phone"
                            v-model="formData.phone"
                        />
                        <span
                            class="text-danger"
                            v-for="error of $v.phone.$errors"
                            :key="error.$uid"
                            v-if="!result"
                        >
                            {{ error.$message }}
                        </span>
                    </div>
                    <div class="form-group col-md-6 pb-4 position-relative">
                        <label for="job">Job position *</label>
                        <input
                            type="text"
                            class="form-control"
                            id="job"
                            placeholder="Your job position"
                            v-model="formData.job"
                        />

                        <span
                            class="text-danger"
                            v-for="error of $v.job.$errors"
                            :key="error.$uid"
                            v-if="!result"
                        >
                            {{ error.$message }}
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6 pb-4 position-relative">
                        <label for="quantity">Expected Salary</label>
                        <input
                            type="number"
                            class="form-control"
                            id="quantity"
                            placeholder="Type your expected salary"
                            v-model="formData.quantity"
                        />
                    </div>
                    <div class="form-group col-md-6 pb-4 position-relative">
                        <label for="time">Expected Joining Date</label>
                        <input
                            type="number"
                            class="form-control"
                            id="time"
                            placeholder="Type your expected joining date"
                            v-model="formData.time"
                        />
                    </div>
                </div>

                <div class="form-group pb-5">
                    <label for="commet">Write Your Message Here</label>
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
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>
