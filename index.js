
// black Jack app ---------------------

let firstCard = 10;
let secondCard = 11;
let cards = [
 firstCard,
 secondCard
]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let cardsEl = document.getElementById('cards-el');
let message = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');



function startGame() {
 renderGame();
}

function renderGame() {

  cardsEl.textContent = 'Cards: ' + cards[0] + ' - ' + cards[1];
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
  message.textContent = "Do you want to draw a new card?"
 } else if (sum === 21) {
  message.textContent = "Whoo! You've got BlackJack!"
  hasBlackJack = true
 } else {
  message.textContent = "You're out of the game!"
  isAlive = false
 }
}

function newCard() {
 let card = 6;
 sum += card;
 cards.push(card);
 console.log(cards)
 renderGame()
}













