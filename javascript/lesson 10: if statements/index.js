// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

// Example 1
//let age = 13;

//if(age >= 18){
//    console.log("You are old enough to enter this site");
//}
//else {
//    console.log("You must be 18+ to enter this site");
//}

// Example 2
//let time = 14;
//if(time < 12){
//    console.log("Good Morning");
//}
//else if(time < 18){
//    console.log("Good Afternoon");
//}
//else {
//    console.log("Good Evening");
//}

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
  const enteredAge = myText.value.trim();
  age = Number(enteredAge);

  if (enteredAge === "" || !Number.isInteger(age) || age < 0) {
    resultElement.textContent = "Please enter a whole age of 0 or more.";
  } else if (age >= 100) {
    resultElement.textContent = "You are too old to enter this site.";
  } else if (age === 0) {
    resultElement.textContent = "You can't enter. You were just born.";
  } else if (age >= 18) {
    resultElement.textContent = "You are old enough to enter this site.";
  } else {
    resultElement.textContent = "You must be 18+ to enter this site.";
  }
};
