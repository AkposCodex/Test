<template>


  <div id="agent-signup"
    class="bg-[#EEEEEE] mt-20 py-[60px] justify-between items-center text-start flex xl:gap-32 gap-16 px-[40px] rounded-xl mx-auto">
    <div class="flex flex-1 flex-col gap-8 w-full">
      <p class="text-xl text-[#5A5A5A] font-bold">Become An Xpenspay Agent Today</p>
      <form action="https://formspree.io/f/xdkojked" method="POST" onSubmit="fbq('track','Lead')"
        class="flex flex-col gap-4 font-bold">
        <div class="flex items-start gap-1 flex-col">
          <label for="fullName" class="font-normal">Full Name <span class="text-red-600">*</span>
          </label>
          <input type="text" class="p-2 rounded border-b w-full focus:border-[#12AFC4] focus:outline-none"
            name="fullName">
        </div>
        <div class="flex items-start gap-1 flex-col">
          <label for="phoneNumber" class="font-normal">Phone Number <span class="text-red-600">*</span></label>
          <input type="text" class="p-2 rounded w-full border-b focus:border-[#12AFC4] focus:outline-none"
            name="phoneNumber">
        </div>
        <div class="flex items-start gap-1 flex-col">
          <label for="emailAddress" class="font-normal">Email Address </label>
          <input type="text" class="p-2 rounded w-full border-b focus:border-[#12AFC4] focus:outline-none"
            name="emailAddress">
        </div>
        <div class="flex items-start gap-1 flex-col">
          <label for="emailAddress" class="font-normal">Home Address <span class="text-red-600">*</span></label>
          <input type="text" class="p-2 rounded w-full border-b focus:border-[#12AFC4] focus:outline-none"
            name="homeAddress">
        </div>
        <div class="flex items-start gap-1 flex-col">
          <label for="emailAddress" class="font-normal">Local Government Area(LGA) <span
              class="text-red-600">*</span></label>
          <input type="text" class="p-2 rounded w-full border-b focus:border-[#12AFC4] focus:outline-none" name="lga">
        </div>
        <div class="flex items-start gap-1 flex-col">
          <label for="emailAddress" class="font-normal">State of Residence/Operation <span
              class="text-red-600">*</span></label>
          <input type="text" class="p-2 rounded w-full border-b focus:border-[#12AFC4] focus:outline-none"
            name="stateAddress">
        </div>
        <button class="md:w-max w-full mt-2 px-10 py-2 bg-black font-bold text-white">Sign Up</button>
      </form>
    </div>
    <div class="md:flex-1 hidden md:block">
      <img src="../assets/illustrations/signupIllust.svg" alt="" class="">
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  setup() {
    // Get toast interface
    const toast = useToast();

    // Use it!
    // toast("I'm a toast!");

    // or with options
    // toast.success("My toast content", {
    //   timeout: 2000
    // });
    return { toast }
  },

  methods: {
    myMethod() {
      this.toast.success("Form submitted");
      this.$refs.AgentSignup.reset();
    }
  }
}
</script>