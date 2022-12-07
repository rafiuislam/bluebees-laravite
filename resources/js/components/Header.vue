<template>
    <div class="main-wrap">
        <div class="container">
            <div
                class="main-box d-flex justify-content-between align-items-center"
            >
                <h1>
                    <router-link to="/" class="navbar-brand">
                        <img
                            src="../../images/logo.png"
                            alt="logo"
                            class="logo"
                        />
                    </router-link>
                </h1>

                <nav class="main-menu">
                    <ul class="d-md-flex">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About Us</router-link></li>
                        <li class="dropdown">
                            <span class="dropbtn">
                                <router-link to="/services"
                                    >Services</router-link
                                >&ensp;

                                <i class="fa fa-caret-down" id="down"></i>
                            </span>
                            <div class="dropdown-content">
                                <a href="#">UI UX Design</a>
                                <a href="#">Web Application Development</a>
                                <a href="#">Custom Software Development</a>
                                <a href="#">Mobile Application Development</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <span class="dropbtn">
                                <router-link to="/products"
                                    >Products</router-link
                                >&ensp;
                                <i class="fa fa-caret-down" id="down"></i>
                            </span>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </li>
                        <li>
                            <router-link to="/project">Project</router-link>
                        </li>
                        <li><router-link to="/team">Team</router-link></li>
                        <li>
                            <router-link to="/contact">Contact</router-link>
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
