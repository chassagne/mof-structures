function openPdf() {
    var dropdown = document.getElementById("countryDropdown");
    var selectedValue = dropdown.value;

    if (selectedValue && selectedValue !== 'Select a country') {
        if (confirm('Do you want to open the PDF?')) {
            window.open(selectedValue, '_blank');
        }
    }
}

document.getElementById("countryDropdown").onchange = openPdf;