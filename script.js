function loadPDF() {
    var selectedCountry = document.getElementById('countrySelect').value;
    var previewContainer = document.getElementById('pdfPreview');

    if (selectedCountry) {
        previewContainer.innerHTML = `<embed src="${selectedCountry}" width="100%" height="100%" type="application/pdf">`;
    } else {
        previewContainer.innerHTML = "<p>Select a country to view the organisational structure of its Ministry of Finance.</p>";
    }
}