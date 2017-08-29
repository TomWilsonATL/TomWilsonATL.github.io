//list out possible choices on keyboard
var guess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var wins = 0;  // wins start at 0
var losses = 0;  // losses start at 0
var guessesLeft = 9;  // start with 10 guesses
var guessesSoFar = []; //stores guesses so far


// when user hits key
document.onkeyup = function(event) {
          // record player guess as variable
          var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
          guessesSoFar.push(playerGuess);

          // robot guess random key character
          var robotGuess = guess[Math.floor(Math.random() * guess.length)];

          // conditionals
          if (playerGuess === robotGuess) {
             // if player guess is equal to robot guess
            wins++;  // increase win by 1
            guessesLeft = 9; // reset
          }

          if (playerGuess != robotGuess) {  // if player guess does not equal robot guess
            guessesLeft--;  // decrease guesses by 1
          }

          if (guessesLeft < 1) {
            losses++;
            guessesLeft = 9; // reset
          }

          // display stats
            var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>";



    // display as html
     document.querySelector("#game").innerHTML = html;

     // display guesses so far from array as html
     document.querySelector("#guessesId").innerHTML = "Your Guesses so far: " + guessesSoFar.join(', ');
       };
