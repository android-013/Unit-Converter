document.getElementById("inputValue").addEventListener("input", convertArea);
document.getElementById("inputUnit").addEventListener("change", convertArea);
document.getElementById("outputUnit").addEventListener("change", convertArea);

function convertArea() {
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let inputUnit = document.getElementById("inputUnit").value;
    let outputUnit = document.getElementById("outputUnit").value;

    if (isNaN(inputValue)) {
        document.getElementById("outputValue").value = "";
        return;
    }

    const conversionRates = {
        acres: 4046.86,
        ares: 100,
        hectares: 10000,
        sqcm: 0.0001,
        sqft: 0.092903,
        sqin: 0.00064516,
        sqm: 1
    };

    let valueInSqMeters = inputValue * conversionRates[inputUnit];
    let convertedValue = valueInSqMeters / conversionRates[outputUnit];
    document.getElementById("outputValue").value = convertedValue.toFixed(4);
}