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
                        <li><router-link to="/about">About</router-link></li>
                        <li>
                            <router-link to="/services">Services</router-link>
                        </li>
                        <li>
                            <router-link to="/project">Project</router-link>
                        </li>
                        <li><router-link to="/team">Team</router-link></li>
                        <li>
                            <router-link to="/contact">Contact</router-link>
                        </li>
                        <li><router-link to="/career">Career</router-link></li>
                    </ul>
                </nav>
                <div class="openClose">Menu</div>
            </div>
        </div>
    </div>
</template>

<script>
$(document).ready(function () {
    $(".openClose").click(function () {
        $(".main-menu").slideToggle();
    });
});
</script>
