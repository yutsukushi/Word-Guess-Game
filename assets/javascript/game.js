// ------------------------------------------------------------------------------------
// Variables

var wins = 0; //Increment wins, wins++
var losses = 0; //Increment losses, losses++
var guessLeft = 15; //Decrease guessLeft, guessLeft--

// computer word choices
var compWords = ["water", "bunny", "notebook", "mirror", "porcupine"];

// randWord will choose one of the words randomly from the word choices

var randWord = compWords[Math.floor(Math.random(compWords) * compWords.length)];

    console.log(randWord); // Prints randWord in console to see if it works.

// splitWord separates chosen word into separate characters.

var splitWord = randWord.split(""); //[0, 1, 2, 3, 4]

    console.log(splitWord); // Prints the selected word into separate characters in console.

// --------------------------------------------------------------------------------------

// A Javascript event for the user end interactivity with the keyboard with the document.onkeyup function.

document.onkeyup = function (event) {
    
// event.key is a JS function that tracks which key is clicked

    userGuess = event.key;

// empty array to push event.key(letters guessed) into
    // var ltrArray = [];

    // ltrArray.push(userGuess); // Pushes user guesses into empty array as a string.

// Displays user guesses to the right HTML elements
    function ltrGuess() {
        
        // Sorts word by given index
        // var wordSort = splitWord.sort(function(a, b) {
        //     return a - b;
        // });
        // Setting HTML DOM connections
        var userGuessHtml = document.getElementById("userGuessHtml");
        var compChoice = document.getElementById("compChoice");
        var winsCounter = document.getElementById("winsCounter")
        var lossCounter = document.getElementById("lossCounter");
        var guessCounter = document.getElementById("guessCounter");

        // Runs a loop to the lentgh of the chosen word, i is a variable for the index of the length.
        for (var i = 0; i < splitWord.length; i++) {

            if (userGuess === splitWord[i])  { // if event.key is equal to word character,

            // var number = 3
            //number = number + 2
            //number += 2

            // Declaring variable userGuessHtml to grabbing the ID userGuessHtml in our HTML file.
           
            console.log(splitWord);

            // Then display event.keys pressed.
            userGuessHtml.textContent += userGuess;
            
            }
        }

        // if letters guessed are not in the chosen word string, 
        if (userGuess !== splitWord[i]); {
        
        //then display letters under "letters already guessed"
        compChoice.textContent += userGuess;

        }

        // Deducts guesses for each userGuess.
        guessLeft--; 
        
        // if guesses left hit 0, you lose.
        if (guessLeft < 1) {
            
            losses++;
            
        }
        
        // Displaying updated win/loss/guess counters on DOM.
        winsCounter.textContent = "Wins: " + wins;
        lossCounter.textContent = "Losses: " + losses;
        guessCounter.textContent = "Guesses Left: " + guessLeft;
        
    }

    ltrGuess(); // Calling the function
        
    console.log(userGuess); // Prints in console the letters pressed.
}

// -----------------------------------------------------------


// Display correctly guessed letter under compChoices

    // var letterContain = splitWord.includes();

    // function findLetter(splitWord); {
    //     document.getElementById("compChoice").innerHTML = compWords.find(splitWord);
    //     }

//     function
//     console.log(letterContain);

    // function displayCompLetter() {
    //     if (userGuess === letterContain);
    //     document.getElementById("compChoice").textContent = "Guess what word I'm thinking of: " + letterContain;
    // }

// --------------------------------------------------------------------

  