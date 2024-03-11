<script>
   export let showModal = false
</script>

{#if showModal}
<div class="backdrop">
    <div class="modal">
        <button on:click class="close">X</button>
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
        position: relative;
        width: 400px;
        height: 200px;
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