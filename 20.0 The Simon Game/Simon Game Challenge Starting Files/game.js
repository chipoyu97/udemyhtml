var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    result = "#" + randomChosenColour;
    console.log(result);
    $(result).click(function(){
        $(result).fadeIn(100).fadeOut(100).fadeIn(100);
        audio_path = ("sounds/" + randomChosenColour + ".mp3");
        new Audio(audio_path).play();
    })
}

