<script>
import SiteFooter from './SiteFooter.vue';
import { ref } from 'vue';
import { CAccordion } from '@coreui/vue'
export default {
    setup() {
        const open = ref(false)
        return {
            open
        };
    },
    components: {
        SiteFooter,
    },
    methods: {
        openNav() {
            this.open = !this.open
        }
    }
}
</script>
<template>
    <div class="w-screen">
        <nav class="flex w-screen lg:max-[1440px]:px-[60px] flex-col lg:items-center shadow-sm lg:flex-row">
            <nav class="w-full h-[60px] flex px-[16px] items-center justify-between">
                <div class="justify-center w-full lg:w-auto flex lg:flex-0">
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/6a21e9e92c25a36bb6144942c9b9e60e3351226a0fdb4687a4f2b830305470d8?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
                        alt="Xpenspay logo" class="object-contain shrink-0 aspect-[4.1] w-[150px]" />
                </div>
                <a class="justify-end flex lg:hidden" @click="open = !open;"> <img src="../assets/icons/Menu.svg"
                        class="aspect-square w-[32px]" alt="">
                </a>
            </nav>
            <div class="flex gap-4 flex-col items-start text-black p-4" :class="{ 'hidden': !open, 'lg:block': open }">
                <RouterLink class=" text-black" to="/">Home
                </RouterLink>
                <RouterLink class=" text-black" to="/about2">About</RouterLink>
                <a href="#agent" class=" text-black" tabindex="0">Become an agent</a>
            </div>
            <div class="lg:flex gap-4 items-start w-auto text-black hidden ">
                <RouterLink class=" text-black" to="/">Home
                </RouterLink>
                <RouterLink class=" text-black w-max" to="/about2">About</RouterLink>
                <a href="#agent" class=" w-max text-black" tabindex="0">Become an agent</a>
            </div>
        </nav>
        <main class="flex flex-col items-center">
            <div class="w-full h-[200px] bg-cover bg-center "
                style="background-image: url('https://images.unsplash.com/photo-1607269910784-aafe40882991?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
                <div class="w-full h-full bg-blend-darken bg-black/35 flex items-center justify-center">
                    <p class="text-[32px] font-bold text-white">About Xpenspay</p>
                </div>
            </div>
            <div class="px-[16px] lg:max-[1440px]:px-[60px] flex flex-col gap-10 my-10 " id="mainContent">
                <div class="flex gap-3 flex-col md:flex-row md:gap-5">
                    <div class="self-stretch">
                        <p class="text-xl md:text-2xl text-start font-bold">Putting our users and merchants first</p>
                        <p class="text-start md:text-xl">At Xpenspay we put our customers first in every feature we
                            design and implement
                            into our application to provide the greatest value possible with every transaction.
                            <br> Our transaction fees are one of the lowest in the country allowing for a larger range
                            of
                            transactions to be carried out by customers with merchants providing low volume transactions
                            like car hire services and Mama Bole selling her quick eats on the street.
                        </p>
                    </div>
                    <div class="w-full h-[235px] bg-cover bg-center rounded-2xl"
                        style="background-image: url('https://images.unsplash.com/photo-1687422809654-579d81c29d32?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
                    </div>
                </div>
                <div class="flex gap-3 flex-col md:flex-row-reverse md:gap-5">
                    <div class="self-stretch">
                        <p class="text-xl text-start font-bold">A fast and convenient way to pay</p>
                        <p class="text-start">Xpenspay incorporates QR code technology as well as direct in-app
                            transfers to provide flexibility and speed when carrying out transactions to provide one of
                            the fastest transaction speeds in the industry
                        </p>
                    </div>
                    <div class="w-full md:max-w-[334px] h-[235px] bg-cover bg-center rounded-2xl"
                        style="background-image: url('https://images.unsplash.com/photo-1652345408103-7fbe3dd59324?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxxciUyMGNvZGV8ZW58MHx8MHx8fDA%3D')">
                    </div>
                </div>
                <div class="flex gap-3 flex-col md:flex-row md:gap-5">
                    <div class="self-stretch">
                        <p class="text-xl text-start font-bold">An innovative community focused design</p>
                        <p class="text-start">With Xpenspay, our focus on the people who use our app leads. The app has
                            a feature that allows users to discover vendors on the platform that operate in their area
                            and give a quick overview of their businesses and what they offer. This fosters a sense of
                            closeness within the community where you don't forsake your neighbour selling
                            products/services close to you and saves you time in going far to find it. The map feature
                            also allows our users to explore new areas for the best spots for food and goods/services as
                            they go about their day.
                        </p>
                    </div>
                    <div class="w-full  bg-cover bg-center rounded-2xl">
                        <img src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/e04dcbff994243f2fb8f37b5e9b54e0105dc1832d935c7158849e8fe76c1e82b?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
                            alt="" class="">
                    </div>
                </div>
                <div class="flex gap-6 flex-col">
                    <p class="text-xl text-center font-bold">Our Partners</p>
                    <p class="text-start">Xpenspay is built in collaboration with Simplex Business Solutions and
                        partnered with VFD Microfinance Bank in order to bring the best service to its customers with
                        top-tier customer support and reliable infrastructure to guarantee stable transactions 24/7.
                    </p>
                    <div class="flex w-full items-center justify-center gap-6">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/12d6e4211fe117b4035865312f72186b21262bbdc67f2f21125f26789d40e0f2?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
                            alt="Partner logo 1" class="object-contain shrink-0 aspect-[1.18] w-[62px]" />
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/a620de8b92b8869b3b9d4e90b7ff6d429a3d5da64a95e69aa9825774eb81abe9?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
                            alt="Partner logo 2" class="object-contain aspect-[3.09] w-[170px]" />
                    </div>
                </div>
                <div class="flex gap-6 flex-col">
                    <p class="text-xl text-center font-bold">Frequently Asked Questions</p>
                    <Accordion class=" text-start">
                        <AccordionPanel value="0" class="">
                            <AccordionHeader class="text-start">How does Xpenspay work?</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    The xpenspay app is designed to help you pay for daily expenses without worrying
                                    about physical cash. With your phone camera scan the QR code at the merchant
                                    location, enter the product/service amount and enter your pin to pay.
                                    <br>
                                    All you need is download the Xpenspay App and link it with your existing bank
                                    account to fund your Xpenspay wallet.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="1">
                            <AccordionHeader>How do I become an Agent of Xpenspay?</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    Submit your details on the Xpenspay website to register as an Agent and you will be
                                    contacted by any of our On-boarding Officers for training to complete your
                                    registration process.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="2">
                            <AccordionHeader>What happens to my money in my account?</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    Once you have funded your Xpenspay wallet, you can pay for items and services in any
                                    of our merchant locations. Your unused money is safe in your wallet. But we
                                    recommend that you move your unused money back to your linked regular bank account
                                    at the end of the day as your Xpenspay wallet is not a savings account and does not
                                    earn interest on stored amounts.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="3">
                            <AccordionHeader>How do I change my phone number on my account?</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    Your phone number used at registration can not be changed after your account is
                                    created. If for wahtever reason you have need to change your number contact us at
                                    <a href="mailto:info@xpenspayng.com">info@xpenspayng.com.</a>
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>
                <div
                    class="bg-[#EEEEEE] rounded-xl py-[60px] justify-between items-center text-start flex xl:gap-32 gap-16 px-[8px] md:px-[50px]">
                    <div class="flex flex-1 flex-col gap-8 w-full">
                        <p class="text-xl text-[#5A5A5A] font-bold">Become An Xpenspay Agent Today</p>
                        <form action="https://formspree.io/f/xdkojked" class="flex flex-col gap-4 font-bold">
                            <div class="flex gap-2 flex-col">
                                <label for="fullName" class="">Full Name</label>
                                <input type="text" class="p-3 rounded" name="fullName">
                            </div>
                            <div class="flex gap-2 flex-col">
                                <label for="phoneNumber" class="">Phone Number</label>
                                <input type="text" class="p-3 rounded" name="phoneNumber">
                            </div>
                            <div class="flex gap-2 flex-col">
                                <label for="emailAddress" class="">Email Address</label>
                                <input type="text" class="p-3 rounded" name="emailAddress">
                            </div>
                            <button class="md:w-max w-full px-10 py-2 bg-black font-bold text-white">Submit</button>
                        </form>
                    </div>
                    <div class="md:flex-1 hidden md:block">
                        <img src="../assets/illustrations/signupIllust.svg" alt="" class="">
                    </div>
                </div>
                <div class="hidden">
                    <CCallout color="info">
                        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for
                        background, terminology, guidelines, and code snippets.
                    </CCallout>
                    <div>

                    </div>
                </div>
            </div>
        </main>
        <site-footer class="p-4 " />
    </div>
</template>