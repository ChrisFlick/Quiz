q = document.querySelector("#question");
btn = document.querySelectorAll("button");
timer = document.querySelector("#timer")
feedback = document.querySelector("#feedback")

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    ///etc.
  ];

  var time = questions.length * 15;
  timer.textContent = time;

  var count = 0;
  var finish = false;
  var interval;

initQuestion();
initTimer();

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    let pick = btn[i].textContent
    console.log(pick)
  
    if (!finish) {
      if (pick === questions[count].answer) {
        feedback.textContent = "Correct!"
      } else {
        time -= 15;
        feedback.textContent = "Wrong!"
      }

      setTimeout( () => {
        feedback.textContent = "";
      }, 250);

      count++;
      if (count < questions.length) {
        initQuestion();
      } else {
        finish = true;
        clearInterval(interval);
        localStorage.setItem('score', time)
        window.location = "score.html"
      }
    } 
  });
}
  


function initQuestion() {
  q.textContent = questions[count].title;
  for (let i = 0; i < questions[count].choices.length; i++) {
    btn[i].textContent = questions[count].choices[i];
  }
}

function initTimer() {
  interval = setInterval(function() {
    time--;
    timer.textContent = time;

    if (time === 0) {
      finish = true;
      clearInterval(interval);

      localStorage.setItem('score', time)
      window.location = "score.html"
    }
  }, 1000)
}