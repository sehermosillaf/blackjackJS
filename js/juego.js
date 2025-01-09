// C => Clubs , D => Diamonds, H => Hearts, S => Spades
let deck = [];
let value = 0;
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const faceCards = ["Jacks", "Queens", "Kings", "Aces"];
const playerCardsElement = document.getElementById("jugador-cartas");
const computerCardsElement = document.getElementById("computadora-cartas");
let playerScore = 0;
let computerScore = 0;
let isPlayer = true;
let isStand = false;

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
  deck = _.shuffle(deck);
};

const cleanDeck = () => deck = [];

const cleanScores = () => {
  playerScore = 0;
  computerScore = 0;
  const playerScoreElement = document.getElementById("player-score");
  const pcScoreElement = document.getElementById("pc-score");
  playerScoreElement.textContent = "0";
  pcScoreElement.textContent = "0";
};

const resetTable = () => {
  while (playerCardsElement.firstChild) {
    playerCardsElement.removeChild(playerCardsElement.firstChild);
  }
  while(computerCardsElement.firstChild) {
    computerCardsElement.removeChild(computerCardsElement.firstChild)
  }
  cleanDeck();
  createDeck();
  cleanScores();
  console.log(deck);
};

const getCard = () => {
  if (deck.length === 0) {
    window.alert("no quedan cartas en la baraja");
  }
  if (isPlayer && !isStand) {
    const selectedCard = deck[0];
    deck.splice(selectedCard, 1);

    const card = document.createElement("img");
    card.src = `assets/cartas/${selectedCard}.png`;
    card.className = "carta";
    document.getElementById("jugador-cartas").appendChild(card);
    updateScores(selectedCard);
  }
};

const updateScores = (card) => {
  const playerScoreElement = document.getElementById("player-score");
  const pcScoreElement = document.getElementById("pc-score");
  if (isPlayer && !isStand) {
    const currentScore = parseInt(playerScoreElement.textContent) || 0;
    const newScore = currentScore + getCardValue(card);
    playerScoreElement.textContent = newScore;
    checkBlackJack(newScore);
    console.log('estoy aca');
    return newScore
  }
  if (!isPlayer && isStand) {
    const currentScore = parseInt(pcScoreElement.textContent) || 0;
    let newScore = currentScore + getCardValue(card);
    pcScoreElement.textContent = newScore;
    checkBlackJack(newScore)
    return newScore
  }
};

const checkBlackJack = (value) => {
  if (value > 21) {
    isStand = false;
    console.log('perdiste');
  }
  if (value == 21) {
    console.log('ganaste');
  }

};

const getCardValue = (selectedCard) => {
  value = selectedCard.substring(0, selectedCard.length - 1);
  return (value = isNaN(value) ? 10 : value * 1);
};

const stand = () => {
  isStand = true;
  isPlayer = false;

  while(isStand) {
    const selectedCard = deck[0];
    deck.splice(selectedCard, 1);
    const card = document.createElement("img");
    card.src = `assets/cartas/${selectedCard}.png`;
    card.className = "carta";
    document.getElementById("computadora-cartas").appendChild(card);
    score = updateScores(selectedCard);
    checkBlackJack(score)
    break;
  }
};

createDeck();


