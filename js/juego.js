// C => Clubs , D => Diamonds, H => Hearts, S => Spades 
let deck = [];
const suits =  ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const faceCards = ['Jacks', 'Queens','Kings','Aces']
let playerScore = 0;
let computerScore = 0;

const createDeck = () => {
    for (let suit of suits) {
    }
  deck = _.shuffle(deck)
    console.log(deck);
}

