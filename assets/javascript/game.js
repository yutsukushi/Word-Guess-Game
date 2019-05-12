// ------------------------------------------------------------------------------------
// Variables

var wordInUse = null;
var lettersClicked = null;
var lettersOfCurrentWord = [];
var lettersAlreadyGuessedCorrect = [];
var lettersAlreadyGuessed = [];

var wins = 0; //Increment wins, wins++
var losses = 0; //Increment losses, losses++
var guessLeft = 15; //Decrease guessLeft, guessLeft--

// computer word choices
var compWords = ["water", "bunny", "notebook", "mirror", "porcupine", "flower", "leopard"];

function initializeGame() {

wordInUse = compWords[Math.floor(Math.random() * compWords.length)]; // wordInUse will choose one of the words randomly from the word choices

lettersOfCurrentWord = wordInUse.split(""); // will split the word into separate letters in an array

    console.log(lettersOfCurrentWord); // Prints letters of current word in an array
    console.log(wordInUse); // Prints wordInUse in console to see if it works.

    displayUnderscore(); // run function to display underscores, unless user guesses the correct letter.
}

function displayUnderscore() { // function to display underscore, it searches for the letter in the array and if it can't find the letter, it displays an underscore.

    var underScore = ""; // underScore is valued to an empty string

    for (var i = 0; i < lettersOfCurrentWord.length; i++) { // run a loop the length of the letters of the current word around this if else statement.

        if (lettersAlreadyGuessedCorrect.indexOf(lettersOfCurrentWord[i]) !== -1) { // will loop this if statement: if it finds a  guessed letter in lettersAlreadyGuessedCorrect array that matches the index of the letter in lettersOfCurrentWord of the current word in the array, then...

            underScore += lettersOfCurrentWord[i]; // display the letter at the index in the empty string.

        } else { // if it doesn't find the guessed word matching the index of lettersOfCurrentWord, then...

            underScore += "&nbsp;_&nbsp;"; // then display an underscore at the current index of the word in the empty string.

        }
    }

    document.getElementById("userGuessHtml").innerHTML = underScore; // display the value of underScore on HTML

}

function logicGame(letter) { // function that states, 
    
    if (guessLeft >= 1) { // if the guesses left is greater than or equal to 1, then run the listed 3 functions

        displayIncorrectLetters(letter); 
        checkCorrectLetters(letter);
        displayUnderscore();

    } else {

        loseGame();

    }
}

function checkCorrectLetters(letter) { // function that 

    for (var i = 0; i < lettersOfCurrentWord.length; i++) { // runs this for loop the amount of times of the current word length.
        
        if ((letter === lettersOfCurrentWord[i]) && (lettersAlreadyGuessedCorrect.indexOf(letter) === -1)) { 
            // If the letter is inside of the array of lettersOfCurrentWord &&
            // If the letter is not inside of the lettersAlreadyGuessedCorrect
            lettersAlreadyGuessedCorrect.push(letter); // then push the letter into the already guessed correctly array.
            

        } else if ((letter === lettersOfCurrentWord[i]) && (letter === lettersAlreadyGuessedCorrect[i]))  { // This else if statement registers a win if all conditions are met.
 
        // } else if (lettersOfCurrentWord.length === lettersAlreadyGuessedCorrect.length) {
            wins++;

            document.getElementById("winsCounter").innerHTML = "Wins: " +wins;
    
            lettersAlreadyGuessedCorrect = [];
            lettersAlreadyGuessed = [];
            guessLeft = 15;   

            initializeGame();
        }
        
    }

}

function displayIncorrectLetters(letter) { // If letter isn't in the lettersAlreadyGuessed array and is not lettersOfCurrentWord, then push letter to the lettersAlreadyGuessed array, then decrease guessLeft by 1.

    if ((lettersAlreadyGuessed.indexOf(letter) === -1) && (lettersOfCurrentWord.indexOf(letter) === -1)) { // if the indexOf letter can't be found in the already guessed letters && if the indexOf letter can't be found in the letters of current word, then...

        lettersAlreadyGuessed.push(letter); // push letter into letters already guessed.

        guessLeft--; // decrement a guess.

        document.getElementById("guessCounter").innerHTML = "Guess Left: " + guessLeft; //display "Guess left: " with the number of guesses left on HTML

        document.getElementById("compChoice").innerHTML = lettersAlreadyGuessed; 

    }
}

// function wonGame() { // function to check if the correctly guessed letters equal to the letters of the current word, then increment the win counter.

