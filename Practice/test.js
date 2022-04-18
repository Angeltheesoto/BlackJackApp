

// let firstName = 'Angel';
// let lastName = 'Soto';

// let fullName = firstName + " " + lastName;

// console.log(fullName);


 //---------------------------------
// let name = 'Linda';
// let greeting = 'Hi there';


// function greet() {
//  console.log(greeting + ", " + name + "!")
// };

// greet();
 // ---------------------------

// let myPoints = 3;

// function add3Points() {
//  myPoints += 3
// };

// function remove1Point() {
//  myPoints -= 1
// };

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints);

 // ----------------------------------

 // let error = document.getElementById('error');

 // function problem() {
 //  console.log("button clicked")
 //  error.textContent = "Something went wrong, please try again."
 // }

 //-------------------------------------

// practice calculator------------------------------------------------
 // let num1 = 100;
 // let num2 = 100;
 // document.getElementById("num1-el").textContent = num1;
 // document.getElementById("num2-el").textContent = num2;
 // let sum = document.getElementById('sum-el')

 // function add() {
 //  sum.textContent = 'Sum: ' + (num1 + num2)
 // };

 // function subtract() {
 //  sum.textContent = 'Sum: ' + (num1 - num2)
 // };

 // function divide() {
 //  sum.textContent = 'Sum: ' + (num1 / num2)
 // };

 // function multiply() {
 //  sum.textContent = 'Sum: ' + (num1 * num2)
 // };

 // function reset() {
 //  sum.textContent = 'Sum: ' 
 // };

 // For Loops --------------------

  // for (let count = 0; count < 11; count += 2) {
  //   console.log(count);
  // }

  // let cards = [7, 3, 9];

  // for ( let i = 0; i < cards.length; i++ ) {
  //  console.log(cards[i])
  // }


  // let sentence = ['Hello', 'my', 'name', 'is', 'per'];
  // let greetingEl = document.getElementById('greeting-el');

  
  // for ( let i = 0; i < sentence.length; i++) {
  //   greetingEl.textContent += sentence[i] + ' ';
  // }

 // random number genreating ----------------------

 // let player1Time = 102;
 // let player2Time = 102;

 // function getFastestRaceTime() {
 //  if (player1Time < player2Time) {
 //   return player1Time
 //  } else if (player2Time < player1Time) {
 //   return player2Time
 //  } else {
 //   return "Both player have same speed which is: " + player1Time;
 //  }
 // }
 // let getFastestRace = getFastestRaceTime()
 // console.log(getFastestRace);

//  function total() {
//   return player1Time + player2Time;
//  }

// let theTotal = total();

// console.log(theTotal);

// create dice roll -------------------------------

// let randomNumber = Math.random() * 100

// console.log(randomNumber)

// function rollDice() {
//  let randomNumber = Math.floor( Math.random() * 6) + 1;
//  return randomNumber
// }
// console.log(rollDice())

// logical operators -----------------------

// let hasCompletedCourse = true;
// let givesCertificate = true;

// if (hasCompletedCourse === true && givesCertificate === true) {
//  generateCertificate()
 
// }

// function generateCertificate() {
//  console.log("Generating certificate....")
// };

// let hasSolvedChallenge = true;
// let hasHintsLeft = true;

// if (hasSolvedChallenge === false || hasHintsLeft === false) {
//  showSolution()
// };

// function showSolution() {
//  console.log("showing the solution....")
// };

// let likesDocumentaries = true;
// let likesStartups = true;

// function recommendMovie() {
//  if (likesDocumentaries === true || likesStartups === true){
//   console.log("Hey, check out this new film we think you will like!")
//  }
// }
// console.log(recommendMovie())

// or like this ->

// if (likesDocumentaries === true || likesStartups === true){
//   recommendMovie()
//  }

// function recommendMovie() {
//  console.log("Hey, check out this new film we think you will like!")
// }

// objects------------------------------

// let course = {
//  title: 'Learn CSS Grid for free',
//  lesson: 16,
//  creator: "Per, Harald Borgen",
//  length: 63, 
//  level: 2,
//  isFree: true,
//  tags: [
//   "html",
//   "css"
//  ]
// }

// console.log( course.tags[1])


// let castle = {
//  title: "Live like a king in my castle",
//  price: 190,
//  isSuperHost: true,
//  images: [
//   "img/castle.png",
//   "img/castle2.png"
//  ]
// }

// console.log(castle.price)












// more practice



// Review 1- Objects and functions
let sentence = document.getElementById('greeting-el');
let person = {
 name: 'Angel',
 age: 24,
 country: 'America'
};

function logData() {
  sentence.textContent = person.name + ' is ' + person.age + ' years old and lives in ' + person.country + '.'
 }
 logData()


// Review 2- if else/ conditional statements
let age = 67;
let idOne = document.getElementById('idOne')

if (age < 6) {
 idOne.textContent = 'Free'
} else if (age < 18) {
 idOne.textContent = 'Child Discount'
} else if (age < 27) {
 idOne.textContent = 'Student Discount'
} else if (age < 67) {
 idOne.textContent = 'Full Price'
} else {
 idOne.textContent = 'Senior Citizen Discount'
};

// Review 3- Loops and Arrays
let idTwo = document.getElementById('idTwo');
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

idTwo.innerHTML = "The five largest countries in the world:";
  for (let i = 0; i < largeCountries.length; i++) {
   
   idTwo.textContent += ' ' + largeCountries[i]
  };

// Review 4- push, pop, unshift, shift challenge
let idThree = document.getElementById('idThree');
let fixLargeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

fixLargeCountries.shift()
fixLargeCountries.unshift("China")
fixLargeCountries.pop()
fixLargeCountries.push("Pakistan")

for (let j = 0; j < fixLargeCountries.length; j++) {
  
  idThree.textContent += fixLargeCountries[j] + ' '
};

// Review 5- Logical Operators
let dayOfMonth = 13;
let weekday = "Friday";
let idFour = document.getElementById('idFour');

if (dayOfMonth === 13 && weekday === "Friday") {
  idFour.textContent = "Spoky Face Emoji"
}


// Review 6- Rock paper scissors
let hands = ["rock", "paper", "scissor"];

function getHand() {
  let randomNum = Math.floor(Math.random() * 3)
  return hands[randomNum]
};

console.log(getHand())

// Review 7- Sorting Fruits
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");






