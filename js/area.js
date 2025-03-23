function toggleDropdown(id) {
    document.getElementById(id).classList.toggle("show");
}

function selectUnit(selectId, unit) {
    document.getElementById(selectId).value = unit;
    toggleDropdown(selectId + "Dropdown");
}

function convertArea() {
    let input = parseFloat(document.getElementById("inputValue").value);
    let inputUnit = document.getElementById("inputUnit").value;
    let outputUnit = document.getElementById("outputUnit").value;
    let conversionRates = {
        "Acres": 4046.86,
        "Ares": 100,
        "Hectares": 10000,
        "Square cm": 0.0001,
        "Square ft": 0.092903,
        "Square in": 0.00064516,
        "Square m": 1
    };
    let inputInSqMeters = input * (conversionRates[inputUnit] || 1);
    let outputValue = inputInSqMeters / (conversionRates[outputUnit] || 1);
    document.getElementById("outputValue").value = outputValue.toFixed(4);
}