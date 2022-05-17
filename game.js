var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);
    return randomNumber;

    // var randomChosenColour = buttonColors[nextSequence()]
    // var randomChosenColour = buttonColors[randomNumber];

    // console.log(randomChosenColour);
    // gamePattern.push(randomChosenColour);
    // $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    // var audio = new Audio(`sounds/${randomChosenColour}.mp3`);
    // audio.play();
}

var randomChosenColour = buttonColors[nextSequence()]
console.log(randomChosenColour);
gamePattern.push(randomChosenColour);
$("#" + randomChosenColour).fadeOut(100).fadeIn(100);

var audio = new Audio(`sounds/${randomChosenColour}.mp3`);
audio.play();

// nextSequence();
console.log(gamePattern);

$(".btn").click(function(event){
    var userChosenColour = $(this).attr("id");
    // console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})

