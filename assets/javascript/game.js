const resetButton = document.querySelector("#reset-button");
const resetNum = document.querySelector("#num-resets");
const teamOneS = document.querySelector("#teamone-numshots");
const teamOneG = document.querySelector("#teamone-numgoals")


resetButton.addEventListener("click", function () {
    let newResetNum = Number(resetNum.innerHTML) + 1;
    resetNum.innerHTML = newResetNum;;
})