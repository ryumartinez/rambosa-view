<main>
    <header>
        <div class="top-items">
            <div class="address centered-grid-item">address</div>
            <div class="schedule centered-grid-item">schedule</div>
        </div>
        <nav>
            <div class="centered-grid-item">a</div>
            <div class="centered-grid-item">b</div>
            <div class="centered-grid-item">c</div>
        </nav>
    </header>
    
    <div><slot></slot></div>
    <footer>
        <nav>
           <div class="centered-grid-item">a</div>
           <div class="centered-grid-item">b</div>
           <div class="centered-grid-item">c</div>
           <div class="centered-grid-item">d</div>
           <div class="centered-grid-item">e</div>
        </nav>
        <div class="copy-right">
            <div class="copy-right-item1 centered-grid-item">copy-right content 1</div>
            <div class="copy-right-item2 centered-grid-item">copy-right content 2</div>
        </div>
    </footer>
</main>

<style>
    /* Global variables */
    :global(:root){
       --header-color: purple
    }

     /*Allow to create a new stacking context without needing to set a z-index */
    :global(:root){
        isolation: isolate;
    }

    /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
    :global(*:where(:not(iframe, canvas, img, svg, video):not(svg *))) {
        all: unset;
        display: revert;
    }

    /*
    Remove list styles (bullets/numbers)
    in case you use it with normalize.css
    */
    :global(ol, ul) {
        list-style: none;
    }

    /*
    Reset marging and padding
    Add accessible line-height
    Improve text rendering
    */
    :global(body) {     
        margin: 0;
        padding: 0; 
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /* Use a more-intuitive box-sizing model. */
    :global(*, *::before, *::after) {
        box-sizing: border-box;
    }

    /* For images to not be able to exceed their container */
    :global(img, picture, video, canvas, svg) {
        display: block;
        max-width: 100%;
    }

    /* Remove built-in form typography styles */
    :global(input, button, textarea, select) {
        font: inherit;
    }

    /* Avoid text overflows */
    :global(p, h1, h2, h3, h4, h5, h6) {
        overflow-wrap: break-word;
    }

    /* Removes spacing between cells in tables */
    :global(table) {
        border-collapse: collapse;
    }

    /* Revert the 'white-space' property for textarea elements on Safari */
    :global(textarea) {
        white-space: revert;
    }

    main {
        height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }

    header {
        position: relative;
        background-color: #474A45;
        height: 160px;
        display: grid;
        grid-template-rows: 60px 1fr;
        grid-template-columns: 200px 1fr 1fr 1fr 200px;
    }

    header > nav {
        display: grid;
        grid-template-columns: subgrid;
        grid-column: 2 / 5;
    }

    header > .top-items {
        display: grid;
        grid-template-columns: subgrid;
        grid-column: 2 / 5;
    }

    header > .top-items > .address {
        grid-column: 1 / span 1;
    }

    header > .top-items > .schedule {
        grid-column: 3 / span 1;
    }

    header::after {
        content: '';
        width: 100%;
        border-bottom: solid 1px #E6FBCC;
        position: absolute;
        left: 0;
        top: 50px;
        z-index: 1;
    }

    footer {
        position: relative;
        background-color: #3F7B54;
        height: 440px;
        display: grid;
        grid-template-columns: 200px repeat(5,1fr) 200px;
        grid-template-rows: 80px 1fr 80px;
    }

    footer::after {
        content: '';
        width: 100%;
        border-bottom: solid 1px #E6FBCC;
        position: absolute;
        left: 0;
        bottom: 110px;
        z-index: 1;
    }

    footer > nav {
        display: grid;
        grid-gap: 1px;
        grid-template-columns: subgrid;
        grid-column: 2 / 7;
        grid-row: 2 / 3;
    }

    footer > .copy-right {
        display: grid;
        grid-template-columns: subgrid;
        grid-column: 2 / 7;
        grid-row: 3/3;
    }

    footer > .copy-right > .copy-right-item1 {
        grid-column: 1 / span 2;
    }

    footer > .copy-right > .copy-right-item2 {
        grid-column: 5 / span 1;
    }

    .centered-grid-item {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>