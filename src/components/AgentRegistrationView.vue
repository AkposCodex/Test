<script>
import SiteFooter from './SiteFooter.vue';
import NavHeader from './NavHeader.vue';
import { RouterLink } from 'vue-router';

// Keep this outside as a constant
const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

export default {
    components: {
        SiteFooter,
        NavHeader,
    },
    data() {
        return {
            isSubmitting: false,
            // Define the form object directly here
            form: {
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
                photo: null
            }
        };
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    // 1. Create a canvas
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 800; // Standard passport view size
                    let width = img.width;
                    let height = img.height;

                    // 2. Maintain Aspect Ratio
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }

                    canvas.width = width;
                    canvas.height = height;

                    // 3. Draw image to canvas
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    // 4. Compress to JPEG at 0.7 quality
                    const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);

                    // 5. Save to your form object
                    this.form.photo = compressedBase64;
                };
            };
        },
        async handleSubmit() {
            if (!this.form.photo) return alert("Please upload a passport photo");

            this.isSubmitting = true;

            try {
                // Stringify the data from 'this.form'
                await fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.form)
                });

                alert("Application submitted successfully!");
                this.$router.push('/thank-you');
            } catch (error) {
                console.error("Error!", error);
                alert("Submission failed. Please try again.");
            } finally {
                this.isSubmitting = false;
            }
        }
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
                                <label for="fullName" class="font-lg">Full Name(First Middle Last) <span
                                        class="text-red-600">*</span>
                                </label>
                                <input type="text" v-model="form.fullName"
                                    class="border-solid border-b w-full bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="fullName" required="true" placeholder="John Rover">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Phone Number -->
                                <label for="phoneNumber" class="font-lg">Phone Number <span
                                        class="text-red-600">*</span></label>
                                <input type="text" v-model="form.phone" placeholder="080..."
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="phoneNumber" maxlength="11" required="true"
                                    @input="form.phone = form.phone.replace(/[^0-9]/g, '')">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Email Address -->
                                <label for="emailAddress" class="font-lg">Email Address </label>
                                <input type="email" v-model="form.email"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="emailAddress" required="true" placeholder="info@xpenspay.com">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Home Address -->
                                <label for="homeAddress" class="font-lg">Home Address <span
                                        class="text-red-600">*</span></label>
                                <input type="text" v-model="form.homeAddress"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="homeAddress" required="true" placeholder="Home address">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Local Government Area -->
                                <label for="lga" class="font-lg">Local Government Area(LGA) <span
                                        class="text-red-600">*</span></label>
                                <input type="text" v-model="form.lga"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="lga" required="true" placeholder="Alimosho">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- State of Residence/Operation -->
                                <label for="stateAddress" class="font-lg">State of Residence/Operation <span
                                        class="text-red-600">*</span></label>
                                <input type="text" v-model="form.state"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="stateAddress" required="true" placeholder="Lagos">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Passport Photo -->
                                <label for="passportPhoto" class="font-lg">Passport Photo<span
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
                                <label for="bank" class="font-lg">Bank(Ex. GTBank, Zenith Bank, Diamond Bank,
                                    etc)<span class="text-red-600">*</span></label>
                                <input type="text" v-model="form.bankName"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="bank" required="true" placeholder="VFD Micro...">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- Bank Account Number -->
                                <label for="bankAccountNumber" class="font-lg">Bank Account Number<span
                                        class="text-red-600">*</span></label>
                                <input type="text" v-model="form.accountNumber" placeholder="2200330300..."
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="bankAccountNumber" required="true"
                                    @input="form.accountNumber = form.accountNumber.replace(/[^0-9]/g, '')">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- BVN -->
                                <label for="bvn" class="font-lg">Bank Verification Number (BVN)(Your BVN is required
                                    strictly for identity verification as per financial regulations and will be handled
                                    securely.)<span class="text-red-600">*</span></label>
                                <input type="text" v-model="form.bvn" placeholder="00000000000"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="bvn" required="true" maxlength="11"
                                    @input="form.bvn = form.bvn.replace(/[^0-9]/g, '')">
                            </div>
                            <div class="flex items-start gap-1 flex-col">
                                <!-- NIN -->
                                <label for="nin" class="font-lg">National Identity Number (NIN)(Your NIN is required
                                    strictly for identity verification as per financial regulations and will be handled
                                    securely.)<span class="text-red-600">*</span></label>
                                <input type="text" v-model="form.nin" placeholder="00000000000"
                                    class="border-solid w-full border-b bg-white focus:border-[#12AFC4] focus:outline-none"
                                    name="nin" required="true" @input="form.nin = form.nin.replace(/[^0-9]/g, '')">
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

<style scoped>
input::placeholder {
    font-size: 16px;
    opacity: 0.55;
}
</style>