
// C => Clubs , D => Diamonds, H => Hearts, S => Spades
let deck = [];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const faceCards = ["Jacks", "Queens", "Kings", "Aces"];
const playerCardsElement = document.getElementById("jugador-cartas");
const computerCardsElement = document.getElementById("computadora-cartas");
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
};


const cleanDeck = () =>  deck = [];
const cleanScores = () => {
  playerScore = 0;
  computerScore =  0;
  const playerScoreElement = document.getElementById("player-score");
  playerScoreElement.textContent="0";
}

const resetTable = () => {
  while(playerCardsElement.firstChild) {
  playerCardsElement.removeChild(playerCardsElement.firstChild)
 }
 cleanDeck();
 createDeck();
 cleanScores();
 console.log(deck);
}

const getCard = () => {
  if (deck.length <= 0) {
    window.alert("no quedan cartas en la baraja")
}
  const selectedCard = deck[0];
  deck.splice(selectedCard,1);

  const card = document.createElement("img");
  card.src = `assets/cartas/${selectedCard}.png`;
  card.className = "carta"
  document.getElementById("jugador-cartas").appendChild(card);
  updateScores(selectedCard)

}

const updateScores = (card) => {
  const playerScoreElement = document.getElementById("player-score");
  const currentScore = parseInt(playerScoreElement.textContent) || 0
  const newScore = currentScore + cardValue(card);
  playerScoreElement.textContent = newScore;
}

// Todo: revisar valor de los Aces
const cardValue = (selectedCard) => {
  const card = selectedCard.charAt(0);
  return value  =  isNaN(card) ? 10 : card * 1;
}
cardValue('2D');
console.log(value);

createDeck()