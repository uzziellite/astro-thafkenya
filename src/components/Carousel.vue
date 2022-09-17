<template>
	<div class="bg-cover mt-4 sm:-mt-16 xl:mt-0 h-96 md:h-[32rem] relative" :style="`background-image:url(${images[index]})`">
  	<div class="h-full bg-black bg-opacity-30"></div>
    <svg @click="loadPrevBanner" class="hidden md:flex w-12 h-12 absolute left-2 text-white cursor-pointer z-10" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    <svg @click="loadNextBanner" class="hidden md:flex w-12 h-12 absolute right-2 text-white cursor-pointer z-10" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
  	<div class="absolute top-12 grid gap-6 px-2 pt-12 sm:top-32 text-white overflow-x-hidden w-full">
  		<div class="bg-white p-2 md:p-12 shadow-md bg-opacity-10 rounded-lg w-full">
  			<template v-for="(a,b) in titles">
	    		<h1 :class="`text-2xl md:text-3xl lg:text-5xl uppercase font-bold text-center ${b == index ? '' : 'hidden'}`">
	    			{{ titles[index] }}
	    		</h1>
  			</template>
  			<template v-for="(c,d) in texts">
	    		<p :class="`md:text-xl mt-6 animate-text-left md:text-center ${d == index ? '' : 'hidden'}`">
	    			{{ texts[index] }}
	    		</p>
  			</template>
  		</div>
  	</div>
  </div>
</template>

<script setup>
const images = [
	'https://o5pwp6dq.directus.app/assets/a75193a5-a832-43bb-955c-13fe59a4df58?fit=contain&format=webp',
	'https://o5pwp6dq.directus.app/assets/1ec55387-7421-4809-8845-4cd58a011e6f?fit=contain&format=webp',
  'https://o5pwp6dq.directus.app/assets/26ad5d1e-23b9-47c4-ab8e-c14cee0461cb?fit=contain&format=webp'
]

const titles = [
	'Welcome',
	'How we operate',
  'Where we operate'
]

const texts = [
	'Total health advocacy foundation aims at providing health solutions to the poor and those in marginalized areas',
	'Advocacy is our main tool thereby accelerating the achievement of our solutions.',
  'Our activities are centered in five main counties in Kenya; Nairobi, Mombasa, Kirinyaga, Marsabit, and Turkana.'
]
</script>

<script>
export default{
	data(){
		return{
			index:0
		}
	},
	methods:{
		loadNextBanner(){
      const max = 2
      const nindex = this.index + 1
      if(nindex > max){
        this.index = 0
      }else{
        this.index += 1
      }
    },
    loadPrevBanner(){
      const min = 0
      const nindex = this.index - 1
      if(nindex < min){
        this.index = 2
      }else{
        this.index -= 1
      }
    }
	},
	created(){
		setInterval(() => {
			this.loadNextBanner()
		},15000)
	}
}
</script>

<style>
.animate-text-left {
  animation-duration: 2s;
  animation-name: slideleft;
  animation-timing-function: linear;
}

@keyframes slideleft {
  from {
    margin-right: -50%;
  }

  to {
    margin-left: 0%;
  }
}
</style>
