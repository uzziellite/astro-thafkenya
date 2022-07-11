<template>
  <div class="relative pb-16 h-96 flex content-center items-center justify-center">
    <div class="absolute w-full h-full bg-cover" :style="`background-image: url(${background})`">
      <span id="blackOverlay"
        class="w-full h-full absolute bg-black opacity-20"
      ></span>
    </div>
    <div class="container relative mx-auto">
      <div class="grid place-items-center gap-4 lg:mt-20">
        <div class="px-4 col-span-3">
          <div class="md:pr-12 mt-6">
            <h1 class="text-white font-extrabold text-2xl md:text-3xl lg:text-4xl uppercase text-center">
              {{title}}
            </h1>
            <p class="my-4 lg:my-8 text-lg md:text-2xl text-white max-w-xl text-center">
              {{description}}
            </p>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    background: String,
    title: String,
    description: String
  }
}
</script>
