<script setup>
import HomeBanner from "../components/HomeBanner.vue";

import { reactive } from "vue";

const props = reactive({
    title: "Our Team",

    header: "Sed lobortis tempor erat vitae efficitur. Sed interdum sed neque nec gravida. In vestibulum vitae neque quis ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam massa, sagittis sit amet sem sit amet, facilisis rutrum nunc. consectetur adipiscing elit. Duis quam massa, sagittis sit amet sem sit amet, facilisis rutrum nunc. ",
    subHeader:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare consectetur massa et ultrices. Morbi gravida mi sed ex ultrices consectetur. Proin tincidunt ligula sit amet scelerisque semper. Aenean at nulla et magna interdum scelerisque. Quisque eu ante gravida sem ultrices eleifend. Nam mollis, leo sed sagittis finibus, nulla metus aliquet nisl, sit amet pellentesque lectus magna a ligula. Duis a mauris sit amet lectus pharetra maximus. Proin semper mi id est blandit porttitor. Sed consequat quam eleifend leo varius, at lobortis urna accumsan. Donec dignissim tempor mollis. Fusce egestas sagittis augue in vulputate. Etiam sit amet condimentum justo. Sed mollis rhoncus dolor, nec eleifend neque pretium quis. <br/><br/> Nulla placerat, lectus facilisis convallis porta, lorem purus placerat eros, ac egestas nulla turpis vitae neque. In hac habitasse platea dictumst. Nullam euismod laoreet ligula, et consectetur ligula gravida vitae. Maecenas congue libero vel facilisis vestibulum. Proin eu dui ac mi vulputate eleifend. Etiam at egestas ligula, ut gravida ligula. Maecenas vitae feugiat elit. Donec congue dui in lorem malesuada condimentum.<br/><br/> Maecenas ac urna felis. Cras dapibus pharetra est nec blandit. Nam nec semper felis. Vestibulum in vulputate ipsum. Morbi non odio faucibus, suscipit eros nec, laoreet dolor. Morbi quis diam fringilla, efficitur lorem a, luctus massa. Duis leo libero, interdum et sapien ac, eleifend posuere orci. Nullam ut ex id urna tincidunt semper sed et dui.",

    name: [
        "Imdadul Haque Mipel",
        "Abdul Baten",
        "Hasanuzzaman",
        "Md. Mamun Ur Rashid Malik",
        "Md. Mobarak Hossain",
        "Md. Mahi Uddin Mozumder",
        "Md. Rakibul Islam",
        "Md. Aowal Hossain",
        "Md. Faruk Hossain",
        "Mahbub-ul-Hasan Nafi",
        "Md. Rafiu Islam",
        "Add Later",
    ],
    subTitle: [
        "Manager",
        "Deputy Manager",
        "UI/UX Designer",
        " Sr. Software Engineer",
        "Front-End Developer",
        "UI/UX Designer",
        "Javascript Developer",
        "Software Engineer",
        "App Developer",
        "Jr. Software Engineer",
        " Intern",
        "Add Later",
    ],
    logo: "../../images/logo.png",
});
</script>

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
                        <img :src="props.logo" alt="logo" />
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
                                    <a
                                        href="https://www.google.com/maps/dir//Manama+MS+Toren,+8th+Floor+GA-99%2F3%2FA%2FB,+Dhaka,+1212/@23.7801366,90.3557589,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755c7371d769487:0xf2345a284c325164!2m2!1d90.4257993!2d23.7801524"
                                    >
                                        Manama MS Toren, 8th Floor
                                        <Br />GA-99/3/A/B, Pragati Sarani,
                                        Middle <Br /> Badda, Gulshan, Dhaka
                                        1212,<Br />
                                        Bangladesh
                                    </a>
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
                                    <a href="tel:+880 9638-946339 ">
                                        +880 9638-946339 <Br /> +880 16663
                                    </a>
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

                                <p class="address">
                                    <a href="mailto:info@bluebees.ventures">
                                        info@bluebees.ventures
                                    </a>
                                </p>
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