//     for (var i = 0; i < lettersOfCurrentWord.length; i++) {
//         if ((letter === lettersOfCurrentWord[i]) && (letter === lettersAlreadyGuessedCorrect[i])) { // This else if statement registers a win if all conditions are met.

//             wins++;

//             document.getElementById("winsCounter").innerHTML = "Wins: " +wins;

//             lettersAlreadyGuessedCorrect = [];
//             lettersAlreadyGuessed = [];
//             guessLeft = 15;   

//             initializeGame();
//         }
//     }
// }


function loseGame() { 

    if (guessLeft === 0) {

        losses++;

        document.getElementById("lossCounter").innerHTML = "Losses: " +losses;
        document.getElementById("guessCounter").innerHTML = "Out of guesses. You lost.";
        
        lettersAlreadyGuessedCorrect = [];
        lettersAlreadyGuessed = [];
        guessLeft = 15;   
        
    } 

    document.getElementById("compChoice").innerHTML = lettersAlreadyGuessed;

    initializeGame();
}

initializeGame(); //every time a page loads, run the initializeGame function/

// --------------------------------------------------------------------------------------

// A Javascript event for the user end interactivity with the keyboard with the document.onkeyup function.

document.onkeyup = function (event) {
    
// event.key is a JS function that tracks which key is clicked

    if (event.keyCode >= 65 && event.keyCode <= 90) { // keyCodes are given indexes on the keyboard per key, this if statement is assigning which key indexes should be ran. (for this hangman game, run ONLY letters. no special characters/numbers/etc.)

        lettersClicked = event.key.toLowerCase(); // assigning a value to the declared global variable from null to 'event.key.toLowerCase().' .toLowerCase(); ensures that the character the user inputs will stay or become a lowercase character to match the characters in our words array.

        logicGame(lettersClicked); // calling logicGame function with the argument lettersGuessed, to ensure that the keys will always be in lowercase through all these functions.
    }
}

// 1)
// Check if the user guessed correct, add one number to the wins counter.
// If the length of the word is 0, then user wins.
// If the user wins, keep track of the number.

// 2)
// If the user loses, restart the game.



// empty array to push event.key(letters guessed) into
    // var ltrArray = [];

    // ltrArray.push(userGuess); // Pushes user guesses into empty array as a string.

// Displays user guesses to the right HTML elements
    // function ltrGuess() {
        
    //     // Sorts word by given index
    //     // var wordSort = splitWord.sort(function(a, b) {
    //     //     return a - b;
    //     // });
    //     // Setting HTML DOM connections
    //     var userGuessHtml = document.getElementById("userGuessHtml");
    //     var compChoice = document.getElementById("compChoice");
    //     var winsCounter = document.getElementById("winsCounter")
    //     var lossCounter = document.getElementById("lossCounter");
    //     var guessCounter = document.getElementById("guessCounter");

    //     // var wordBox = randWord.createElement("")

    //     // Runs a loop to the lentgh of the chosen word, i is a variable for the index of the length. ( I don't know why this works, besides that it loops through this block of code on the amount of the chosen word. )
    //     for (var i = 0; i < wordInUse.length; i++) {

    //         if (userGuess === wordInUse[i])  { // if event.key is equal to word character,

    //         // Declaring variable userGuessHtml to grabbing the ID userGuessHtml in our HTML file.
           
    //         console.log(wordInUse);

    //         // Then display event.keys pressed.
    //         userGuessHtml.innerHTML += userGuess;
            
    //         }
    //     }

    //     // if letters guessed are not in the chosen word string, 
    //     if (userGuess !== wordInUse[i]); {
        
    //     //then display letters under "letters already guessed"
    //     compChoice.innerHTML += userGuess;

    //     }
        
    //     // Deducts guesses for each userGuess.
    //     guessLeft--; 
        
    //     // if guesses left hit 0, you lose.
    //     if (guessLeft === 0) {
            

    //         // Stop guess counter at 0.
    //         losses++; //Increase loss by 1
            
    //     }
        
    //     // Displaying updated win/loss/guess counters on DOM.
    //     winsCounter.innerHTML = "Wins: " + wins;
    //     lossCounter.innerHTML = "Losses: " + losses;
    //     guessCounter.innerHTML = "Guesses Left: " + guessLeft;
        
    // }

    // ltrGuess(); // Calling the function
        
    // console.log(userGuess); // Prints in console the letters pressed.
// }

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
    //     document.getElementById("compChoice").innerHTML = "Guess what word I'm thinking of: " + letterContain;
    // }

// --------------------------------------------------------------------
