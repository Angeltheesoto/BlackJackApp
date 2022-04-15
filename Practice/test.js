

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

let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
 showSolution()
};

function showSolution() {
 console.log("showing the solution....")
};





