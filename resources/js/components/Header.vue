<template>
    <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <img src="../../images/logo.png" alt="logo" class="img-fluid" />
            </router-link>
            <!-- 
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                href="#navmenu"
            >
                <span class="navbar-toggler-icon"></span>
            </button> -->

            <!-- custom humbarger button -->
            <button
                class="toggle navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                href="#navmenu"
                aria-expanded="true"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link"
                            >About</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/services" class="nav-link"
                            >Services</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/project" class="nav-link"
                            >Project</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/team" class="nav-link"
                            >Team</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link"
                            >Contact</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/career" class="nav-link"
                            >Career</router-link
                        >
                    </li>
                </ul>
            </div>

            <!-- <div class="d-flex justify-content-between align-items-center">
                <h1>
                 
                </h1>

                <nav class="main-menu">
                    <ul class="d-flex">
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
            </div> -->
        </div>
    </nav>
</template>
