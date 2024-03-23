<script>
  import '../reset.css'
  import '../main-grid.css'
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>
  
<div class="main-grid">
  <Navbar/>
  <slot/>
  <Footer/>
</div>
