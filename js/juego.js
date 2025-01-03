// C => Clubs , D => Diamonds, H => Hearts, S => Spades 
let deck = [];
const suits =  ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const faceCards = ['Jacks', 'Queens','Kings','Aces']
let playerScore = 0;
let computerScore = 0;

const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let suit of suits) {
    }
  deck = _.shuffle(deck)
const hitCard = () => {
    let randomIndex  = _.random(0,deck.length)
    let randomCard = deck[randomIndex]
    deck.splice(randomIndex,1)
    console.log(deck);
    if (deck.length <= 0) {
        window.alert("no quedan cartas en la baraja")
    }
}

createDeck()