<script lang="ts">
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import '../reset.css';
	import '../main-grid.css';
	import '../common.css';
	import '../styles.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Hero from '../components/Hero.svelte';

  export let data
	let { supabase, session } = data
	$: ({ supabase, session } = data)
  
	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<svelte:head>
	<title>Rambosa</title>
</svelte:head>

<div class="main-grid">
	<Navbar />
	<Hero />
	<slot />
	<Footer />
</div>
