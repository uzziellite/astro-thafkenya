<template>
	<footer class="bg-white dark:bg-stone-800 dark:text-white">
	<div class="container grid sm:grid-cols-3 gap-x-2 mx-auto">
		<div class="mx-4">
			<h2 class="font-black mt-4 text-xl text-green-600">
				Covid 19 Updates
			</h2>
			<div class="overflow-hidden dark:text-gray-100">
				<div class="flex justify-between">
					<div class="flex flex-col flex-1 gap-4">
						<p class="text-lg">
							Confirmed New cases today
						</p>
						<div class="flex justify-between">
							<div class="flex gap-2">
								<span class="text-xl font-semibold" v-if="loaded">
									{{data.Confirmed}}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div class="flex items-center gap-8 py-2 border-t dark:text-gray-400 dark:border-gray-700">
					<div class="flex items-center space-x-1">
						<span class="font-bold text-sm" v-if="loaded">
							{{data.Cumulative_Confirmed}}
						</span>
						<span class="text-sm">Total</span>
					</div>
					<div class="flex items-center space-x-1">
						<span class="font-bold text-sm" v-if="loaded">
							{{data.Cumulative_Deaths}}
						</span>
						<span class="text-sm">Deaths</span>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col mx-4 space-y-2">
			<h2 class="font-black mt-4 text-xl text-green-600">
				Useful Links
			</h2>
		    <a href="/about-us" class="text-sm">
		    	About Us
		    </a>
				<a href="/news" class="text-sm">
		      News
		    </a>
		    <a href="/work" class="text-sm">
		      Work
		    </a>
		    <a href="/donations" class="text-sm">
		      Donations
		    </a>
		    <a href="/contact-us" class="text-sm">
		    	Contact
		    </a>
		    <a href="/history" class="text-sm">
		    	History
		    </a>
		</div>
		<div class="bg-transparent mx-4">
			<h2 class="font-black mt-4 text-xl text-green-600">
				Social
			</h2>
			<div class="flex flex-row my-6 space-x-2">
				<a href="https://www.facebook.com/Total-Health-Advocacy-Foundation-100611306027699" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="green" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="white" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
					<span class="sr-only">Link to Facebook page</span>
				</a>
				<a href="https://twitter.com/advocacy_total" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="_osn9zIN2f6RhTsY8WhY4a" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="green" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"/></svg>
					<span class="sr-only">Link to Twitter page</span>
				</a>
				<!--<a href="https://youtube.com/channel/UCX07ND87gBnpta499plw399w" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ffa00a" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="#FFF" d="M20 31L20 17 32 24z"/></svg>
				</a>
				<a href="https://www.linkedin.com/in/trace-africa-smart-480363221/" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ffa00a" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/></svg>
				</a>-->
				<a href="https://instagram.com/thafkenya1/" target="_blank">
					<svg fill="green" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg>
					<span class="sr-only">Link to Instagram page</span>
				</a>
			</div>
		</div>
	</div>
	<div class="mt-12 text-center py-4 text-sm">
			&copy; {{ new Date().getFullYear() }} Total Health Advocacy Foundation
		</div>
</footer>
</template>

<script>
export default{
	data(){
		return{
			data:{},
			loaded:false
		}
	},
	methods:{
		loadCovidStats(){
			fetch('/covid').then((response) => response.json()).then(resp => {
				this.data = resp
				this.loaded = true
			}).catch(err => {
				console.error(err)
			})
		}
	},
	created(){
		this.loadCovidStats()
	}
}
</script>

