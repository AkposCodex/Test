<template>
  <!-- <section id="agent"
    class="flex flex-wrap gap-10 justify-between items-center text-left mt-28 max-w-full w-[1392px] max-md:mt-10">
    <div class="flex flex-col min-w-[240px] w-[600px] max-md:max-w-full">
      <div class="flex flex-col w-full text-black max-md:max-w-full">
        <h2 class="text-3xl font-bold max-md:max-w-full">
          Become an Xpenspay Agent by attending our Agent activation event.
        </h2>
        <p class="mt-3 text-lg font-light max-md:max-w-full">
          You will receive an SMS or email regarding the date and location of
          the event.
        </p>
      </div>
      <form name="AgentSignup" ref="AgentSignup" action="https://formspree.io/f/xdkojked"
        class="flex flex-col mt-6 max-w-full text-lg w-[690px]" method="POST">
        <input type="hidden" name="form-name" value="AgentSignup" />
        <div class="flex flex-col w-full font-light text-black max-md:max-w-full">
          <div class="mb-5">
            <label for="name" class="sr-only">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required="true"
              class="gap-2.5 self-stretch p-2.5 w-full whitespace-nowrap rounded border border-solid border-zinc-400 max-md:max-w-full" />
          </div>
          <div class="mb-5">
            <label for="phone" class="sr-only">Phone number</label>
            <input type="tel" name="phone" id="phone" placeholder="Phone number" required="true"
              class="gap-2.5 self-stretch p-2.5 w-full rounded border border-solid border-zinc-400 max-md:max-w-full" />
          </div>
          <div class="mb-5">
            <label for="email" class="sr-only">Email address</label>
            <input type="email" id="email" name="email" placeholder="Email address(optional)"
              class="gap-2.5 self-stretch p-2.5 w-full rounded border border-solid border-zinc-400 max-md:max-w-full" />
          </div>
        </div>
        <input type="submit"
          class="gap-2.5 self-stretch p-2.5 max-w-full font-medium text-white bg-cyan-500 rounded-xl w-[221px]" />
      </form>
    </div>
    <div
      class="flex overflow-hidden flex-col justify-center py-px min-w-[240px] md:w-[300px] lg:block hidden max-lg:w-[400px]">
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/e82c2ebe0c20608c16409085e0280e5de4ead642dba5a1d581c314aef32f9b6c?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
        alt="Agent activation event illustration" class="object-contain w-full aspect-[0.7]" />
    </div>
  </section> -->

  <div
    class="bg-[#EEEEEE] mt-20 py-[60px] justify-between items-center text-start flex xl:gap-32 gap-16 px-[8px] md:px-[50px]">
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