
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


targetScore = Math.floor((Math.random()*100)+20)
crystal1 = Math.floor((Math.random()*12)+1)
crystal2 = Math.floor((Math.random()*12)+1)
crystal3 = Math.floor((Math.random()*12)+1)
crystal4 = Math.floor((Math.random()*12)+1)

$(".target-score").text(targetScore)
$(".your-score").text(yourScore)
$(".wins").text(wins)
$(".losses").text(losses)


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


var win = function(){
    alert("You won the game!!")
    reset();
    wins ++;
    $(".wins").text(wins)
}


var lose = function(){
    alert("I'm sorry you have too many crystals. You Lose!")
    reset();
    losses++;
    $(".losses").text(losses)
}


var reset = function(){
    targetScore = Math.floor(Math.random()*120);
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

