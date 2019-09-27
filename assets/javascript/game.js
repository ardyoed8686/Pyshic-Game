var computerGuess = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var wins = 0;
var losses = 0;
var tries = 10;
var guesses = [];

var totalWins = document.getElementById("T-wins");
var totalLosses = document.getElementById("T-losses");
// var tries = document.getElementById("remaining-guesses");
var guessesSoFar = document.getElementById("key-presses");




// The specific letters that the user typed. Display these until the user either wins or loses.)
document.onkeydown = function(event) {
  var userGuess = event.key;

  // The app randomly picks a letter, and the user has to guess which letter the app chose. 
var computerChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];

    guesses.push(userGuess);
    console.log(guesses);
    document.getElementById("key-presses").innerHTML = (guesses);
    console.log(tries);

    // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
 

    if (computerChoice === userGuess) {
        wins++;
        tries = 9;
        guesses.length = 0;
     
      // When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
    } else {
        tries--;
        losses++;
        
        if (tries === 0) {
          // alert("Game Over");
            wins = 0;
            losses = 0;
            tries = 10;
            guesses = [];
        }
    
    }
    //  document.getElementById("T-wins").innerHTML = "Wins: " +wins;
    //  document.getElementById("T-losses").innerHTML = "Losses: " +losses;

    // updates the remaining tries for the user
     document.getElementById("remaining-guesses").innerHTML = tries;

      // Display the wins/losses/remaining guesses and user guesses.

      totalWins.textContent = "Wins: " + wins;
      totalLosses.textContent = "Losses: " + losses;
      
    }
    
    
     //
     //setup game restart
