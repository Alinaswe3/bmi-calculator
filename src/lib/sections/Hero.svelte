<main class="">
    <div>
        <h1>Body Mass<br/>Index Calculator</h1>
        <p>
            Better understand your weight in relation to your height using our body mass index (BM) calculator. While
            BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your
            overall health and well-being.
        </p>
    </div>
    <div>
        <form>
            <h2>
                Enter your details below
            </h2>
            <fieldset id="units">
                <div>
                    <label for="metric">Metric</label>
                    <input id="metric" name="units" type="radio" value="metric"/>
                </div>
                <div>
                    <label for="imperial">Imperial</label>
                    <input id="imperial" name="units" type="radio" value="imperial"/>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label for="height">Height</label>
                    <input id="height" type="number"/>
                </div>
                <div>
                    <label for="weight">Weight</label>
                    <input id="weight" type="number"/>
                </div>
            </fieldset>
        </form>
        <div>
            <p>
                <span>
                    Your BMI is...
                </span>
                <span>
                    23.4
                </span>
            </p>
            <p>
                Your BMI suggests you’re a healthy weight.
                Your ideal weight is between 63.3kgs - 85.2kgs.
            </p>
        </div>
    </div>
    <img alt="Logo" src="../../assets/images/logo.svg"/>
</main>