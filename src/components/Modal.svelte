<script >
   export let showModal = false

   const handleKeyDown = (event) => {
if (event.key === 'Escape') {
showModal = false
}
}
</script>

{#if showModal}
	<!-- svelte-ignore ally-click-events-have-key-events -->
	<div class="backdrop" on:click|self>
		<div class="modal">
			<button on:click class="close">X</button>
            <slot name="header"/>
			<slot/>
		</div>
	</div>
{/if}
<svelte:window on:keydown={handleKeyDown} />

<style>
	.backdrop {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		position: fixed;
		background: rgba(169, 169, 169, 0.9);
		z-index: 10;
	}

	.modal {
		position: relative;
		width: 900px;
		height: 500px;
		border-radius: 10px;
		background-color: #242424;
	}

	.close {
		position: absolute;
		font-size: 25px;
		top: 10px;
		right: 10px;
		height: 30px;
		opacity: 0.3;
		background: none;
		margin: 0;
		padding: 0;
	}
</style>
