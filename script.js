/* Number Guessing Game */



/* global variables */
var letsPlay = window.confirm("Wanna guess which number I'm thinking of? I'll give you 5 guesses!");

var wrongGuesses = 0;

var guessesLeft = function() {
    return 5-wrongGuesses;
};

/* Game sequence below */
var playGame = function() {

    /* So that players can exit the game */
    if (!letsPlay) {
        alert('Ok! See you again soon!');
        return;
    } 

    var playerGuess = window.prompt("Enter an Integer between 1 and 100");

    /* So players can exit the game at any stage */
    if (!playerGuess) {
        alert("Ok! See you again soon!");
        return;
    }
    
    /* Converts playerGuess into Numbers */
    var playerNumber = Number(playerGuess);

    /* Computer generates random integers between 1 and 100 */
    var computerNumber = Math.floor(Math.random()*100) + 1;
    
    /* Value comparison sequence */

    /* If player guesses right */
    if (playerNumber == computerNumber && guessesLeft()>=1) {
        alert("Wow, you got it!");
        wrongGuesses++;
        alert("It only took you " + wrongGuesses + " guesses! Great Job!");
        alert("Thanks for playing!");
        return;
    } else if (playerNumber < computerNumber && playerNumber >= 1 && guessesLeft()>1) {
        alert("You guessed too low, buddy!");
        wrongGuesses++;
        alert("Your wrong guess count: " + wrongGuesses + ". You now have " + guessesLeft() + " guesses left!");
    } else if (playerNumber > computerNumber && playerNumber <= 100 && guessesLeft()>1) {
        alert("You guessed too high, mate!");
        wrongGuesses++;
        alert("Your wrong guess count: " + wrongGuesses + ". You now have " + guessesLeft() + " guesses left!");
    
    /* When players use up all 5 guesses */
    } else if (playerNumber < computerNumber && playerNumber >= 1 && guessesLeft()== 1) {
        alert("You guessed too low, buddy!");
        alert("Oh, no! You used up all your guesses! Refresh the page to try again!");
        return;
    
    /* When players use up all 5 guesses */
    } else if (playerNumber > computerNumber && playerNumber <= 100 && guessesLeft()== 1) {
        alert("You guessed too high, mate!");
        alert("Oh, no! You used up all your guesses! Refresh the page to try again!");
        return;

    /* If players enter non-numbers or out of range numbers */
    } else {
        alert("Try an integer between 1 and 100, Smartass!");
        alert("Your wrong guess count: " + wrongGuesses + ". You now have " + guessesLeft() + " guesses left!");
    };
    
    /* Allows players to guess again or quit the game */
    var playAgain = window.confirm("Guess again?");
    if (playAgain) {
        playGame();
    } else {
        alert("Alright. Thanks for playing!");
        return;
    }

};

/* To initiate game */
playGame();

