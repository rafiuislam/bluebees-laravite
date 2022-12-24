<template>
    <footer class="footer">
        <div class="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
        </div>
        <div class="container d-md-flex">
            <div
                class="footer-col col-lg-3 col-md-6 col-sm-12 text-center text-md-start"
            >
                <span>
                    <router-link :to="{ name: 'Home' }">
                        <img src="../../images/logo.png" alt="logo" />
                    </router-link>
                </span>
                <div
                    class="social-links justify-content-center justify-content-md-start"
                >
                    <a href="#" class="box">
                        <i
                            class="fa fa-facebook fa"
                            style="margin: 0px 5px"
                        ></i>
                    </a>
                    <a href="#" class="box">
                        <i
                            class="fa fa-linkedin fa"
                            style="margin: 0px 2px"
                        ></i>
                    </a>
                    <a href="#" class="box">
                        <i class="fa fa-twitter fa"></i>
                    </a>
                </div>
            </div>
            <div class="footer-col col-lg-3 col-md-6 col-sm-12 left">
                <h4>Our Services</h4>
                <ul>
                    <li>
                        <router-link :to="{ name: 'uiux' }">
                            <div class="icon align-items-center">
                                <div>
                                    <i
                                        class="fa fa-angle-double-right"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p>UI UX Design</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'webApp' }">
                            <div class="icon align-items-center">
                                <div>
                                    <i
                                        class="fa fa-angle-double-right"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p>Web Application Development</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'customerSoft' }">
                            <div class="icon align-items-center">
                                <div>
                                    <i
                                        class="fa fa-angle-double-right"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p>Custom Software Development</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'mobileApp' }">
                            <div class="icon align-items-center">
                                <div>
                                    <i
                                        class="fa fa-angle-double-right"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p>Mobile Application Development</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="footer-col col-lg-2 col-md-6 col-sm-12 left">
                <h4>Important Link</h4>
                <ul>
                    <li>
                        <router-link :to="{ name: 'About Us' }">
                            <div class="icon align-items-center">
                                <div>
                                    <i
                                        class="fa fa-angle-double-right"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p>About us</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Services' }">
                            <div class="icon align-items-center">
                                <div>
                                    <i
                                        class="fa fa-angle-double-right"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p>Services</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Products' }">
                            <div class="icon align-items-center">
                                <div>
                                    <i
                                        class="fa fa-angle-double-right"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p>Products</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Project' }">
                            <div class="icon align-items-center">
                                <div>
                                    <i
                                        class="fa fa-angle-double-right"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p>Project</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Team' }">
                            <div class="icon align-items-center">
                                <div>
                                    <i
                                        class="fa fa-angle-double-right"
                                        aria-hidden="false"
                                    ></i>
                                </div>

                                <p>Team</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Contact' }">
                            <div class="icon align-items-center">
                                <div>
                                    <i
                                        class="fa fa-angle-double-right"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p>Contact</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="footer-col col-lg-3 col-md-6 col-sm-12 left">
                <h4>Contact Info</h4>
                <ul>
                    <li>
                        <a href="#">
                            <div class="icon contact">
                                <div>
                                    <i
                                        class="fa fa-home"
                                        aria-hidden="false"
                                    ></i>
                                </div>

                                <p class="address">
                                    Manama MS Toren, 8th Floor
                                    <Br />GA-99/3/A/B, Pragati Sarani, Middle
                                    <Br /> Badda, Gulshan, Dhaka 1212,<Br />
                                    Bangladesh
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="icon contact">
                                <div>
                                    <i
                                        class="fa fa-phone"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p class="address">
                                    +880 9638-946339 <Br /> +880 16663
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="icon contact">
                                <div>
                                    <i
                                        class="fa fa-envelope"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <p class="address">support@bluebees.ai</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="copy">
            Copyright &copy; 2022 BlueBees AI. All rights Reserved.
        </div>
    </footer>
</template>
