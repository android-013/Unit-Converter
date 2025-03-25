document.addEventListener("DOMContentLoaded", function () {
    const inputUnit = document.getElementById("inputUnit");
    const outputUnit = document.getElementById("outputUnit");
    const inputValue = document.getElementById("inputValue");
    const outputValue = document.getElementById("outputValue");

    const conversionFactors = {
        mm: 1,
        cm: 10,
        m: 1000,
        km: 1000000,
        in: 25.4,
        ft: 304.8,
        yd: 914.4,
        mi: 1609344,
        nmi: 1852000
    };

    function convertLength() {
        const input = parseFloat(inputValue.value);
        if (isNaN(input)) {
            outputValue.value = "";
            return;
        }

        const inputFactor = conversionFactors[inputUnit.value];
        const outputFactor = conversionFactors[outputUnit.value];
        const result = (input * inputFactor) / outputFactor;
        outputValue.value = result.toFixed(6);
    }

    inputValue.addEventListener("input", convertLength);
    inputUnit.addEventListener("change", convertLength);
    outputUnit.addEventListener("change", convertLength);
});
