<template>
  <nav class="flex overflow-hidden mt-4 w-screen max-md:px-5 max-md:max-w-screen items-center">
    <div
      class="flex md:flex-row flex-col justify-between max-w-full items-center md:text-lg md:mx-10 font-medium text-center text-black w-[898px] md:w-full">
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/6a21e9e92c25a36bb6144942c9b9e60e3351226a0fdb4687a4f2b830305470d8?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
        alt="Xpenspay logo" class="object-contain shrink-0 aspect-[4.1] w-[197px]" />
      <div class="flex gap-5 items-center text-black">
        <RouterLink class="self-stretch text-black font-bold border-b border-black w-[57px]" to="/">Home</RouterLink>
        <RouterLink class="self-stretch text-black" to="/about">About</RouterLink>
        <a href="#agent" class="self-stretch text-black" tabindex="0">Become an agent</a>
      </div>
    </div>
  </nav>
</template>
