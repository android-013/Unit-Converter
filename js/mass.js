document.addEventListener("DOMContentLoaded", function () {
    const inputUnit = document.getElementById("inputUnit");
    const outputUnit = document.getElementById("outputUnit");
    const inputValue = document.getElementById("inputValue");
    const outputValue = document.getElementById("outputValue");

    const conversionRates = {
        tons: 1000,          // 1 Metric Ton = 1000 kg
        uk_tons: 1016.05,    // 1 UK Ton = 1016.05 kg
        us_tons: 907.184,    // 1 US Ton = 907.184 kg
        pounds: 0.453592,    // 1 Pound = 0.453592 kg
        ounces: 0.0283495,   // 1 Ounce = 0.0283495 kg
        kilograms: 1,        // 1 Kilogram = 1 kg
        grams: 0.001         // 1 Gram = 0.001 kg
    };

    function convertMass() {
        const input = parseFloat(inputValue.value);
        if (isNaN(input)) {
            outputValue.value = "";
            return;
        }

        // Convert input to kilograms first
        let kilograms = input * conversionRates[inputUnit.value];

        // Convert kilograms to the selected output unit
        let result = kilograms / conversionRates[outputUnit.value];

        outputValue.value = result.toFixed(4);
    }

    inputValue.addEventListener("input", convertMass);
    inputUnit.addEventListener("change", convertMass);
    outputUnit.addEventListener("change", convertMass);
});
