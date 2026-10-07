// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counterValue = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    counterValue.textContent = count;
};

decreaseBtn.onclick = function () {
    count--;
    counterValue.textContent = count;
};

resetBtn.onclick = function () {
    count = 0;
    counterValue.textContent = count;
};
