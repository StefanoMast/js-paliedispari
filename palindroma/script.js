//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//chiedo all'utente di inserire una parola
const userWord = prompt("dimmi una parola");
console.log(userWord);

//uso split per dividere la parola lettera per lettera
//let splittedWord = userWord.split('');
//console.log(splittedWord);

//parola inversa
//let revSplittedWord = splittedWord.reverse();
//console.log(revSplittedWord);

// uso join per riunire tutte le lettere precedentemente separate da split
//let revSplittedWord = splittedWord.join('');
//console.log(revSplittedWord);

let revWord = palWord(userWord);

if (userWord === revWord) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
}

//faccio la funzione
function palWord(userWord) {
    const InvertedUserWord = userWord.split('').reverse().join('');
    return InvertedUserWord;
}