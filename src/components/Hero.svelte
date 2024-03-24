<div class="hero">
	<h1 class="main__title hero__title">Rambosa</h1>
	<img
		class="hero__img"
		src="https://media-manager.starsinsider.com/gallery/1920/na_5e09b9264c1ff.jpg"
		alt=""
	/>
</div>

<style>
	.hero {
		padding-bottom: 0 !important;
		padding: 0;
	}
	.hero__title {
		grid-row: 1 / span 2;
		grid-column: 1 / -1;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
	}
	.main__title {
		font-size: clamp(3.5rem, 7vw + 1rem, 5rem);
		text-transform: uppercase;
		line-height: 0.9;
		margin-bottom: 0.2em;
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
</style>
