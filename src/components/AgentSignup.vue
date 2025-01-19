<template>
 

  <div id="agent-signup"
    class="bg-[#EEEEEE] mt-20 py-[60px] justify-between items-center text-start flex xl:gap-32 gap-16 px-[40px] rounded-xl mx-[40px]">
    <div class="flex flex-1 flex-col gap-8 w-full">
      <p class="text-xl text-[#5A5A5A] font-bold">Become An Xpenspay Agent Today</p>
      <form action="https://formspree.io/f/xdkojked" method="POST" class="flex flex-col gap-4 font-bold">
        <div class="flex gap-2 flex-col">
          <label for="fullName" class=""><span class="fa-solid fa-user"></span>Full Name</label>
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
        <div class="flex gap-2 flex-col">
          <label for="emailAddress" class="">Home Address</label>
          <input type="text" class="p-3 rounded" name="homeAddress">
        </div>
        <div class="flex gap-2 flex-col">
          <label for="emailAddress" class="">Local Government Area(LGA)</label>
          <input type="text" class="p-3 rounded" name="lga">
        </div>
        <div class="flex gap-2 flex-col">
          <label for="emailAddress" class="">State of Residence/Operation</label>
          <input type="text" class="p-3 rounded" name="stateAddress">
        </div>
        <button class="md:w-max w-full px-10 py-2 bg-black font-bold text-white">Submit</button>
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