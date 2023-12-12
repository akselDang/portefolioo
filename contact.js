function showAlert(event) {
    // Empêcher le formulaire de se soumettre normalement
    event.preventDefault();
    
    // Afficher l'alerte
    alert("Le message a été envoyé!");
}