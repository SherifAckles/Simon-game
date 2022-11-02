const buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
let level = 0;
let started = false;
let highScore = 0;

//press a key to start
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text += `level ${level}`;
  }
  started = true;
  nextSequence();
  //start the game
});
//computer turn
function nextSequence() {
  const randomNumber = Math.floor(Math.random() * buttonColours.length);

  randomChosenColour = buttonColours.push[randomNumber]; // this will select the color depending on the random number
  gamePattern.push[randomChosenColour];
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound();
}
function playSound() {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
