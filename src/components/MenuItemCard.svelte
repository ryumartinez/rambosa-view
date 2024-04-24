<div class="menu-item-card">
	<img
		class="menu-item-image"
		src="https://th.bing.com/th/id/OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8?rs=1&pid=ImgDetMain"
		alt="wea"
	/>
	<div class="text-container">
		<h3 class="title">titulo</h3>
		<p class="description">descripcion</p>
	</div>
	<p class="price">precio</p>
	<div class="buttons">
		<button>Pedir</button>
		<button>Editar</button>
		<button>Eliminar</button>
	</div>
</div>

<style>
	.buttons {
		bottom: 0;
		right: 0;
		position: absolute;
		display: flex;
		gap: 1em;
	}

	.menu-item-card {
		position: relative;
		width: 700px;
		background-color: white;
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: 50px 1fr;
		border-radius: 25px;
		padding: 1rem;
	}

	.text-container {
		grid-row: 1 / span 2;
		padding-left: 2rem;
	}

	.menu-item-card > p.price {
		grid-column: 3 / span 1;
		grid-row: 1 / span 2;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.menu-item-image {
		grid-column: 1 / span 1;
		grid-row: 1 / span 2;
		background-color: palegoldenrod;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		display: inline-block;
	}
</style>
