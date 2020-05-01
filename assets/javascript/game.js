const resetButton = document.querySelector("#reset-button");
const resetNum = document.querySelector("#num-resets");
const teamOneShots = document.querySelector("#teamone-numshots");
const teamOneGoal = document.querySelector("#teamone-numgoals")
const teamOneButton = document.querySelector("#teamone-shoot-button")

// reset button
resetButton.addEventListener("click", function () {
    let newResetNum = Number(resetNum.innerHTML) + 1;
    resetNum.innerHTML = newResetNum;
    teamOneButton.className ="";
    teamOneGoal.innerHTML = "0";
    teamOneShots.innerHTML = "0";
    teamTwoButton.className ="";
    teamTwoGoal.innerHTML = "0";
    teamTwoShots.innerHTML = "0";
})
// team 1
teamOneButton.addEventListener("click", function () {
    let newTeamOneShots = Number(teamOneShots.innerHTML) + 1;
    teamOneShots.innerHTML = newTeamOneShots;;
  let x =  Math.floor(Math.random() * 101);
  if (x % 2 == 0) { 
    let newTeamOneGoal = Number(teamOneGoal.innerHTML) + 1;
    teamOneGoal.innerHTML = newTeamOneGoal;
    teamOneButton.className ="pass";
}
else{
    teamOneButton.className ="fail";
}
})
// team 2
const teamTwoShots = document.querySelector("#teamtwo-numshots");
const teamTwoGoal = document.querySelector("#teamtwo-numgoals")
const teamTwoButton = document.querySelector("#teamtwo-shoot-button")

teamTwoButton.addEventListener("click", function () {
    let newTeamTwoShots = Number(teamTwoShots.innerHTML) + 1;
    teamTwoShots.innerHTML = newTeamTwoShots;;
  let x =  Math.floor(Math.random() * 101);
  if (x % 2 == 0) { 
    let newTeamTwoGoal = Number(teamTwoGoal.innerHTML) + 1;
    teamTwoGoal.innerHTML = newTeamTwoGoal;
    teamTwoButton.className ="pass";
}
else{
    teamTwoButton.className ="fail";
}
})