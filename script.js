function showCategory(category) {
    const content = document.getElementById('content');
    content.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)} Conversion</h2>
                         <p>Conversion options for ${category} will go here.</p>`;
}









