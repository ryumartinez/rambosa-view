<script>
	import MenuItemCard from '../components/MenuItemCard.svelte';
	import Modal from '../components/Modal.svelte';
	let showModal;

	const toggleModal = () => {
		showModal = !showModal;
	};
</script>

<Modal {showModal} on:click={toggleModal} />

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

<div class="hero">
	<h1 class="main__title hero__title">Rambosa</h1>
	<img
		class="hero__img"
		src="https://media-manager.starsinsider.com/gallery/1920/na_5e09b9264c1ff.jpg"
		alt=""
	/>
</div>

<div class="cta even-columns">
	<div>
		<h2>Nuestro Menu</h2>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur repellat facilis
			provident dolorum laborum blanditiis veritatis, ipsa sequi cumque soluta quod fugiat dolorem
			quam.
		</p>
	</div>
	<button on:click={toggleModal}>Modal</button>
</div>

<div class="full-split even-columns menu__section">
	<!-- <img class="menu__image" src="https://images.pexels.com/photos/1618929/pexels-photo-1618929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""> -->
	<div class="cards">
		<MenuItemCard />
		<MenuItemCard />
		<MenuItemCard />
		<MenuItemCard />
		<MenuItemCard />
		<MenuItemCard />
	</div>

	<div class="cards">
		<MenuItemCard />
		<MenuItemCard />
		<MenuItemCard />
		<MenuItemCard />
		<MenuItemCard />
		<MenuItemCard />
	</div>
</div>

<div class="sales-points even-columns three-columns">
	<div class="sales-points__sales-point">
		<h2 class="sales-points__title">Easier</h2>
		<p class="sales-point__body">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
	</div>
	<div class="sales-points__sales-point">
		<h2 class="sales-points__title">Faster</h2>
		<p class="sales-point__body">Delectus perferendis doloribus mollitia quibusdam facere eius!</p>
	</div>
	<div class="sales-points__sales-point">
		<h2 class="sales-points__title">Consistent</h2>
		<p class="sales-point__body">Nostrum possimus, porro ipsam iure soluta est!</p>
	</div>
</div>

<style>
	.cards {
		padding: 3em;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		flex-direction: column;
		background-color: #efefef;
	}

	.hero {
		padding-bottom: 0 !important;
		padding: 0;
		position: relative;
	}

	.navbar::after {
		content: '';
		width: 100%;
		border-bottom: solid 1px #e6fbcc;
		position: absolute;
		left: 0;
		top: 60px;
		z-index: 1;
	}

	.hero__title {
		grid-row: 1 / span 2;
		grid-column: 1 / -1;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
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

	.hero__img {
		opacity: 50%;
		grid-row: 1 / span 2;
		grid-column: 1 / -1;
		width: 100%;
		height: 100%;
		max-height: 60vh;
		object-fit: cover;
	}

	.cta {
		--col-width: 4;
		--col-start: 3;
	}

	.full-split {
		gap: 0;
	}

	img {
		display: block;
		max-width: 100%;
	}
	.btn {
		cursor: pointer;
		text-decoration: none;
		text-transform: uppercase;
		background: black;
		color: white;
		padding: 0.75em 2em;
		border-radius: 100vmax;
	}

	.main__title {
		font-size: clamp(3.5rem, 7vw + 1rem, 5rem);
		text-transform: uppercase;
		line-height: 0.9;
		margin-bottom: 0.2em;
	}

	h2 {
		font-size: 2rem;
		line-height: 0.9;
		text-transform: uppercase;
	}

	.hero {
		padding-bottom: 3em;
	}

	.sales-points {
		height: 440px;
		padding: 3rem 0;
		background: #222;
		text-align: center;
	}

	.cta {
		background: #222;
		padding: 3em 0;
		text-align: center;
		color: #f4f4f4;
		column-gap: 1em;
	}
</style>
