
<div class="navbar">
	<p class="address">179 Murphy Court Riverside, CA 92501</p>
	<p class="schedule">Abierto de 8:00 a 18:00</p>
	<p class="logo">RAMBOSA</p>
	<ul class="links">
		<a>Inicio</a>
		<a>Menu</a>
		<a>Sobre Nosotros</a>
		<a>Ver ordenes</a>
	</ul>
</div>

<style>

	.navbar::after {
		content: '';
		width: 100%;
		border-bottom: solid 1px #e6fbcc;
		position: absolute;
		left: 0;
		top: 60px;
		z-index: 1;
	}


	.links {
		grid-row: 2 / 2;
		grid-column: 6 / span 2;
		display: flex;
		gap: 3em;
	}

	.navbar {
		position: absolute;
		z-index: 3;
		width: 100%;
	}
	.address {
		grid-row: 1 / 2;
		grid-column: 2 / 7;
	}
	.schedule {
		grid-row: 1 / 2;
		grid-column: 7 / span 2;
	}
	.logo {
		grid-row: 2 / 2;
		grid-column: 2 / 7;
	}

	
</style>
