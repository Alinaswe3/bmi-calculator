<header class="grid grid-cols-2 justify-between gap-[5rem] relative min-h-fit h-screen pt-[17rem]">
    <div class="pt-[10rem]">
        <h1 class="tracking-[-3.2px] text-h-xl font-semibold leading-heading mb-[3.5rem] text-gunmetal">Body Mass<br/>Index
            Calculator
        </h1>
        <p class="text-dark-electric-blue leading-body text-b-md">
            Better understand your weight in relation to your height using our body mass index (BM) calculator. While
            BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your
            overall health and well-being.
        </p>
    </div>
    <div class="form-container flex flex-col gap-[3.2rem] p-[3.2rem] bg-white rounded-[1.6rem] h-fit ">
        <form class="flex flex-col gap-[3.2rem] ">
            <h2 class="text-[2.4rem] font-semibold tracking-[-1.2px]">
                Enter your details below
            </h2>
            <fieldset class="grid grid-cols-2 gap-x-[2.4rem] text-b-md font-semibold" id="units">
                <div class="flex items-center gap-[1.8rem]">
                    <input checked id="metric" name="units" type="radio" value="metric"/>
                    <label for="metric">Metric</label>
                </div>
                <div class="flex items-center gap-[1.8rem]">
                    <input id="imperial" name="units" type="radio" value="imperial"/>
                    <label for="imperial">Imperial</label>
                </div>
            </fieldset>
            <fieldset class="grid grid-cols-2 gap-x-[2.4rem] font-normal text-b-sm text-dark-electric-blue">
                <div class="flex gap-[0.8rem] flex-col">
                    <label for="height">Height</label>
                    <div class="input-container flex py-[2rem] text-h-md px-[2.4rem] gap-[2.4rem] rounded-[12px] border border-borders">
                        <input class="appearance-none text-gunmetal w-full outline-none" id="height"
                               min="0"
                               placeholder="0"
                               step="0.1"
                               type="number"/>
                        <span class="font-semibold text-blue tracking-[-1.2px] text-h-md">cm</span>
                    </div>
                </div>
                <div class="flex gap-[0.8rem] flex-col">
                    <label for="weight">Weight</label>
                    <div class="input-container flex py-[2rem] text-h-md px-[2.4rem] gap-[2.4rem] rounded-[12px] border border-borders">
                        <input class="appearance-none text-gunmetal w-full outline-none" id="weight" min="0"
                               placeholder="0"
                               step="0.1"
                               type="number"/>
                        <span class="font-semibold text-blue tracking-[-1.2px] text-h-md">kg</span>
                    </div>
                </div>
            </fieldset>
        </form>
        <div class="results p-[3.2rem] text-white grid grid-cols-2 gap-[3.2rem] items-center">
            <p class="flex flex-col gap-[0.8rem] font-semibold">
                <span class="text-b-md">
                    Your BMI is...
                </span>
                <span class="text-h-xl ">
                    23.4
                </span>
            </p>
            <p class="font-normal text-b-sm leading-body">
                Your BMI suggests you’re a healthy weight.
                Your ideal weight is between 63.3kgs - 85.2kgs.
            </p>
        </div>
    </div>
    <img alt="Logo" class="absolute top-[7rem] left-0 h-[6.4rem] w-[6.4rem]" src="../../assets/images/logo.svg"/>
</header>

<style>
    .form-container {
        box-shadow: 16px 32px 56px 0 rgba(143, 174, 207, 0.25);
    }

    .results {
        border-radius: 100px 999px 999px 100px;
        background: linear-gradient(90deg, #345FF6 0%, #587DFF 100%);
    }

    /* Custom Radio Button */

    input[type="radio"] {
        appearance: none;
        background-color: #fff;
        margin: 0;
        width: 3rem;
        height: 3rem;
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

    .input-container {
        transition: 200ms border ease-in;
        cursor: pointer;
    }

    .input-container:has(input:focus) {
        border: 1px solid #345FF6;
    }

</style>