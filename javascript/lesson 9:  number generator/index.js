// RANDOM NUMBER GENERATOR

//const min = 50;
//const max = 100;

//let randomNum = Math.floor(Math.random() * (max - min) + min);

//console.log(randomNum);


const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const max = 100;
const min = 50;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum4 = Math.floor(Math.random() * (max - min + 1)) + min;

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
    label4.textContent = randomNum4;
};
