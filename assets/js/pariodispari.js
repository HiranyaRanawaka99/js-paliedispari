
//PARI O DISPARI

// # ON LOAD

let userNumber = parseInt(prompt("Inserisi un numero da 1 a 5"));
 while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
     alert("Dati non validi");
     userNumber = parseInt(prompt("Inserisi un numero da 1 a 5"));
 }
 console.log('numero utente' + userNumber);


 let userChoice = prompt("Scegli 'pari' o 'dispari'", "pari").trim().toLowerCase();
 while (userChoice != "pari" && userChoice != "dipari") {
     alert("Scelta non valida");
     userChoice = prompt("Scegli 'pari' o 'dispari'", "pari");
 }
 console.log('scelta utente' + userNumber);


 const pcNumber = genarateRandomNumber(1,5);
 console.log('numero pc' + pcNumber);


 const sumNumbers = userNumber + pcNumber;
 console.log('Somma' + sumNumbers);

 const isUserWinner = userWon(sumNumbers, userChoice);
 if (isUserWinner) {
     console.log('L\'utente ha vinto');
 } else {
     console.log('Il pc ha vinto');
 }

// # FUNCTION
/**
 * Funzione che genera un numero random
 * 
 * @param {int} min il valore minimo del numero generato
 * @param {int} max il valore massimo del numero generato
 * @returns {int} il numero randomico generato tra massimo e minimo
 */
function genarateRandomNumber (min, max) {
     const randomNumber = Math.floor(Math.random()* (max-min +1) +min);
     return randomNumber;
}


/**
 * funzione che dichiara se il vincitore è l'utente
 * 
 * @param {int} sum la somma del numero dell'utente e di quello del pc
 * @param {string} userChoice la scelta dell'utente
 * @param {boolean} il risultato sarà positivo qalcora avrsse vinto l'utent
 */
function userWon(sum, userChoice) {
     const isSumEven = sum % 2 === 0;
     if (
          (userChoice == "pari" && isSumEven) ||
          (userChoice == "dispari" && !isSumEven)
      ) {
          return true;
     }

}
