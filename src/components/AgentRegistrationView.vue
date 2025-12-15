<script>
import SiteFooter from './SiteFooter.vue';
import NavHeader from './NavHeader.vue';
import { ref } from 'vue';
export default {
    setup() {
        return {
        };
    },
    components: {
        SiteFooter,
        NavHeader,
    },
    methods: {
    }
}
</script>
<template>
    <div class="h-full py-8">
        <div class="flex w-full h-full">
            <div
                class="w-2/5 hidden md:block h-full bg-blend-overlay bg-[#2DA771] bg-[url('https://images.unsplash.com/photo-1533135091724-62cc5402aa20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                <img src="https://images.unsplash.com/photo-1533135091724-62cc5402aa20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" class="h-full hidden">
            </div>
            <div class="md:w-3/5 w-full flex flex-col h-full">
                <nav class="w-full h-[60px] flex px-[40px] items-center justify-end">
                    <RouterLink to="/" class="justify-center w-full lg:w-auto flex lg:flex-0">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/6a21e9e92c25a36bb6144942c9b9e60e3351226a0fdb4687a4f2b830305470d8?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
                            alt="Xpenspay logo" class="object-contain shrink-0 aspect-[4.1] w-[150px]" />
                    </RouterLink>
                </nav>
                <div class="w-full flex items-center justify-center my-auto h-full py-[20px]">
                    <div class="w-full">
                        <p class="mb-10 md:mb-6 text-2xl font-bold italic">Become an Xpenspay Agent</p>
                        <form name="registrationForm" action="https://formspree.io/f/xdkojked" method="POST" onSubmit="fbq('track','Lead')"
                            class="mx-auto w-3/5 max-md:w-4/5 flex flex-col gap-4 font-bold" data-netlify="true">
                            <div class="flex items-start gap-1 flex-col">
                                <label for="fullName" class="font-normal">Full Name <span class="text-red-600">*</span>
                                </label>
                                <input type="text"
                                    class="border-solid border-b w-full bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="fullName" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <label for="phoneNumber" class="font-normal">Phone Number <span
                                        class="text-red-600">*</span></label>
                                <input type="text"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="phoneNumber" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <label for="emailAddress" class="font-normal">Email Address </label>
                                <input type="text"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="emailAddress">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <label for="emailAddress" class="font-normal">Home Address <span
                                        class="text-red-600">*</span></label>
                                <input type="text"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="homeAddress" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <label for="emailAddress" class="font-normal">Local Government Area(LGA) <span
                                        class="text-red-600">*</span></label>
                                <input type="text"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="lga" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <label for="emailAddress" class="font-normal">State of Residence/Operation <span
                                        class="text-red-600">*</span></label>
                                <input type="text"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="stateAddress" required="true">
                            </div>
                            <button class="md:w-max w-full mt-2 px-10 py-2 bg-black font-bold text-white" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>