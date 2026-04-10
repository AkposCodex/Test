<script>
import SiteFooter from './SiteFooter.vue';
import NavHeader from './NavHeader.vue';
import { RouterLink, useRouter } from 'vue-router';
import { ref, reactive } from 'vue';

const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

// const isSubmitting = ref(false);

//Form Data
const form = reactive({
    fullName: '',
    phone: '',
    email: '',
    homeAddress: '',
    lga: '',
    state: '',
    bankName: '',
    accountNumber: '',
    bvn: '',
    nin: '',
    photo: null // This will store the Base64 string
});

//File Upload Handler
const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        form.photo = e.target.result;
    };
    reader.readAsDataURL(file);
};

const pushRoute = () => {
    const router = useRouter();
    console.log(router);
};

//Form Submission Handler
// const 
export default {
    setup() {
        return {
        };
    },
    data() {
        return {
            form,
            isSubmitting: false,
        };
    },
    components: {
        SiteFooter,
        NavHeader,
    },
    methods: {
        handleFileUpload,
        pushRoute,
        async handleSubmit() {
            if (!form.photo) return alert("Please upload a passport photo");

            this.isSubmitting = true;

            try {
                const response = await fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Apps Script requires no-cors for simple redirect handling
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form)
                });
                alert("Application submitted successfully!");
                this.$router.push('/thank-you');
                // Reset form logic here
            } catch (error) {
                console.error("Error!", error);
                alert("Submission failed. Please try again.");
            } finally {
                this.isSubmitting = false;
            }
        },
        goBack() {
            this.$router.push('/thank-you');
        },
    }
}
</script>
<template>
    <div class="h-full w-full flex flex-col">
        <div class="flex w-full h-full">
            <div class="w-2/5 hidden h-full bg-blend-overlay bg-cover bg-green-700">
                <img src="https://images.unsplash.com/photo-1533135091724-62cc5402aa20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" class="h-full">
            </div>
            <div class="flex w-full flex-col h-max bg-white">
                <nav class="w-full h-[60px] flex px-[40px] pt-4 items-center justify-end">
                    <RouterLink to="/" class="justify-center w-full lg:w-auto flex lg:flex-0">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/6a21e9e92c25a36bb6144942c9b9e60e3351226a0fdb4687a4f2b830305470d8?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
                            alt="Xpenspay logo" class="object-contain shrink-0 aspect-[4.1] w-[150px]" />
                    </RouterLink>
                </nav>
                <div class="w-full flex items-center justify-center my-auto h-full py-[20px]">
                    <!-- Agent Registration Form -->
                    <div class="w-full">
                        <p class="mb-10 md:mb-6 text-2xl font-bold italic">Become an Xpenspay Agent</p>
                        <form name="registrationForm" @submit.prevent="handleSubmit" method="POST"
                            class="mx-auto w-3/5 max-md:w-4/5 flex flex-col gap-4 font-bold text-left">
                            <input type="hidden" name="form-name" value="registrationForm" />
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Full Name -->
                                <label for="fullName" class="font-normal">Full Name(First Middle Last) <span
                                        class="text-red-600">*</span>
                                </label>
                                <input type="text" v-model="form.fullName"
                                    class="border-solid border-b w-full bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="fullName" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Phone Number -->
                                <label for="phoneNumber" class="font-normal">Phone Number <span
                                        class="text-red-600">*</span></label>
                                <input type="text" v-model="form.phone"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="phoneNumber" maxlength="11" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Email Address -->
                                <label for="emailAddress" class="font-normal">Email Address </label>
                                <input type="email" v-model="form.email"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="emailAddress" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Home Address -->
                                <label for="homeAddress" class="font-normal">Home Address <span
                                        class="text-red-600">*</span></label>
                                <input type="text" v-model="form.homeAddress"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="homeAddress" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Local Government Area -->
                                <label for="lga" class="font-normal">Local Government Area(LGA) <span
                                        class="text-red-600">*</span></label>
                                <input type="text" v-model="form.lga"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="lga" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- State of Residence/Operation -->
                                <label for="stateAddress" class="font-normal">State of Residence/Operation <span
                                        class="text-red-600">*</span></label>
                                <input type="text" v-model="form.state"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="stateAddress" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Passport Photo -->
                                <label for="passportPhoto" class="font-normal">Passport Photo<span
                                        class="text-red-600">*</span></label>
                                <input type="file" @change="handleFileUpload" accept="image/*"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="passportPhoto" required="true">
                            </div>
                            <div class="text-left">
                                <h2 class="text-2xl font-bold">Bank Information</h2>
                                <p class="text-md font-bold">Please provide the details of the bank account to which
                                    your commissions will be
                                    deposited</p>
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Bank-->
                                <label for="bank" class="font-normal">Bank(Ex. GTBank, Zenith Bank, Diamond Bank,
                                    etc)<span class="text-red-600">*</span></label>
                                <input type="text" v-model="form.bankName"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="bank" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Bank Account Number -->
                                <label for="bankAccountNumber" class="font-normal">Bank Account Number<span
                                        class="text-red-600">*</span></label>
                                <input type="text" v-model="form.accountNumber"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="bankAccountNumber" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- BVN -->
                                <label for="bvn" class="font-normal">Bank Verification Number (BVN)(Your BVN is required
                                    strictly for identity verification as per financial regulations and will be handled
                                    securely.)<span class="text-red-600">*</span></label>
                                <input type="text" v-model="form.bvn"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="bvn" required="true">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- NIN -->
                                <label for="nin" class="font-normal">National Identity Number (NIN)(Your NIN is required
                                    strictly for identity verification as per financial regulations and will be handled
                                    securely.)<span class="text-red-600">*</span></label>
                                <input type="text" v-model="form.nin"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="nin" required="true">
                            </div>
                            <button class="md:w-max w-full mt-2 px-10 py-2 bg-black font-bold text-white"
                                type="submit">{{ isSubmitting ? 'Processing...' : 'Sign Up' }}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>