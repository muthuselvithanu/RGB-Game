var numSquares=6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var heading= document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButton=document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}
function setupModeButtons(){
for(var i=0;i<modeButton.length;i++)
{
    modeButton[i].addEventListener("click",function(){
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "EASY" ? numSquares=3 : numSquares=6;
        reset();
    });
}
}
function setupSquares(){
for (var i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //Add clicklisteners to squares
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
                if (clickedColor === pickedColor) {
            messageDisplay.textContent = "correct";
            resetButton.textContent="PlayAgain?";
            changedColor(clickedColor);
            heading.style.background= clickedColor;

        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}
}


//reset function
function reset(){
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent="";
    resetButton.textContent="New Colors";
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
         }
         else
        {
         squares[i].style.display= "none" ;
        }
    }
    heading.style.backgroundColor="steelblue";
}


//reset Button
resetButton.addEventListener("click",function(){
    reset();
});


// To change all square color to correct color
function changedColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}
//to pick random colors
function pickColor()
{
    var random= Math.floor(Math.random()*colors.length);
    return colors[random];
}

//Function to generate Random colors
function generateRandomColors(num){
    //make array
    var arr=[];
    //add num random colors to array
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    //return array
    return arr;
}

//Function to Generate random RGB values
function randomColor(){
    //pick red from 0 to 255
    var r = Math.floor(Math.random()*256);
    //pick green from 0 to 255
    var g = Math.floor(Math.random()*256);
    //pick blue from 0 to 255
    var b = Math.floor(Math.random()*256);
    return "rgb("+ r + ", " + g + ", " + b + ")" ;
    
}