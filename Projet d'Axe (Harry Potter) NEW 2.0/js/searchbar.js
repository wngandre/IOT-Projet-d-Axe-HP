// Obtenez la barre de recherche et les cartes
const searchBar = document.getElementById('searchBar');
const character = document.getElementsByClassName('character');

// Ajoutez un écouteur d'événements à la barre de recherche
searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();

    // Parcourez chaque carte
    Array.from(character).forEach(function(character) {
        // Obtenez le texte de la carte
        const cardText = character.textContent.toLowerCase(); // Utilisez la nouvelle variable ici

        // Si le texte de la carte contient le terme recherché, affichez la carte, sinon cachez-la
        if (cardText.includes(term)) {
            character.style.display = 'block';
        } else {
            character.style.display = 'none';
        }
    });
});