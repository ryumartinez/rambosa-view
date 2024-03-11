<script>
   export let showModal = false
</script>

{#if showModal}
<div class="backdrop">
    <div class="modal">
        Hello
    </div>
</div>
{/if}

<style>
    .backdrop{
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
        width: 400px;
        height: 200px;
        border-radius: 10px;
        background-color: #242424;
    }
</style>