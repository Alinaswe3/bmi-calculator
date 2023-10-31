<script>
    import Feature from "../components/Feature.svelte";
</script>

<section
        class="relative grid grid-cols-3 gap-[3.2rem] py-[9.6rem] tablet:grid-cols-1 tablet:gap-[4rem]">
    <Feature iconUrl="/images/icon-eating.svg">
        <svelte:fragment slot="header">
            Healthy eating
        </svelte:fragment>
        <svelte:fragment slot="body">
            Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and
            mood.
        </svelte:fragment>
    </Feature>

    <Feature iconUrl="/images/icon-exercise.svg">
        <svelte:fragment slot="header">
            Regular exercise
        </svelte:fragment>
        <svelte:fragment slot="body">
            Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness
            and
            longevity
        </svelte:fragment>
    </Feature>

    <Feature iconUrl="/images/icon-sleep.svg">
        <svelte:fragment slot="header">
            Adequate sleep
        </svelte:fragment>
        <svelte:fragment slot="body">
            Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and
            rejuvenation.
        </svelte:fragment>
    </Feature>
    <div class="background"></div>
</section>

<style>
    .background {
        border-bottom-right-radius: 35px;
        border-top-right-radius: 35px;
        position: absolute;
        width: 82vw;
        min-width: 105%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.25;
        background: var(--Gradient-1, linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%));
    }
</style>