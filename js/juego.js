
// C => Clubs , D => Diamonds, H => Hearts, S => Spades
let deck = [];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const faceCards = ["Jacks", "Queens", "Kings", "Aces"];
let playerScore = 0;
let computerScore = 0;

const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let suit of suits) {
      deck.push(i + suit.charAt(0));
    }
  }
  for (let suit of suits) {
    for (let faceCard of faceCards) {
      deck.push(faceCard.charAt(0) + suit.charAt(0));
    }
  }
  deck = _.shuffle(deck)
  console.log(deck);
};
// revisar reglas de juego
// TODO: no deberia ser random la carta ya que la baraja ya esta revuelta.
const hitCard = () => {
  //obtenemos la primera carta de la baraja y la eliminamos
  let selectedCard = deck[0];
  deck.splice(selectedCard,1)

  // crear funcion para separar
  const card = document.createElement("img");
  card.src = `assets/cartas/${selectedCard}.png`;
  card.className = "carta"
  document.getElementById("jugador-cartas").appendChild(card);
  
    if (deck.length <= 0) {
        window.alert("no quedan cartas en la baraja")
    }
}



createDeck()