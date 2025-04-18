var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).on("keydown click", function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  if (!started) return;

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key or Tap to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 300);

    const player = localStorage.getItem("simonPlayer") || "Unknown";
    const allScores = JSON.parse(localStorage.getItem("simonScores")) || {};
    if (!allScores[player]) allScores[player] = [];
    allScores[player].push(level);
    localStorage.setItem("simonScores", JSON.stringify(allScores));

    setTimeout(() => window.location.href = 'scores.html', 1000);
    startOver();
  }
}

function updateScore() {
  $("#current-score").text(level);
  if (level > parseInt($("#high-score").text())) {
    $("#high-score").text(level);
  }
}

function nextSequence() {
  updateScore();
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  animateSequence(randomChosenColor);
  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 200);
}

function animateSequence(color) {
  const button = $("#" + color);
  button.addClass("pressed");
  setTimeout(() => {
    button.removeClass("pressed");
  }, 100); 
}

function startOver() {
  $("#current-score").text("0");
  level = 0;
  gamePattern = [];
  started = false;
}
