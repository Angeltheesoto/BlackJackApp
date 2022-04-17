
// black Jack app ---------------------


// variables----
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById("player-el");
let player = {
  name: "Per",
  chips: 200,
  sayHello: function() {
    console.log("Hi Amber!")
  }
};

player.sayHello()

// variables----
playerEl.textContent = player.name + ": $" + player.chips;


console.log(cards)

function getRandomCard() {
  let randomNumber = Math.floor( Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

 renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: '
  for ( let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' - ' ;
  }

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

  if (isAlive === true && sum !== 21) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards)
    renderGame()
  }
}













