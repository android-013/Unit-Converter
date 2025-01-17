function showCategory(category) {
    const content = document.getElementById('content');
    content.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)} Conversion</h2>
                         <p>Conversion options for ${category} will go here.</p>`;
}

function showCategory(category) {
    // Hide all sections
    const sections = document.querySelectorAll('.conversion-section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show the selected category section
    const selectedSection = document.getElementById(`${category}-conversion`);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}

const conversionRates = {
    sqin: 1, // Reference unit
    sqft: 144,
    cm2: 6.4516,
    m2: 1550,
    km2: 1550003100,
    miles2: 4014489600,
    acres: 6272640,
    hectares: 15500031,
};

// Convert area based on user interaction
function convertArea(source) {
    const box1Value = parseFloat(document.getElementById('area-box1').value) || 0;
    const box2Value = parseFloat(document.getElementById('area-box2').value) || 0;
    const unit1 = document.getElementById('area-unit1').value;
    const unit2 = document.getElementById('area-unit2').value;

    setTimeout(() => {
    if (source === 'box1') {
        // Convert box1 value to box2 value
        const valueInSqInches = box1Value * conversionRates[unit1];
        const result = valueInSqInches / conversionRates[unit2];
        document.getElementById('area-box2').value = result.toFixed(4);
    } else if (source === 'box2') {
        // Convert box2 value to box1 value
        const valueInSqInches = box2Value * conversionRates[unit2];
        const result = valueInSqInches / conversionRates[unit1];
        document.getElementById('area-box1').value = result.toFixed(4);
    }
    }, 2000);
}

// Handle unit changes for area-unit1 and area-unit2
function adjustUnits(source) {
    const box1Value = parseFloat(document.getElementById('area-box1').value) || 0;
    const unit1 = document.getElementById('area-unit1').value;
    const unit2 = document.getElementById('area-unit2').value;

    if (source === 'unit1') {
        // When unit1 changes, keep box1 value fixed and update box2
        const valueInSqInches = box1Value * conversionRates[unit1];
        const result = valueInSqInches / conversionRates[unit2];
        document.getElementById('area-box2').value = result.toFixed(4);
    } else if (source === 'unit2') {
        // When unit2 changes, keep box1 value fixed and update box2
        const valueInSqInches = box1Value * conversionRates[unit1];
        const result = valueInSqInches / conversionRates[unit2];
        document.getElementById('area-box2').value = result.toFixed(4);
    }
}
