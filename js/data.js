document.addEventListener("DOMContentLoaded", function () {
    const inputUnit = document.getElementById("inputUnit");
    const outputUnit = document.getElementById("outputUnit");
    const inputValue = document.getElementById("inputValue");
    const outputValue = document.getElementById("outputValue");

    // Conversion rates relative to 1 bit
    const conversionRates = {
        bits: 1,
        bytes: 8,
        kilobits: 1024,
        kilobytes: 1024 * 8,
        megabits: 1024 * 1024,
        megabytes: 1024 * 1024 * 8,
        gigabits: 1024 * 1024 * 1024,
        gigabytes: 1024 * 1024 * 1024 * 8,
        terabits: 1024 * 1024 * 1024 * 1024,
        terabytes: 1024 * 1024 * 1024 * 1024 * 8,
        petabits: 1024 * 1024 * 1024 * 1024 * 1024,
        petabytes: 1024 * 1024 * 1024 * 1024 * 1024 * 8
    };

    function convertData() {
        const input = parseFloat(inputValue.value);
        if (isNaN(input)) {
            outputValue.value = "";
            return;
        }

        // Convert input to bits first
        let bits = input * conversionRates[inputUnit.value];

        // Convert bits to the selected output unit
        let result = bits / conversionRates[outputUnit.value];

        outputValue.value = result.toFixed(4);
    }

    inputValue.addEventListener("input", convertData);
    inputUnit.addEventListener("change", convertData);
    outputUnit.addEventListener("change", convertData);
});
