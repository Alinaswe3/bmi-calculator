<script lang="ts">
    import Hero from "./lib/sections/Hero.svelte";
</script>

<main class="container">
    <Hero/>

</main>
<div id="hero-overlay"></div>

<style>
    .container {
        max-width: 1160px;
        margin: auto;
        padding: 0 4rem;
    }

    #hero-overlay {
        position: fixed;
        z-index: -1;
        top: 0;
        height: 100vh;
        width: 65%;
        border-radius: 0 0 35px 35px;
        background-image: linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%);
    }

    @media (max-width: 62.5em) {
        #hero-overlay {
            width: 100%;
        }
    }

</style>
