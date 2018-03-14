$( document ).ready(function() {
//make an array of words
var words = ["one","eleven","thousand"];

//choose a random word
var word = words[Math.floor(Math.random()*words.length)];
console.log(word);

//define number of guesses = wordlength * 2
var wordLength = word.length;
console.log(wordLength);

var numGuesses = wordLength * 2;
console.log(numGuesses);

//display word as underscores
var emptyWord = [];
for (var i = 0; i<wordLength;i++) {
    emptyWord.push('_');
}
console.log(emptyWord);

//get user input onkeyup. 
document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    console.log('userguess:'  + userGuess);

//if guess is wrong, display letter in the wrong guesses
if (word.indexOf(userGuess) === -1) {
    var wrongGuesses = [];
    for (var i = 0; i < numGuesses; i++) {
    wrongGuesses.push(userGuess[i]);
    }
    console.log('letter aint there');
    console.log('Wrong Guesses :' + wrongGuesses)
}



//if guess is right, show the letter instead of dash
else {
    console.log('letter is there');
    //if guess is same as before, nothing happens

}



//define right/wrong guesses

};


//define wins & keep track of wins

});