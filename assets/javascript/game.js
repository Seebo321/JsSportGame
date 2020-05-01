const resetButton = document.querySelector("#reset-button");
const resetNum = document.querySelector("#num-resets");
const teamOneShots = document.querySelector("#teamone-numshots");
const teamOneGoal = document.querySelector("#teamone-numgoals")
const teamOneButton = document.querySelector("#teamone-shoot-button")
// audio 
const shootSound = document.getElementById("bounce");   
const cheerSound = document.getElementById("cheer")
const swishSound = document.getElementById("swish")
// reset button
resetButton.addEventListener("click", function () {
    cheerSound.play(); 
    let newResetNum = Number(resetNum.innerHTML) + 1;
    resetNum.innerHTML = newResetNum;


    if (teamOneGoal.innerHTML > teamTwoGoal.innerHTML){
        alert("Team 1 Wins!");}
    if (teamTwoGoal.innerHTML > teamOneGoal.innerHTML){
        alert("Team 2 Wins!");
    }
    teamOneButton.className ="";
    teamOneGoal.innerHTML = "0";
    teamOneShots.innerHTML = "0";
    teamTwoButton.className ="";
    teamTwoGoal.innerHTML = "0";
    teamTwoShots.innerHTML = "0";
    
})
// team 1
teamOneButton.addEventListener("click", function () { shootSound.play(); 
  
    

    let newTeamOneShots = Number(teamOneShots.innerHTML) + 1;
    teamOneShots.innerHTML = newTeamOneShots;;
  let x =  Math.floor(Math.random() * 101);
  if (x % 2 == 0) { 
    let newTeamOneGoal = Number(teamOneGoal.innerHTML) + 1;
    teamOneGoal.innerHTML = newTeamOneGoal;
    teamOneButton.className ="pass";
    swishSound.play(); 
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
    shootSound.play();
    let newTeamTwoShots = Number(teamTwoShots.innerHTML) + 1;
    teamTwoShots.innerHTML = newTeamTwoShots;;
  let x =  Math.floor(Math.random() * 101);
  if (x % 2 == 0) { 
    let newTeamTwoGoal = Number(teamTwoGoal.innerHTML) + 1;
    teamTwoGoal.innerHTML = newTeamTwoGoal;
    teamTwoButton.className ="pass";
    swishSound.play(); 
}
else{
    teamTwoButton.className ="fail";
}
})