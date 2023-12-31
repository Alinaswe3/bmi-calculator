<script lang="ts">
    import Input from "../components/Input.svelte";

    let systemSelected = "metric";
    const HEALTHY_LOWER_LIMIT = 18.5;
    const HEALTHY_UPPER_LIMIT = 24.9;
    const OVERWEIGHT_LOWER_LIMIT = 25;
    const OVERWEIGHT_UPPER_LIMIT = 29.9;

    // BMI variables
    let bmiValue: number = 0;
    let bmiDiagnosis: string = "";

    // Utility functions
    const roundOff = (value: number, digits: number): number => {
        return Math.round(value * Math.pow(10, digits)) / Math.pow(10, digits);
    }

    // BMI calculator functions
    const calcBMIInMetric = (heightIncm: number, weightInkg: number): number => {
        if (!heightIncm || !weightInkg) return 0;
        const height: number = heightIncm / 100;
        const bmi: number = (weightInkg / (height * height));
        return roundOff(bmi, 1);
    }

    const calcBMIInImperial = (heightInft: number, heightInin: number, weightInst: number, weightInlbs: number): number => {
        if (!heightInin || !heightInft || !weightInst || !weightInlbs) return 0;
        const height: number = convertImperial(heightInft, 12, heightInin);
        const weight: number = convertImperial(weightInst, 14, weightInlbs);
        const bmi: number = ((weight) / (height * height)) * 703
        return roundOff(bmi, 1);
    }

    const convertImperial = (value: number, unit: number, additional: number): number => {
        return (value * unit) + additional;
    }

    const calcIdealWeight = (limit: number, height: number): number => {
        return limit * Math.pow(height, 2);
    }

    const calcIdealWeightInImperial = (lowerLimit: number, upperLimit: number, height: number, additionalHeight: number): string => {
        const convertedHeight = convertImperial(height, 12, additionalHeight);
        const lowLimit = calcIdealWeight(lowerLimit, convertedHeight) / 703;
        const upLimit = calcIdealWeight(upperLimit, convertedHeight) / 703;
        const addPoundsLower = roundOff(lowerLimit % 14, 0);
        const addPoundsUpper = roundOff(upperLimit % 14, 0);
        return `${roundOff(lowLimit / 14, 0)}st ${addPoundsLower}lbs - ${roundOff(upLimit / 14, 0)}st ${addPoundsUpper}lbs`
    }

    // Heights

    let hIncm: number;
    let hInft: number;
    let hInin: number;

    // Weights
    let wInkg: number;
    let wInlbs: number;
    let wInst: number;

    // Conversions
    $: {
        if (systemSelected === "metric") {
            bmiValue = calcBMIInMetric(hIncm, wInkg);
        } else {
            bmiValue = calcBMIInImperial(hInft, hInin, wInst, wInlbs)
        }

        if (bmiValue < HEALTHY_LOWER_LIMIT) bmiDiagnosis = "underweight";
        else if (bmiValue > HEALTHY_LOWER_LIMIT && bmiValue < HEALTHY_UPPER_LIMIT) bmiDiagnosis = "a healthy weight";
        else if (bmiValue > OVERWEIGHT_LOWER_LIMIT && bmiValue < OVERWEIGHT_UPPER_LIMIT) bmiDiagnosis = "overweight";
        else bmiDiagnosis = "obese";

    }

</script>

