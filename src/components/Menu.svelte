<script>
    import MenuItemCard from '../components/MenuItemCard.svelte';
	import Modal from '../components/Modal.svelte';

    let showModal;

	const toggleModal = () => {
		showModal = !showModal;
	};
</script>
<Modal {showModal} on:click={toggleModal} />
<div class="cta even-columns">
	<div>
		<h2>Nuestro Menu</h2>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur repellat facilis
			provident dolorum laborum blanditiis veritatis, ipsa sequi cumque soluta quod fugiat dolorem
			quam.
		</p>
	</div>
	<button on:click={toggleModal} class="btn modal__btn">Modal</button>
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

<style>
	.modal__btn {
		width: 300px;
		text-align: center;
		margin: auto;
	}

	.cards {
		padding: 3em;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		flex-direction: column;
		background-color: #efefef;
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

	.cta {
		background: #222;
		padding: 3em 0;
		text-align: center;
		color: #f4f4f4;
		column-gap: 1em;
	}
</style>