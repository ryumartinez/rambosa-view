<script>
  import '../reset.css'
  import '../main-grid.css'
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Hero from '../components/Hero.svelte';
</script>
  
<div class="main-grid">
  <Navbar/>
  <Hero/>
  <slot/>
  <Footer/>
</div>
