//console.log($("img").attr("src"));

$("a").attr("href", "https://www.yahoo.com");

//$("h1").addClass("big-title margin-50")

/*$("h1").click(function (){
    $("h1").css("color", "purple");
})
*/


/*for (var i = 0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        document.querySelector("h1").style.color = "purple";
    })
}
*/


/*
$("button").click(function (){
    $("h1").css("color", "purple");
})

*/
/*
$("input").keypress(function (event){
    console.log(event.key);
})
*/

$(document).keypress(function (event){
    var keyPressed = event.key;
    $("h1").text(keyPressed);
})

$("h1").on("mouseover", function (){
    $("h1").css("color", "purple");
})