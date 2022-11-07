<template>
    <header class="header-wrap">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <h1>
                    <router-link to="/">
                        <img src="../../images/logo.png" alt="logo" />
                    </router-link>
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
            </div>
        </div>
    </header>
</template>
