 // Declare variables
    var wins = 0;

// --------------------------------------------------------------------

// A function declared to process key strokes...
    document.onkeyup = function (event) {
    
    // event.key is a JS function that tracks which key is clicked
    var userGuess = event.key;
    
    // Function that displays keys clicked.
    function displayGuess() {
        
    document.getElementById("userGuessHtml").innerHTML = "Letters already Guessed: " + userGuess;
    }

    // Calling displayGuess function to display user guesses.
    displayGuess(userGuess);
    }

// --------------------------------------------------------------------

    // Add guesses next to previous guesses

    // if user gets computer word right...
    if (userGuess === randWord) {
        wins++;
    }

    // if user runs out of guesses...
    if (userGuess === compWords) {
       losses++;
    }

// --------------------------------------------------------------------  

    // computer word choices & randomizing them
    var compWords = ["water", "bunny", "notebook", "mirror", "porcupine"];

    var randWord = function() {
        Math.floor(Math.random(compWords)) * compWords.length;
        
    }

// Displays computer choice word on screen

    function displayWord() {
        document.getElementById("compChoice").innerHTML = "Current word " + randWord;
    }

    