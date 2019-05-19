
$(document).ready(function() {

var targetScore;
var yourScore = 0;
var gameOver = false;
var crystal1 ;
var crystal2 ;
var crystal3 ;
var crystal4 ;
var updatedScore = 0;
var finalScore;
var wins = 0;
var losses = 0;



// creates generated numbers for crystals and target number
targetScore = Math.floor((Math.random()*100))+20
crystal1 = Math.floor((Math.random()*12)+1)
crystal2 = Math.floor((Math.random()*12)+1)
crystal3 = Math.floor((Math.random()*12)+1)
crystal4 = Math.floor((Math.random()*12)+1)

$(".target-score").text(targetScore)
$(".your-score").text(yourScore)
$(".wins").text(wins)
$(".losses").text(losses)



//goes through scenario for each crystal
$("#crystal-1").on("click", function() {
    yourScore = yourScore + crystal1;
    updatedScore = yourScore
    updateScore();

})

$("#crystal-2").on("click", function() {
    yourScore = yourScore + crystal2;
    updatedScore = yourScore
    updateScore();

})

$("#crystal-3").on("click", function() {
    yourScore = yourScore + crystal3;
    updatedScore = yourScore
    updateScore();

})

$("#crystal-4").on("click", function() {
    yourScore = yourScore + crystal4;
    updatedScore = yourScore
    updateScore();

})







// function for updating score after crystal is clicked
var updateScore= function(){
    $(".your-score").text(updatedScore)
    finalScore =  updatedScore;
    

    if(targetScore === finalScore){
        win();
        reset();
    
    }
    
    else if (targetScore < finalScore){
        lose();
        reset();
    }
    
    else{ 
        gameOver = false;
    }

    console.log(finalScore)
    console.log(targetScore)
}

// function for if target number and your number are equal(Win)
var win = function(){
    alert("Congratulations! You matched the number of crystals! You win!!")
    reset();
    wins ++;
    $(".wins").text(wins)
}


//function for if your number goes over target score
var lose = function(){
    alert("I'm sorry you have too many crystals. You Lose!")
    reset();
    losses++;
    $(".losses").text(losses)
}



//resets the function by clearing scores and creating new crystal numbers and target number
var reset = function(){
    targetScore = Math.floor(Math.random()*120)+20;
    crystal1 = Math.floor((Math.random()*12)+1);
    crystal2 = Math.floor((Math.random()*12)+1);
    crystal3 = Math.floor((Math.random()*12)+1);
    crystal4 = Math.floor((Math.random()*12)+1);
    gameOver = true;
    finalScore = 0;
    yourScore = 0;
    updateScored = 0;
    $(".target-score").text(targetScore)
    $(".your-score").text(yourScore)
}

});

