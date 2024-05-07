const searchBar = document.getElementById('searchBar');
const character = document.getElementsByClassName('character');

searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();

    Array.from(character).forEach(function(character) {

        const cardText = character.textContent.toLowerCase();

        if (cardText.includes(term)) {
            character.style.display = 'block';
        } else {
            character.style.display = 'none';
        }
    });
});