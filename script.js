function openPdf() {
    var dropdown = document.getElementById("countryDropdown");
    var selectedValue = dropdown.value;

    if (selectedValue) {
        window.open(selectedValue, '_blank');
    }
}