
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById('input-btn');
let savedLinks = document.getElementById('saved-links');
let myLeads = [];

// function test() {
//  savedLinks.textContent += "Button Clicked" + '\r\n'
// }

// How pros do it - below

inputBtn.addEventListener('click', function() {
 savedLinks.textContent += "Button clicked" + ' '
})

