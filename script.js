function updatePdfLink() {
    var dropdown = document.getElementById("countryDropdown");
    var selectedValue = dropdown.value;
    var link = document.getElementById("pdfLink");

    if (selectedValue) {
        link.href = selectedValue;
        link.style.display = 'inline';
    } else {
        link.style.display = 'none';
    }
}

document.getElementById("countryDropdown").onchange = updatePdfLink;