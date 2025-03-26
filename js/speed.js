document.addEventListener("DOMContentLoaded", function () {
    const inputUnit = document.getElementById("inputUnit");
    const outputUnit = document.getElementById("outputUnit");
    const inputValue = document.getElementById("inputValue");
    const outputValue = document.getElementById("outputValue");

    const conversionRates = {
        mps: 1,             // 1 Meter per second = 1 m/s
        kmph: 3.6,          // 1 m/s = 3.6 km/h
        inps: 39.3701,      // 1 m/s = 39.3701 inches per second
        ydps: 1.09361,      // 1 m/s = 1.09361 yards per second
        ftps: 3.28084,      // 1 m/s = 3.28084 feet per second
        mph: 2.23694,       // 1 m/s = 2.23694 miles per hour
        knots: 1.94384      // 1 m/s = 1.94384 knots
    };

    function convertSpeed() {
        const input = parseFloat(inputValue.value);
        if (isNaN(input)) {
            outputValue.value = "";
            return;
        }

        // Convert input to meters per second first
        let metersPerSecond = input / conversionRates[inputUnit.value];

        // Convert meters per second to the selected output unit
        let result = metersPerSecond * conversionRates[outputUnit.value];

        outputValue.value = result.toFixed(4);
    }

    inputValue.addEventListener("input", convertSpeed);
    inputUnit.addEventListener("change", convertSpeed);
    outputUnit.addEventListener("change", convertSpeed);
});
