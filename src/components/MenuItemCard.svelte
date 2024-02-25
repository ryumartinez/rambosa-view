<div class="menu-item-card">
    <div class="menu-item-image">foto</div>
    <div class="menu-item-card-text">
        <h3>titulo</h3>
        <p>descripcion</p>
    </div>
    <p>precio</p>
</div>

<style>
    .menu-item-card {
        background-color: white;
        display: grid;
        grid-template-columns: auto 1fr auto;
        border-radius: 25px;
        padding: 1rem;
    }
    .menu-item-image {
        background-color: palegoldenrod;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        display: inline-block;
    }

    .menu-item-card-text {
        display: flex;
        align-items: center;
        padding-right: 1rem;
    }

    .menu-item-card-text > h3 {
        text-align: start;
        font-weight: bold;
    }

    .menu-item-card-text > p {
        text-align: start;
    }
</style>