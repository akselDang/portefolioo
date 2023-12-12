function toggleDetails(projetId) {
    var details = document.getElementById('details-' + projetId);
    details.style.display = (details.style.display === 'none' || details.style.display === '') ? 'block' : 'none';
}
