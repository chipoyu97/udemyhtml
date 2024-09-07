var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;
var mouseClick = 0;

$(".btn").click(function(){
    
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    mouseClick++;
    //console.log(mouseClick);
    checkAnswer(mouseClick);
})

function nextSequence(){
    level += 1;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    result = "#" + randomChosenColour;
    playSound(randomChosenColour);
}


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    
}

function animatePress(currentColour){
    var currentColour = currentColour;
    console.log("#"+currentColour);
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
      }, 100);
}


$(document).on("keydown", function(event){
    if(event.key == "a" && !started) { 
        nextSequence();
        started = True;
    }
})

function checkAnswer(currentLevel){
    console.log(currentLevel);
    
}