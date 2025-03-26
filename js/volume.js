document.addEventListener("DOMContentLoaded", function () {
    const inputUnit = document.getElementById("inputUnit");
    const outputUnit = document.getElementById("outputUnit");
    const inputValue = document.getElementById("inputValue");
    const outputValue = document.getElementById("outputValue");

    const conversionRates = {
        uk_gallon: 4.54609,        // 1 UK Gallon = 4.54609 Liters
        us_gallon: 3.78541,        // 1 US Gallon = 3.78541 Liters
        liters: 1,                 // 1 Liter = 1 Liter
        milliliters: 0.001,        // 1 Milliliter = 0.001 Liters
        cc: 0.001,                 // 1 Cubic Centimeter (CC) = 0.001 Liters
        cubic_meters: 1000,        // 1 Cubic Meter = 1000 Liters
        cubic_inches: 0.0163871,   // 1 Cubic Inch = 0.0163871 Liters
        cubic_feet: 28.3168        // 1 Cubic Foot = 28.3168 Liters
    };

    function convertVolume() {
        const input = parseFloat(inputValue.value);
        if (isNaN(input)) {
            outputValue.value = "";
            return;
        }

        // Convert input to liters first
        let liters = input * conversionRates[inputUnit.value];

        // Convert liters to the selected output unit
        let result = liters / conversionRates[outputUnit.value];

        outputValue.value = result.toFixed(4);
    }

    inputValue.addEventListener("input", convertVolume);
    inputUnit.addEventListener("change", convertVolume);
    outputUnit.addEventListener("change", convertVolume);
});
