console.log("IC Linked"); // sanity check!

// select all elements that will be changed
let boxA = document.querySelector(".divA");
let boxB = document.querySelector(".divB");
let boxDText = document.querySelector("#divDText");
// select all button elements
let btnA = document.querySelector("#boxABtn");
let btnB = document.querySelector("#boxBBtn");
let btnD = document.querySelector("#boxDBtn");

// define event handler call back arrow functions
changeBoxABackground = (event) => {
    boxA.classList.toggle("newBackground"); // toggle new background class
}
changeBoxBBackground = (event) => {
    boxB.classList.toggle("newBackground"); // toggle new background class
}
changeBoxDText = (event) => {
    boxDText.innerHTML = prompt("Enter a new title for box D!"); // prompt for new text in box D
}

// add event listeners to selected buttons (on click)
btnA.addEventListener("click", changeBoxABackground);
btnB.addEventListener("click", changeBoxBBackground);
btnD.addEventListener("click", changeBoxDText);