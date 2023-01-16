<script setup>
import { reactive, ref } from "vue";

const props = reactive({
    logo: "../../images/logo.png",
});

const isActive = ref(false);
const displayStyle = ref("none");
const trans = ref("none");

const toggleClass = () => {
    isActive.value = !isActive.value;
    displayStyle.value = displayStyle.value === "block" ? "none" : "block";
    trans.value = trans.value === "all 0.5s" ? "none" : "all 0.5s";
};
</script>

<template>
    <div class="main-wrap">
        <div class="container">
            <div
                class="main-box d-flex justify-content-between align-items-center"
            >
                <h1>
                    <router-link :to="{ name: 'Home' }" class="navbar-brand">
                        <img :src="props.logo" alt="logo" class="logo" />
                    </router-link>
                </h1>

                <nav
                    class="main-menu"
                    :style="{
                        display: displayStyle,
                        transition: trans,
                    }"
                >
                    <ul class="d-md-flex">
                        <li>
                            <router-link
                                :to="{ name: 'Home' }"
                                class="nav-under"
                                >Home</router-link
                            >
                        </li>
                        <li class="dropdown">
                            <span class="dropbtn">
                                <router-link
                                    :to="{ name: 'About Us' }"
                                    class="nav-under"
                                    >About Us</router-link
                                >&ensp;
                                <i class="fa fa-caret-down fa-xs" id="down"></i>
                            </span>
                            <div class="dropdown-content">
                                <router-link :to="{ name: 'Career' }"
                                    >Career</router-link
                                >
                                <router-link :to="{ name: 'Register' }"
                                    >Register</router-link
                                >
                            </div>
                        </li>
                        <li class="dropdown">
                            <span class="dropbtn">
                                <router-link
                                    :to="{ name: 'Products' }"
                                    class="nav-under"
                                    >Products</router-link
                                >&ensp;
                                <i class="fa fa-caret-down fa-xs" id="down"></i>
                            </span>
                            <div class="dropdown-content">
                                <router-link :to="{ name: 'Ecommerce' }"
                                    >E-Commerce</router-link
                                >

                                <router-link :to="{ name: 'erp' }"
                                    >ERP Software</router-link
                                >
                                <router-link :to="{ name: 'hr' }"
                                    >HR Software</router-link
                                >
                                <router-link :to="{ name: 'pos' }"
                                    >Point Of Sales</router-link
                                >
                            </div>
                        </li>
                        <li class="dropdown">
                            <span class="dropbtn">
                                <router-link
                                    :to="{ name: 'Services' }"
                                    class="nav-under"
                                    >Services</router-link
                                >&ensp;

                                <i class="fa fa-caret-down fa-xs" id="down"></i>
                            </span>
                            <div class="dropdown-content">
                                <router-link :to="{ name: 'uiux' }"
                                    >UI UX Design</router-link
                                >
                                <router-link :to="{ name: 'webApp' }"
                                    >Web Application
                                </router-link>
                                <router-link :to="{ name: 'customerSoft' }"
                                    >Custom Software
                                </router-link>
                                <router-link :to="{ name: 'mobileApp' }"
                                    >Mobile Application
                                </router-link>
                            </div>
                        </li>

                        <li>
                            <router-link
                                :to="{ name: 'Project' }"
                                class="nav-under"
                                >Projects</router-link
                            >
                        </li>
                        <li class="dropdown">
                            <span class="dropbtn">
                                <router-link
                                    :to="{ name: '' }"
                                    class="nav-under"
                                    >Team</router-link
                                >&ensp;
                                <i class="fa fa-caret-down fa-xs" id="down"></i>
                            </span>
                            <div class="dropdown-content">
                                <router-link :to="{ name: 'Gallery' }"
                                    >Gallery</router-link
                                >
                                <router-link :to="{ name: 'Team' }"
                                    >Our Team</router-link
                                >
                            </div>
                        </li>

                        <li>
                            <router-link
                                :to="{ name: 'Contact' }"
                                class="nav-under"
                                >Contact</router-link
                            >
                        </li>
                    </ul>
                </nav>
                <!-- custom humbarger button -->
                <button
                    @click="toggleClass"
                    class="toggle navbar-toggler openClose"
                    :class="{ collapsed: isActive }"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</template>
