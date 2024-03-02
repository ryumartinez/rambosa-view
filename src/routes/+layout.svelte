<slot></slot>
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
</style>