<script lang="ts">
    import Limit from "../components/Limit.svelte";
</script>

<section class="grid grid-cols-12 gap-[3.2rem] tablet:justify-items-center">
    <div class="col-span-6 tablet:col-span-12 tablet:text-center">
        <h2 class="mb-[3.5rem] heading text-[3.2rem] tracking-[-1.6px]">Limitations of BMI</h2>
        <p class="text-b-md text-dark-electric-blue">
            Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
            groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be
            beneficial to use.
        </p>
    </div>
    <div class="col-start-8 col-end-12 tablet:col-span-6 tablet:col-start-auto">
        <Limit iconUrl="/images/icon-gender.svg">
            <svelte:fragment slot="header">
                Adequate sleep
            </svelte:fragment>
            <svelte:fragment slot="body">
                Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration
                and
                rejuvenation.
            </svelte:fragment>
        </Limit>
    </div>
    <div class="col-start-5 col-span-4 tablet:col-span-6 tablet:col-start-auto">

        <Limit iconUrl="/images/icon-age.svg">
            <svelte:fragment slot="header">
                Age
            </svelte:fragment>
            <svelte:fragment slot="body">
                In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat
                content.
            </svelte:fragment>
        </Limit>
    </div>
    <div class="col-start-9 col-span-4 tablet:col-span-6 tablet:col-start-auto">
        <Limit iconUrl="/images/icon-muscle.svg">
            <svelte:fragment slot="header">
                Muscle
            </svelte:fragment>
            <svelte:fragment slot="body">
                BMI may mis-classify muscular individuals as overweight or obese, as it doesn't differentiate muscle
                from
                fat.
            </svelte:fragment>
        </Limit>
    </div>
    <div class="col-start-3 col-span-4 tablet:col-span-6 tablet:col-start-auto">
        <Limit iconUrl="/images/icon-pregnancy.svg">
            <svelte:fragment slot="header">
                Pregnancy
            </svelte:fragment>
            <svelte:fragment slot="body">
                Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy
                BMI is advisable to minimise health risks for both mother and child.
            </svelte:fragment>
        </Limit>
    </div>
    <div class="col-start-7 col-span-4 tablet:col-span-6 tablet:col-start-auto">
        <Limit iconUrl="/images/icon-race.svg">
            <svelte:fragment slot="header">
                Race
            </svelte:fragment>
            <svelte:fragment slot="body">
                Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than
                others. To learn more, it is advised to discuss this with your GP or practice nurse.
            </svelte:fragment>
        </Limit>
    </div>

</section>
