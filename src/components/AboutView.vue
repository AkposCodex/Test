<script>
import SiteFooter from './SiteFooter.vue';
import AgentSignup from './AgentSignup.vue';
import NavHeader from './NavHeader.vue';
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
        AgentSignup,
        NavHeader,
    },
    methods: {
        openNav() {
            this.open = !this.open
        }
    }
}
</script>
<template>
    <div class="">
        <nav-header />
        <main class="flex flex-col items-center">
            <div class="w-full h-[200px] bg-cover bg-center "
                style="background-image: url('https://images.unsplash.com/photo-1607269910784-aafe40882991?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
                <div class="w-full h-full bg-blend-darken bg-black/35 flex items-center justify-center">
                    <p class="text-[32px] font-bold text-white">About Xpenspay</p>
                </div>
            </div>
            <div class="px-[16px] lg:max-[1440px]:px-[80px] mt-4 flex flex-col gap-12" id="mainContent">
                <div class="flex flex-col justify-center gap-24" id="features">
                    <div class="flex gap-10 justify-center w-full flex-col items-center md:flex-row-reverse ">
                        <div class="">
                            <p class="text-xl md:text-2xl text-start font-bold">A fast and convenient way to pay</p>
                            <p class="text-start md:text-lg indent-8">Make use of Xpenspay’s Scan-To-Pay feature to
                                conveniently
                                pay
                                for goods and services without the hassle of account numbers differing banks slowing you
                                down.
                            </p>
                            <br>
                            <p class="text-start md:text-lg indent-8">
                                The Xpenspay app allows you pay for daily expenses without worrying
                                about physical cash. With your phone camera scan the QR code at the merchant
                                location, enter the product/service amount and enter your pin to pay. <span
                                    class="font-bold">
                                    Simply download
                                    the Xpenspay App to start transactingtoday.
                                </span>
                            </p>
                        </div>
                        <div class="max-w-[1440px]:w-3/5 h-max bg-cover bg-center rounded-2xl">
                            <img src="../assets/img/qrScan.png" class="w-full " alt="">
                        </div>
                    </div>
                    <div class="flex gap-10 items-center justify-center flex-col md:flex-row ">
                        <div class="self-stretch  flex items-center">
                            <div class="">
                                <div class="mb-6">
                                    <p class="text-xl md:text-2xl text-start font-bold">Putting our users and merchants
                                        first</p>
                                    <p class="text-start md:text-lg indent-8">At Xpenspay we put our users at the center
                                        of every
                                        service to
                                        provide the best value possible.
                                    </p>
                                </div>
                                <div class="">
                                    <p class="text-xl md:text-2xl text-start font-bold">What services do we provide?</p>
                                    <ul class="list-disc text-start px-10">
                                        <li>
                                            <p>Lowest transaction rates in the industry</p>
                                        </li>
                                        <li>Special discounts on merchant services</li>
                                        <li>Dedicated customer supports</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-[1440px]:w-3/5 h-max bg-cover bg-center rounded-2xl">
                            <img src="../assets/img/userFemale.png" class="w-full " alt="">
                        </div>
                    </div>
                    <div class="flex gap-10 justify-center h-max flex-col items-center md:flex-row md:gap-20">
                        <div class="">
                            <p class="text-xl md:text-2xl text-start font-bold">An innovative community focused design
                            </p>
                            <p class="text-start md:text-lg indent-8">Xpenspay’s Merchant search function provides an
                                enriching
                                experience for users whenever they open the app.
                            </p>
                            <div class="mt-6">
                                <p class="text-xl md:text-2xl text-start font-bold">Users enjoy various benefits like:
                                </p>
                                <ul class="list-disc text-start px-10">
                                    <li>
                                        Access to local vendors and service providers
                                    </li>
                                    <li>Save time on finding products near you</li>
                                    <li>Help exploring new places wherever you go.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="max-w-[1440px]:w-full w-2/5 h-max bg-cover bg-center rounded-2xl">
                            <img src="../assets/img/findMerchant.png" alt="" class="self-stretch w-[30%]  h-max m-auto">
                        </div>
                    </div>
                    <div class="flex gap-10 items-center justify-center flex-col md:flex-row-reverse">
                        <div class="">
                            <p class="text-xl text-start font-bold">Make savings on your purchases and payments</p>
                            <p class="text-start md:text-lg indent-8">On the Xpenspay App, users can earn discounts on
                                products
                                and
                                services
                                from merchants on the platform. Discounts vary from merchant to merchant.
                            </p>
                        </div>
                        <div class="max-w-[1440px]:w-3/5 h-max bg-cover bg-center rounded-2xl">
                            <img src="../assets/img/customerService.png" class="w-full " alt="">
                        </div>
                    </div>
                </div>
                <div class="flex gap-6 flex-col">
                    <p class="text-xl text-center font-bold">Our Partners</p>
                    <p class="text-start md:text-lg">Xpenspay is built in collaboration with Simplex Business Solutions
                        and
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
                <div class="my-12 flex flex-col gap-5">
                    <div class="flex gap-1 flex-col text-center">
                        <p class="text-3xl text-center font-bold">Our Vision</p>
                        <p class="text-center italic text-lg md:text-2xl">To be Africa’s preferred daily expense wallet.
                        </p>
                    </div>
                    <div class="flex gap-1 flex-col text-center">
                        <p class="text-3xl text-center font-bold">Our Mission</p>
                        <p class="text-center italic text-lg md:text-2xl">To be Africa’s preferred
                            neighborhood daily expense wallet,
                            through delivery of the simplest, fastest
                            and safest settlement medium.
                        </p>
                    </div>
                </div>
                <div class="flex gap-6 flex-col">
                    <p class="text-xl text-center font-bold">Frequently Asked Questions</p>
                    <Accordion class="text-start">
                        <AccordionPanel value="0" class="">
                            <AccordionHeader class="text-black ">How does Xpenspay work?</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    The Xpenspay app allows you pay for daily expenses without worrying
                                    about physical cash. With your phone camera scan the QR code at the merchant
                                    location, enter the product/service amount and enter your pin to pay.
                                    <br>
                                    All you need is download the Xpenspay App and link it with your existing bank
                                    account to fund your Xpenspay wallet.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="1">
                            <AccordionHeader class="text-black ">How do I become an Agent of Xpenspay?</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    Submit your details on the Xpenspay website to register as an Agent and you will be
                                    contacted by any of our On-boarding Officers for training to complete your
                                    registration process.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="2">
                            <AccordionHeader class="text-black ">What happens to my money in my account?
                            </AccordionHeader>
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
                            <AccordionHeader class="text-black ">How do I change my phone number on my account?
                            </AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    Your phone number used at registration can not be changed after your account is
                                    created. If for wahtever reason you have need to change your number contact us at
                                    <a href="mailto:info@xpenspayng.com">info@xpenspayng.com.</a>
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="4">
                            <AccordionHeader class="text-black ">How do I fund my Xpenspay wallet?</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    Your Xpenspay wallet has a linked account provided by VFD Microfinance Bank that can
                                    be funded using your bank account of choice. Simply click on "Fund Wallet" in your
                                    Xpenspay app and copy
                                    your account details provided.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>
                <!-- <agent-signup /> -->
                <div class="flex w-full max-md:flex-col-reverse items-center">
                    <div class="flex flex-col gap-2 w-max items-center">
                        <p class="text-lg max-md:text-2xl font-bold">Become an Xpenspay Agent Today</p>
                        <RouterLink to="/registration" class="w-3/5 bg-black text-white p-2 rounded hover:outline-none">
                            Register Here
                        </RouterLink>
                    </div>
                    <div class="w-1/5 h-full bg-cover bg-center rounded-2xl max-md:w-full">
                        <img loading="lazy" src="../assets/img/userMale.png" alt="Mobile app referral rewards screen"
                            class="object-contain grow w-full aspect-[1] max-md:w-full" />
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
        <br>
        <br>
        <site-footer />
    </div>
</template>