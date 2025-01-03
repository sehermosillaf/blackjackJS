// C => Clubs , D => Diamonds, H => Hearts, S => Spades 
let deck = [];
const suits =  ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const faceCards = ['Jacks', 'Queens','Kings','Aces']
let playerScore = 0;
let computerScore = 0;

const createDeck = () => {
    //cards
    for (let i = 2; i<=10; i++) {
        for(let suit of suits) {
            deck.push(i + suit.charAt(0))
        }
    }
    for (let suit of suits) {
        for (let faceCard of faceCards) {
            deck.push(faceCard.charAt(0) + suit.charAt(0))
        }
        
    }
    console.log(deck);
    
}

createDeck();