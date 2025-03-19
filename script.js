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