<header class="grid grid-cols-2 tablet:grid-cols-1 justify-between gap-[5rem] relative min-h-screen h-fit pt-[17rem] tablet:pt-[6rem]">
    <div class="pt-[10rem] tablet:text-center">
        <h1 class="tracking-[-3.2px] text-h-xl font-semibold leading-heading mb-[3.5rem] text-gunmetal">Body Mass<br/>Index
            Calculator
        </h1>
        <p class="text-dark-electric-blue leading-body text-b-md">
            Better understand your weight in relation to your height using our body mass index (BM) calculator. While
            BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your
            overall health and well-being.
        </p>
    </div>
    <div class="form-container flex flex-col gap-[3.2rem] p-[3.2rem] tablet:p-[2rem] sm:p-[1rem] bg-white rounded-[1.6rem] h-fit ">
        <form class="flex flex-col gap-[3.2rem] ">
            <h2 class="text-[2.4rem] font-semibold tracking-[-1.2px]">
                Enter your details below
            </h2>
            <fieldset class="grid grid-cols-2 gap-x-[2.4rem] text-b-md font-semibold" id="units">
                <div class="flex items-center gap-[1.8rem]">
                    <input bind:group={systemSelected} checked id="metric" name="units" type="radio" value="metric"/>
                    <label for="metric">Metric</label>
                </div>
                <div class="flex items-center gap-[1.8rem]">
                    <input bind:group={systemSelected} id="imperial" name="units" type="radio" value="imperial"/>
                    <label for="imperial">Imperial</label>
                </div>
            </fieldset>
            <fieldset
                    class="grid grid-cols-2 items-center justify-center gap-[2.4rem] font-normal text-b-sm text-dark-electric-blue">
                {#if systemSelected === "metric"}
                    <Input bind:value={hIncm} dimension="Height" id="height" unit="cm"/>
                    <Input bind:value={wInkg} dimension="Weight" id="weight" unit="kg"/>
                {:else }

                    <Input bind:value={hInft} dimension="Height" id="height" unit="ft"/>
                    <Input bind:value={hInin} dimension="Height" {systemSelected} id="weight" unit="in"/>

                    <Input bind:value={wInst} dimension="Weight" id="weight" unit="st"/>
                    <Input bind:value={wInlbs} dimension="Weight" {systemSelected} id="weight" unit="lbs"/>

                {/if}
            </fieldset>
        </form>
        {#if bmiValue === 0}
            <p class="results flex flex-col gap-[1.6rem]">
                <span class="text-h-md tracking-[-1.2px] font-semibold">Welcome!</span>
                <span class="text-b-sm leading-body">Enter your height and weight and you’ll see your BMI result here</span>
            </p>
        {:else }
            <div class="results grid grid-cols-2 sm:grid-cols-1 gap-[2.8rem] sm:gap-[1.6rem] items-center sm:rounded-0">
                <p class="flex flex-col gap-[0.8rem] font-semibold">
                <span class="text-b-md">
                    Your BMI is...
                </span>
                    <span class="text-h-xl ">
                    {bmiValue.toFixed(1)}
                </span>
                </p>
                <p class="font-normal text-b-sm leading-body">
                    {` Your BMI suggests you’re `}
                    <strong>
                        {bmiDiagnosis}.
                    </strong>
                    {#if bmiValue > HEALTHY_LOWER_LIMIT && bmiValue < HEALTHY_UPPER_LIMIT}
                        {#if systemSelected === "metric"}
                            Your ideal weight is
                            <strong>
                                {`${roundOff(calcIdealWeight(HEALTHY_LOWER_LIMIT, hIncm / 100), 1)}kgs - ${roundOff(calcIdealWeight(HEALTHY_UPPER_LIMIT, hIncm / 100), 1)}kgs`}
                            </strong>
                        {:else}
                            Your ideal weight is
                            <strong>
                                {`${calcIdealWeightInImperial(HEALTHY_LOWER_LIMIT, HEALTHY_UPPER_LIMIT, hInft, hInin)}`}
                            </strong>
                        {/if}
                    {:else}
                        You are advised to seek additional health support from a certified health professional
                    {/if}
                </p>
            </div>
        {/if}
    </div>
    <img alt="Logo"
         class="absolute top-[7rem] tablet:top-[4rem] left-0 tablet:left-1/2 tablet:-translate-x-1/2 h-[6.4rem] w-[6.4rem]"
         src="/images/logo.svg"/>
</header>

<style>
    .form-container {
        box-shadow: 16px 32px 56px 0 rgba(143, 174, 207, 0.25);
    }

    .results {
        color: #fff;
        padding: 3.2rem;
        border-radius: 100px 999px 999px 100px;
        background: linear-gradient(90deg, #345FF6 0%, #587DFF 100%);
    }

    @media (max-width: 38em) {
        .results {
            padding: 2.4rem;
        }
    }

    @media (max-width: 24em) {
        .results {
            border-radius: 16px;
        }
    }

    /* Custom Radio Button */

    input[type="radio"] {
        appearance: none;
        background-color: #fff;
        margin: 0;
        min-width: 3rem;
        min-height: 3rem;
        border: 1px solid #D8E2E7;
        border-radius: 50%;
        display: grid;
        place-content: center;
        transition: 200ms transform ease;
    }

    input[type="radio"]::before {
        content: "";
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: #345FF6;
        transform: scale(0);
        transition: 200ms transform ease-in-out;
    }

    input[type="radio"]:checked::before {
        transform: scale(1);
    }


    input[type="radio"]:checked {
        border: none;
        background-color: #D6E6FE;
    }

    input[type="radio"]:not(:checked):hover {
        border: 1px solid #345FF6;
    }

    /***********************/

</style>