<template>
	<header class="top-0 fixed z-50 w-full p-1 lg:p-2 bg-white dark:bg-stone-700 dark:text-stone-100 shadow-lg lg:shadow-sm">
		<!--Desktop Header Version-->
		<div class="container flex justify-between lg:h-16 mx-auto lg:justify-center md:space-x-8">
			<ul class="items-stretch hidden space-x-3 lg:flex">
				<li class="flex">
					<a href="/" class="flex items-center px-4 -mb-1">
						Home
					</a>
				</li>
				<li class="flex">
					<a href="/about-us" class="flex items-center px-4 -mb-1">
						About
					</a>
				</li>
				<li class="hidden lg:flex flex items-center">
          <div class="px-3 py-2 flex items-center">
            <div class="relative" @mouseover="workActive = true" @mouseleave="workActive = false">
              <button type="button" class="flex items-center px-4 -mb-1" :aria-expanded="workActive ? 'true' : 'false'">
                <span>Work</span>
                <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div :class="`w-[35rem] absolute z-10 -ml-6 mt-0 transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 ${workActive ? '' : 'hidden'} shadow-lg`" @mouseover="workActive = true" @mouseleave="workActive = false">
                <div class="shadow-lg overflow-hidden">
                  <div :class="`relative grid ${lgrid} bg-white dark:bg-stone-800 p-1 lg:p-2 divide-x divide-green-600 dark:divide-stone-100 divide-dashed`">
                  	<div class="flex flex-col p-4" v-for="item in categories" :key="item.category">
                    	<h3 class="my-2 uppercase">
                    		{{item.category}}
                    	</h3>
                    	<ul class="text-sm flex flex-col space-y-4 text-stone-500 dark:text-stone-400">
                    		<template v-for="data in subcategories">
	                    		<template v-if="item.category === data.category.category">
														<li class="hover:text-black hover:dark:text-white" @click="workActive = ! workActive">
															<a :href="`/activity/${data.slug}`">
																{{data.title}}
															</a>
														</li>
	                    		</template>
                    		</template>
											</ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
			</ul>
			<a href="/" aria-label="Back to homepage" class="flex items-center">
				<img src="/images/logo.svg" class="w-20" width="50" height="50" alt="Logo">
			</a>
			<ul class="items-stretch hidden space-x-3 lg:flex">
				<li class="flex">
					<a href="/news" class="flex items-center px-4 -mb-1">
						News
					</a>
				</li>
				<li class="flex">
					<a href="/donations" class="flex items-center px-4 -mb-1">
						Donations
					</a>
				</li>
				<li class="flex">
					<a href="/contact-us" class="flex items-center px-4 -mb-1">
						Contact
					</a>
				</li>
			</ul>
			<button @click="openNavbar" title="Mobile Navigation Bar" type="button" class="p-4 lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 sm:w-8 sm:h-8 dark:text-stone-100"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
			</button>
		</div>
		<!-- Mobile Header Version -->
		<ul :class="`flex-col ${navbarOpen ? '' : 'hidden'} space-y-2 text-lg lg:hidden`">
			<li>
				<a @click="openNavbar" href="/" class="flex -mb-1 dark:border-transparent">
					Home
				</a>
			</li>
			<li>
				<a @click="openNavbar" href="/about-us" class="flex -mb-1 dark:border-transparent">
					About
				</a>
			</li>
			<li>
				<a @click="openNavbar" href="/work" class="flex -mb-1 dark:border-transparent">
					Work
				</a>
			</li>
			<li>
				<a @click="openNavbar" href="/news" class="flex -mb-1 dark:border-transparent">
					News
				</a>
			</li>
			<li>
				<a @click="openNavbar" href="/donations" class="flex -mb-1 dark:border-transparent">
					Donations
				</a>
			</li>
			<li>
				<a @click="openNavbar" href="/contact-us" class="flex -mb-1 dark:border-transparent">
					Contact
				</a>
			</li>
		</ul>
	</header>
</template>

<script>
export default{
	props:{
		lgrid: String,
		categories: Object | Array,
		subcategories: Object | Array
	},
	data(){
		return{
			navbarOpen:false,
			workActive:false,

		}
	},
	methods:{
		openNavbar(){
			this.navbarOpen = ! this.navbarOpen
		}
	}
}
</script>
