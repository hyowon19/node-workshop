// Number guessing game!
// Create a file called number-guessing-game.js.
// In this file, re-write your number guessing game (from the basic javascript workshop) 
// for the command line!
// Instead of using prompt and alert, you will have to use capabilities from NodeJS and any 
// external module. HINT: there is an npm library called prompt that can help you with that :)

var prompt = require('prompt');

var guessThisNumber = Math.floor(Math.random() * 6) + 1;

var game = {
    count: 0,
    state: true
};

var startGame = function() {
    prompt.get(['Guess a number between 1 and 100!'], function(err, result) {
    if(err) {
        console.log("There is an error with your input.");
        game.count++;
        game.state = true;
        if(game.state){
             startGame()
        }
    } else {
        var actualNumber = Number(result['Guess a number between 1 and 100!']);
        console.log("actual: ",actualNumber," random: ", guessThisNumber)
        if (actualNumber === guessThisNumber) {
            game.count++;
            console.log("Congratulations, you have guessed the correct number!");
            console.log("You tried " + game.count + " times to guess the number.");
            game.state = false;
            if(!game.state){
                return;
            }
        } else if(isNaN(actualNumber)) {
            console.log("This is not a number.  Please try again with a number.");
            game.count++;
            game.state = true;
            if(game.state){
                startGame()
            }
        } else if (actualNumber < 1 || actualNumber > 100) {
            console.log("You guessed a number that was not between 1 to 100.  Please try again.");
            game.count++;
            game.state = true;
            if(game.state){
                startGame()
            }
        } else if (actualNumber > guessThisNumber) {
            console.log("You guessed too high.  Try guessing lower.");
            game.count++;
            game.state = true;
            if(game.state){
                startGame()
            }
        } else if (actualNumber < guessThisNumber) {
            console.log("You guessed too low.  Try guessing higher.");
            game.count++;
            game.state = true;
            if(game.state){
                startGame()
            }
        }}
    })
}

startGame()