<script lang="ts">
    import Hero from "./lib/sections/Hero.svelte";
    import About from "./lib/sections/About.svelte";
    import Features from "./lib/sections/Features.svelte";
    import Limitations from "./lib/sections/Limitations.svelte";
</script>

<main class="container">
    <Hero/>
    <About/>
    <Features/>
    <Limitations/>
</main>
<div id="hero-overlay"></div>

<style>
    .container {
        max-width: 1160px;
        margin: 0 auto;
        padding: 0 4rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 9rem;
    }

    @media (max-width: 38em) {
        .container {
            padding: 0 1.5rem;
            gap: 7rem;
        }
    }

    #hero-overlay {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
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
