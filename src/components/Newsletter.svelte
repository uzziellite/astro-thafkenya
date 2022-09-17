<script>
	import {Directus} from "@directus/sdk"
	const directus = new Directus(import.meta.env.PUBLIC_CMS)
	let email = ""
	let message = ""
	let error
	let showForm
	let loading = false

	if(localStorage.getItem('news_letter')){
		showForm = false
	}else{
		showForm = true
	}

	const signup = async () => {
		try{
			
			loading = true

			await directus.items('thaf_newsletter').createOne({
				email
			})

			message = "Signup successful"

			localStorage.setItem('news_letter',1)

			loading = false

		}catch(err){
			console.error(err)
			error = "Unable to signup at the moment"
			loading = false
		}
	}	
</script>

{#if showForm}
	<div class="fixed inset-x-0 bottom-0 p-4 z-50">
	  <div class="relative max-w-xl p-6 bg-gray-300 dark:bg-gray-800 rounded-lg shadow-sm">
	    <button
	      type="button"
	      class="absolute p-1 bg-gray-200 dark:bg-black border border-gray-200 rounded-full -top-1 -right-1"
	      on:click={() => showForm = false}
	    >
	      <svg
	        xmlns="http://www.w3.org/2000/svg"
	        class="w-3 h-3"
	        viewBox="0 0 20 20"
	        fill="currentColor"
	      >
	        <path
	          fill-rule="evenodd"
	          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
	          clip-rule="evenodd"
	        />
	      </svg>
	    </button>

	    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
	      <img
	        class="object-cover w-full h-full rounded-xl"
	        src="/images/photo.avif"
	        alt=""
	      />

	      <div>
	        <h2 class="text-2xl font-medium">
	          Signup for our newsletter
	        </h2>
	        <p>Stay up-to-date with our latest progress and events</p>
	        <form on:submit|preventDefault={signup} class="mt-4">
	        	<div class="relative">
						  <label class="sr-only" for="email">Email</label>

						  <input
						    class="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 dark:border-blue-600 rounded dark:bg-gray-700"
						    id="email"
						    type="email"
						    placeholder="Email"
						    bind:value={email}
						  />

						  <span class="absolute text-gray-500 pointer-events-none -translate-y-1/2 top-1/2 right-4">
						    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						    </svg>
						  </span>
						</div>
						{#if loading}
			        <div class="mt-6 sm:text-right">
			          <button
			            class="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg">
			            Signing up <span class="animate-ping">...</span>
			          </button>
			        </div>
			      {:else}
			      	<div class="mt-6 sm:text-right">
			          <button
			            class="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg">
			            Sign Up
			          </button>
			        </div>
			      {/if}

		        {#if error}
			        <div class="text-sm text-red-600 mt-2">
			        	{error}
			        </div>
			      {:else}
			      	<div class="text-sm text-green-600 mt-2">
			        	{message}
			        </div>
			      {/if}
	        </form>
	      </div>
	    </div>
	  </div>
	</div>
{/if}