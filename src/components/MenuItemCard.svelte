<div class="menu-item-card">
    <div class="menu-item-image">foto</div>
    <h3 class="title">titulo</h3>
    <p class="description">descripcion</p>
    <p class="price">precio</p>
</div>

<style>
    .menu-item-card {
        width: 500px;
        background-color: white;
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: 30px 1fr;
        border-radius: 25px;
        padding: 1rem;
    }

    .menu-item-card > h3.title {
        grid-column: 2 / span 1;
        grid-row: auto; 
    }

    .menu-item-card > p.description {
        grid-column: 2 / span 1;
        grid-row: auto;
    }

    .menu-item-card > p.price {
        grid-column: 3 / span 1;
        grid-row: 1 / span 2;
    }

    .menu-item-image {
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
        background-color: palegoldenrod;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        display: inline-block;
    }
</style>