var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var first_dice = document.querySelectorAll("img")[0];
var second_dice = document.querySelectorAll("img")[1];

first_dice.setAttribute("src", "images/dice" + randomNumber1 +".png")
second_dice.setAttribute("src", "images/dice" + randomNumber2 +".png")

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩Player1 Wins!";
} else if (randomNumber2> randomNumber1){
    document.querySelector("h1").innerText = "Player2 Wins!🚩";
} else {
    document.querySelector("h1").innerText = "Draw!";
}