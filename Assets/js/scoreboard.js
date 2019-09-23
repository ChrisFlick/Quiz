scoreboard = document.querySelector('#scoreboard')

var scores = JSON.parse(localStorage.getItem("scoreboard"))
scores.sort()

for (let i = scores.length - 1; i >= 0; i--) {
    scoreboard.innerHTML += scores[i][1] + ": " + scores[i][0] + " seconds<br>"
}