// # ON LOAD

const word = prompt('Dammi una parola per sapere se è palindroma');

// TODO  sostituire con funzione per verificare palindroma

const palindromResult = false;
if(palindromResult) {
    console.log('La parola "' + word + '" è palindroma')
} else {
    console.log('La parola "' + word + '" non è palindroma')
}


// # FUNCTION
/**
 * funzione che verifica se una parola è palindroma
 * 
 * @param {string} word la parola da verificare
 * @return {boolean}  la risposta sarà postiva se la parola è palindrom
 */

function isPalindrome(word) {
    let reverseWord = "";

    for (let i = 0; i < word.lenght; i++) {
        const letter = word [i];
        reverseWord = letter + reverseWord /* contruiamo la parola al contrario */
    } 
    return word == reverseWord
}


