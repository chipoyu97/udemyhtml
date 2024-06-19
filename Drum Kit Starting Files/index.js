for (let i = 0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}


//document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("I got clicked!");
}