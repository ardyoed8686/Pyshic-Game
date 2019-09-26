var computerGuess = "a";
var wins = 0;
var losses = 0;
var numberGuesses = 10;
var guesses = [];

document.onkeydown = function(event) {
  var userGuess = event.key;
    guesses.push(userGuess);
    console.log(guesses);
    document.getElementById("key-presses").innerHTML = (guesses);
    if (computerGuess === userGuess) {
        wins++;
        document.getElementById("T-wins").innerHTML = "Wins: " + wins;
     } else {
        document.getElementById("T-losses").innerHTML = "Losses: " + losses;
     }
}
// The app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:


// The specific letters that the user typed. Display these until the user either wins or loses.)

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).