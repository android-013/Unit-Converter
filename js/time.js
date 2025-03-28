document.addEventListener("DOMContentLoaded", function () {
    const inputUnit = document.getElementById("inputUnit");
    const outputUnit = document.getElementById("outputUnit");
    const inputValue = document.getElementById("inputValue");
    const outputValue = document.getElementById("outputValue");

    // Conversion rates relative to 1 millisecond
    const conversionRates = {
        milliseconds: 1,
        seconds: 1000,
        minutes: 1000 * 60,
        hours: 1000 * 60 * 60,
        days: 1000 * 60 * 60 * 24,
        weeks: 1000 * 60 * 60 * 24 * 7,
        months: 1000 * 60 * 60 * 24 * 30, // Assuming 30 days per month
        years: 1000 * 60 * 60 * 24 * 365 // Assuming 365 days per year
    };

    function convertTime() {
        const input = parseFloat(inputValue.value);
        if (isNaN(input)) {
            outputValue.value = "";
            return;
        }

        // Convert input to milliseconds first
        let milliseconds = input * conversionRates[inputUnit.value];

        // Convert milliseconds to the selected output unit
        let result = milliseconds / conversionRates[outputUnit.value];

        outputValue.value = result.toFixed(4);
    }

    inputValue.addEventListener("input", convertTime);
    inputUnit.addEventListener("change", convertTime);
    outputUnit.addEventListener("change", convertTime);
});
