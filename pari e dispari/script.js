//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//chiedere all'utente pari o dispari e numero
const userChoice = prompt("scegli pari o dispari");
const UserNumber = parseInt(prompt("dimmi un numero da 1 a 5"));

console.log(userChoice, UserNumber);

//generare un numero del computer
const computerNumber = getRndInteger(1,5);
console.log(computerNumber);

//fare la somma
const resultSum = UserNumber + computerNumber;
console.log(resultSum);

//controllare se la somma è pari o dispari
const sumOddEven = evenOrOdd(resultSum);
console.log(sumOddEven);


//scrivere chi ha vinto
if (sumOddEven === userChoice) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}



//functions vado su w3school random js
function getRndInteger(min, max) {
    return Math.floor(Math.random()*(max-min +1)) + min;
}
/**
 * 
 * @param {Number} numberToCheck 
 * @returns{String}
 */

function evenOrOdd(numberToCheck) {
    let isEvenOrdOdd = "odd";
    if (numberToCheck % 2 === 0) {
        isEvenOrdOdd = "even";
    }

    return isEvenOrdOdd;
}


