var POSSIBLE_WORDS =["obdurate", "verismilitude", "defenestrate",
    "obsequious", "dissonant", "toaday", "idempotent"]
    var MAX_GUESSES = 6;
    var word = "";
    var guesses = "";
    var guess_count = MAX_GUESSES;
    var gameOver = false;

function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guess_count = MAX_GUESSES;
    gameOver = false;
    updatePage();
}
//alerts user the game is over
function guessLetter(){

    if (gameOver){
        alert("Game over");
        return;
    }
    
    var input = document.getElementById("guess");
    var letter = input.value;

//preventing guesses before word is chosen
if (word === ""){
    alert("Please click 'New Game' first");
    return;
}

//no guessing same letter 2x
    if(guesses.indexOf(letter)>= 0) {
        input.value = "";
        alert("Letter already guessed, Try again.");
        return;
    }

    if (word.indexOf(letter) < 0){
        guess_count--;
    }
    guesses += letter;
    input.value = "";
    updatePage();
} 

function updatePage(){
    console.log("updated called");
     var clueString = "";
     for(var i = 0; i <word.length; i++){
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter) >= 0){
            clueString += currentLetter + " ";
        }
        else
            clueString+= "_ ";
        }
    //alerts when you win/lose
    if (guess_count <= 0){
        gameOver = true;
        alert("You lost :( The word was: " + word);
    }
    else if (clueString.indexOf("_") < 0 ) {
        gameOver = true;
        var result = document.getElementById("result");
        result.innerHTML = "Congratulations! You guessed the correct word: "+ word;
    }

    //update clue string
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    //update the guesses from the user
    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters: " + guesses;

    //update the images
    var image = document.getElementById("hangmanImage");
    image.src = "images/hangman" + guess_count + ".gif";
}


