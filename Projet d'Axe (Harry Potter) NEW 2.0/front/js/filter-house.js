document.getElementById("houseFilter").addEventListener("change", function (e) {
  var house = e.target.value;
  fetchCards(house);
});

function fetchCards(h) {
  fetch("https://hp-api.lainocs.fr/characters")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(h);
      if (h) {
        data = data.filter((characters) => characters.house === h);
      } else {
        data = data.filter((characters) => characters.house === "");
      }
      console.log(data);
      displayCards(data);
    })
    .catch((error) => console.log(error));
}

function displayCards(cards) {
  var cardContainer = document.getElementById("characters");
  cardContainer.innerHTML = "";
  cards.forEach(function (card) {
    var cardElement = document.createElement("div");
    cardElement.classList.add("character-card");
    var cardImage = document.createElement("img");
    cardImage.classList.add("characters");
    cardImage.src = card.image;
    var cardName = document.createElement("h2");
    cardName.classList.add("card-name");
    cardName.textContent = card.name;
    var cardLink = document.createElement("a");
    cardLink.href =
      "single-hp.html?slug=" +
      encodeURIComponent(card.slug) +
      "&image=" +
      encodeURIComponent(card.image);
    cardLink.appendChild(cardImage);
    cardLink.appendChild(cardName);
    cardElement.appendChild(cardLink);
    cardContainer.appendChild(cardElement);
  });
}
