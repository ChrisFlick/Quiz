var time = document.querySelector('#time');
var initials = document.querySelector('#initials');
var playerScroe = document.querySelector("#playerScore");

var scoreboard = localStorage.getItem('scoreboard');
var score = localStorage.getItem('score')

if (scoreboard) {
  scoreboard = JSON.parse(scoreboard);
} else {
  scoreboard = [];
}

time.textContent = score;

playerScore.addEventListener("submit", () => {
  scoreboard.push([score, initials.value]);
  window.location = "highScore.html";
})