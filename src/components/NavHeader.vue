<script>
import { ref } from 'vue';
import { CAccordion } from '@coreui/vue'
export default {
  setup() {
    const open = ref(false)
    return {
      open
    };
  },
  methods: {
    openNav() {
      this.open = !this.open
    }
  }
}
</script>

<template>
  <!-- <nav class="flex overflow-hidden mt-4 w-screen max-md:px-5 max-md:max-w-screen items-center">
    <div
      class="flex md:flex-row flex-col justify-between max-w-full items-center md:text-lg md:mx-10 font-medium text-center text-black w-[898px] md:w-full">
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/6a21e9e92c25a36bb6144942c9b9e60e3351226a0fdb4687a4f2b830305470d8?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
        alt="Xpenspay logo" class="object-contain shrink-0 aspect-[4.1] w-[197px]" />
      <div class="flex gap-5 items-center text-black">
        <RouterLink class="self-stretch text-black font-bold border-b border-black w-[57px]" to="/">Home</RouterLink>
        <RouterLink class="self-stretch text-black" to="/about2">About</RouterLink>
        <a href="#agent" class="self-stretch text-black" tabindex="0">Become an agent</a>
      </div>
    </div>
  </nav> -->
  <nav class="flex w-screen lg:max-[1440px]:px-[60px] flex-col lg:items-center shadow-sm lg:flex-row">
    <nav class="w-full h-[60px] flex px-[16px] items-center justify-between">
      <div class="justify-center w-full lg:w-auto flex lg:flex-0">
        <img loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/6a21e9e92c25a36bb6144942c9b9e60e3351226a0fdb4687a4f2b830305470d8?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
          alt="Xpenspay logo" class="object-contain shrink-0 aspect-[4.1] w-[150px]" />
      </div>
      <a class="justify-end flex lg:hidden" @click="open = !open;"> <img
          src="../assets/icons/Menu.svg" class="aspect-square w-[32px]" alt="">
      </a>
    </nav>
    <div class="flex gap-4 flex-col items-start text-black p-4" :class="{ 'hidden': !open, 'lg:block': open }">
      <RouterLink class=" text-black " to="/">Home
      </RouterLink>
      <RouterLink class=" text-black" to="/about2">About</RouterLink>
      <a href="#agent" class=" text-black" tabindex="0">Become an agent</a>
    </div>
    <div class="lg:flex gap-4 items-start w-auto text-black hidden ">
      <RouterLink class=" text-black  w-max" to="/">Home
      </RouterLink>
      <RouterLink class=" text-black w-max" to="/about2">About</RouterLink>
      <a href="#agent" class=" w-max text-black" tabindex="0">Become an agent</a>
    </div>
  </nav>
</template>
