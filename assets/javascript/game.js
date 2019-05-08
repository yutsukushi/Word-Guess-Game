 // Declare variables
    var wins = 0;
    var losses = 0;

// --------------------------------------------------------------------

// A function declared to process key strokes...
    
// "Press any key to get started"

    document.onkeyup = function (event) {
    
    // event.key is a JS function that tracks which key is clicked

    var userGuess = event.key;

    // empty array to push event.key(letters guessed) into
    var ltrArray = [];
  
    function ltrGuess() {

    ltrArray.push(userGuess);

    // Why did this line work?
    
    document.getElementById("userGuessHtml").textContent = document.getElementById("userGuessHtml").textContent +userGuess;

}

    ltrGuess(ltrArray);

    console.log(userGuess);
    }
// -----------------------------------------------------------

// computer word choices & randomizing them
var compWords = ["water", "bunny", "notebook", "mirror", "porcupine"];

// Why does line 53 work, but not var randWord = function() {compWords[Math.floor(Math.random(compWords) * compWords.length)];}

   // randWord will choose one of the words from compWords array.

    var randWord = compWords[Math.floor(Math.random(compWords) * compWords.length)];

    console.log(randWord);

//     // splitWord separates chosen word into characters.

    var splitWord = randWord.split("");
    console.log(splitWord);

//     // Display correctly guessed letter under compChoices

    // var letterContain = splitWord.includes();

    // function findLetter(splitWord); {
    //     document.getElementById("compChoice").innerHTML = compWords.find(splitWord);
    //     }

//     function
//     console.log(letterContain);

    function displayCompLetter() {
        if (userGuess === letterContain);
        document.getElementById("compChoice").textContent = "Guess what word I'm thinking of: " + letterContain;
    }

// --------------------------------------------------------------------

    // Add guesses next to previous guesses
    // var moreGuess = document.createElement('div');

    // moreGuess.textContent = userGuess;
    
    // displayGuess(moreGuess);
    // if user gets computer word right...
    // if (userGuess === randWord) {
    //     wins++;
    // }

    // if user runs out of guesses...

// a loop to run how many guesses user gets
    // for (var userGuess = 0; userGuess < 15; userGuess++) {
    // lossess++;
    //     }
    
    // if (userGuess === compWords) {
    //    losses++;
    // }

// --------------------------------------------------------------------  
