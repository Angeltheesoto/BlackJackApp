
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


// black Jack app ---------------------

let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true

if (sum <= 20) {
 console.log("Do you want to draw a new card?")
} else if (sum === 21) {
 console.log("Whoo! You've got BlackJack!")
 hasBlackJack = true
} else {
 console.log("You're out of the game!")
 isAlive = false
}

// cash out!

console.log(hasBlackJack)

// it worked





