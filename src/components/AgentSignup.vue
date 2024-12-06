<template>
  <section
    class="flex flex-wrap gap-10 justify-between items-center text-left mt-28 max-w-full w-[1392px] max-md:mt-10"
  >
    <div class="flex flex-col min-w-[240px] w-[600px] max-md:max-w-full">
      <div class="flex flex-col w-full text-black max-md:max-w-full">
        <h2 class="text-4xl font-bold max-md:max-w-full">
          Become an Xpenspay Agent by attending our Agent activation event.
        </h2>
        <p class="mt-3 text-lg font-light max-md:max-w-full">
          You will receive an SMS or email regarding the date and location of
          the event.
        </p>
      </div>
      <form class="flex flex-col mt-6 max-w-full text-lg w-[690px]">
        <div
          class="flex flex-col w-full font-light text-black max-md:max-w-full"
        >
          <div class="mb-5">
            <label for="name" class="sr-only">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              class="gap-2.5 self-stretch p-2.5 w-full whitespace-nowrap rounded border border-solid border-zinc-400 max-md:max-w-full"
            />
          </div>
          <div class="mb-5">
            <label for="phone" class="sr-only">Phone number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone number"
              class="gap-2.5 self-stretch p-2.5 w-full rounded border border-solid border-zinc-400 max-md:max-w-full"
            />
          </div>
          <div class="mb-5">
            <label for="email" class="sr-only">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Email address(optional)"
              class="gap-2.5 self-stretch p-2.5 w-full rounded border border-solid border-zinc-400 max-md:max-w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          class="gap-2.5 self-stretch p-2.5 mt-6 max-w-full font-medium text-white bg-cyan-500 rounded-xl w-[221px]"
        >
          Sign up
        </button>
      </form>
    </div>
    <div
      class="flex overflow-hidden flex-col justify-center py-px min-w-[240px] md:w-[300px] lg:block hidden max-lg:w-[400px]"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/c49e2462ddbf40d0944f306255d5e3e6/e82c2ebe0c20608c16409085e0280e5de4ead642dba5a1d581c314aef32f9b6c?apiKey=c49e2462ddbf40d0944f306255d5e3e6&"
        alt="Agent activation event illustration"
        class="object-contain w-full aspect-[0.7]"
      />
    </div>
  </section>
</template>
