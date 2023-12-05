function openPdf() {
    var dropdown = document.getElementById("countryDropdown");
    var selectedValue = dropdown.value;

    if (selectedValue && selectedValue !== 'Select a country') {
        window.open(selectedValue, '_blank');
    }
}

// Attach the openPdf function to the 'blur' event as well
document.getElementById("countryDropdown").onblur = openPdf;