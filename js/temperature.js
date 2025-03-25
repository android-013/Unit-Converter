document.addEventListener("DOMContentLoaded", function () {
    const inputUnit = document.getElementById("inputUnit");
    const outputUnit = document.getElementById("outputUnit");
    const inputValue = document.getElementById("inputValue");
    const outputValue = document.getElementById("outputValue");

    function convertTemperature() {
        const input = parseFloat(inputValue.value);
        if (isNaN(input)) {
            outputValue.value = "";
            return;
        }

        let celsius;

        // Convert input to Celsius first
        if (inputUnit.value === "celsius") {
            celsius = input;
        } else if (inputUnit.value === "fahrenheit") {
            celsius = (input - 32) * (5 / 9);
        } else if (inputUnit.value === "kelvin") {
            celsius = input - 273.15;
        }

        let result;

        // Convert Celsius to the selected output unit
        if (outputUnit.value === "celsius") {
            result = celsius;
        } else if (outputUnit.value === "fahrenheit") {
            result = celsius * (9 / 5) + 32;
        } else if (outputUnit.value === "kelvin") {
            result = celsius + 273.15;
        }

        outputValue.value = result.toFixed(2);
    }

    inputValue.addEventListener("input", convertTemperature);
    inputUnit.addEventListener("change", convertTemperature);
    outputUnit.addEventListener("change", convertTemperature);
});
