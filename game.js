var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level =0;


// $("body").one("keypress",function(){
//     $("h1").text("level "+level);
//     nextSequence();
    
// })

var started = false;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+ level);
        nextSequence();
        started=true;
    }
})

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    // nextSequence();
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length -1);
})

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){console.log("success");
    
    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function (){
            nextSequence();
        },1000);
    }}else{
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)

        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
        
    }
}


function nextSequence() {
    userClickedPattern = [];

    level++;
    $("h1").text("Level "+level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];

    
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    // var audio = new Audio(`sounds/${randomChosenColour}.mp3`);
    // audio.play();
    playSound(randomChosenColour);
    
  
}


function playSound(name){
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();

}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100)
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
