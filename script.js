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

// Track which box is the active input
let activeInput = 'box1';

function setActiveInput(box) {
    activeInput = box;
}


