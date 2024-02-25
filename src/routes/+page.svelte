<script>
    import MenuItemCard from "./../components/MenuItemCard.svelte"
</script>

<section class="hero">
    Hero
</section>

<section class="menu-view">
    <div class="menu-grid">
        <div>
            <h1>Nuestro Menu</h1>
            <p>Descripcion</p>
        </div>
        <nav>
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>d</div>
            <div>e</div>
        </nav>
        <div class="menu-items-container">
            <div class="menu-sipnopsis">menu sipnopsis</div>
            <div class="wea">
                <MenuItemCard/>
                <MenuItemCard/>
                <MenuItemCard/>
                <MenuItemCard/>
                <MenuItemCard/>
            </div>
        </div>
    </div>
</section>

<style>

    nav {
        display: flex;
        gap: 1rem;
    }

    .hero {
        height: 590px;
        background-color: #474A45;
    }

    .wea {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .menu-view {
        background-color: #E6FBCC;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu-grid {
        height: 1422px;
        width: 1230px;
        display: grid;
        grid-template-rows: 246px 70px 1fr;
        
    }

    .menu-items-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media only screen and (max-width: 600px) {
            display: flex;
            flex-direction: column-reverse;
        }
    }
</style>
