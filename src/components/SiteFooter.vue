<template>
  <footer
    class="flex overflow-hidden flex-col self-stretch mt-28 w-full bg-neutral-100 lg:max-[1440px]:px-[40px] px-[16px] py-[30px] max-md:mt-10 max-md:max-w-full">
    <div
      class="flex flex-wrap gap-10 lg:justify-between justify-center items-start self-center  w-full max-md:max-w-full">
      <nav class="flex flex-wrap gap-10 items-start grow text-black min-w-[240px]  max-md:max-w-full">
        <div class="flex flex-col items-start w-auto">
          <h3 class="font-bold">Your Account</h3>
          <RouterLink to="#support" class="mt-2" tabindex="0">Contact Support</RouterLink>
          <RouterLink to="#agent-signup" class="mt-2" tabindex="1">Become an Agent</RouterLink>
          <RouterLink to="#help" class="mt-2" tabindex="2">Help</RouterLink>
        </div>
        <div class="flex flex-col items-start w-auto">
          <h3 class="font-bold">Xpenspay</h3>
          <RouterLink to="/about" class="mt-2" tabindex="0">About</RouterLink>
          <RouterLink to="/about" class="mt-2" tabindex="1">Mission and Vision</RouterLink>
          <RouterLink to="/about" class="mt-2" tabindex="2">Compliance</RouterLink>
          <RouterLink to="/about" class="mt-2" tabindex="3">Our Partners</RouterLink>
        </div>
        <div class="flex flex-col items-start min-w-[240px] w-auto">
          <h3 class="font-bold">Safety Guidelines</h3>
          <RouterLink to="/about" class="mt-2" tabindex="0">Protecting your account</RouterLink>
          <RouterLink to="/about" class="mt-2" tabindex="1">What happens to my money?</RouterLink>
          <RouterLink to="/about" class="mt-2" tabindex="2">FAQ</RouterLink>
        </div>
      </nav>
      <div class="flex flex-col items-start justify-start min-w-[240px] w-[426px] lg:max-[1440px]:w-auto">
        <p class="text-black text-xl">
          Create an account and start getting the fastest speeds in Nigeria
        </p>
        <div class="flex gap-3.5 md:self-center mt-3.5 max-w-full">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/fdd90d0ec841f5a45148c0f3014e3ee3dcaf912a04da03cb6702ad9efacfee8e?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
            alt="App Store download button"
            class="object-contain shrink-0 max-w-full rounded-lg aspect-[3.37] w-[165px]" />
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/4b7e7d82aa0c845b9a0d4d5ed62f70b77ae8c0695f46051c2d35aa0f06019db9?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
            alt="Google Play download button" class="object-contain shrink-0 max-w-full aspect-[2.98] w-[146px]" />
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-16 max-w-full  text-md text-right text-black w-[958px] max-md:mt-10">
      <nav class="flex flex-wrap gap-8 w-full justify-center md:justify-start max-md:max-w-full">
        <span class="font-bold">© 2024 Xpenspay</span>
        <RouterLink to="#cookie-policy" tabindex="0">Cookie Policy</RouterLink>
        <RouterLink to="#terms" tabindex="1">Terms & Conditions</RouterLink>
        <RouterLink to="#privacy" tabindex="2">Privacy Policy</RouterLink>
        <RouterLink to="#privacy" tabindex="3">Cookie Settings</RouterLink>
      </nav>
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/0affe808b6f7862ba411c28976a3e9ca595e55f5b86932fd1d32bdda5d2df5c4?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
        alt="Payment partners and security certifications"
        class="object-contain hidden mt-7 max-w-full aspect-[4.1] w-[250px]" />
    </div>
  </footer>
</template>
