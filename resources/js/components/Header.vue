<template>
    <div class="main-wrap">
        <div class="container">
            <div
                class="main-box d-flex justify-content-between align-items-center"
            >
                <h1>
                    <router-link :to="{ name: 'Home' }" class="navbar-brand">
                        <img
                            src="../../images/logo.png"
                            alt="logo"
                            class="logo"
                        />
                    </router-link>
                </h1>

                <nav class="main-menu">
                    <ul class="d-md-flex">
                        <li>
                            <router-link :to="{ name: 'Home' }"
                                >Home</router-link
                            >
                        </li>
                        <li>
                            <router-link :to="{ name: 'About Us' }"
                                >About Us</router-link
                            >
                        </li>
                        <li class="dropdown">
                            <span class="dropbtn">
                                <router-link :to="{ name: 'Services' }"
                                    >Services</router-link
                                >&ensp;

                                <i class="fa fa-caret-down" id="down"></i>
                            </span>
                            <div class="dropdown-content">
                                <router-link :to="{ name: 'uiux' }"
                                    >UI UX Design</router-link
                                >
                                <router-link :to="{ name: 'webApp' }"
                                    >Web Application Development</router-link
                                >
                                <router-link :to="{ name: 'mobileApp' }"
                                    >Custom Software Development</router-link
                                >
                                <router-link :to="{ name: 'customerSoft' }"
                                    >Mobile Application Development</router-link
                                >
                            </div>
                        </li>
                        <li class="dropdown">
                            <span class="dropbtn">
                                <router-link :to="{ name: 'Products' }"
                                    >Products</router-link
                                >&ensp;
                                <i class="fa fa-caret-down" id="down"></i>
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
                        <li>
                            <router-link :to="{ name: 'Project' }"
                                >Project</router-link
                            >
                        </li>
                        <li>
                            <router-link :to="{ name: 'Team' }"
                                >Team</router-link
                            >
                        </li>
                        <li>
                            <router-link :to="{ name: 'Contact' }"
                                >Contact</router-link
                            >
                        </li>
                    </ul>
                </nav>
                <!-- custom humbarger button -->
                <button class="toggle navbar-toggler openClose">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
$(document).ready(function () {
    $(".openClose").click(function () {
        $(".main-menu").slideToggle();
    });
});
$(document).ready(function () {
    $(".openClose").click(function () {
        $(".openClose").toggleClass("collapsed");
    });
});
</script>
