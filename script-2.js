// alert("Hello World");

// Consegna Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// ***************** ragionamento basic
// il programma dovrebbe confrontare le stringhe. Si può considerare una stringa come una sorta di array (?) con ogni lettera che ha il suo indice?

// R A D A R - - - - - R A D A R
// 0 1 2 3 4 - - - - - 4 3 2 1 0 -----> ok palindroma

// C I A O - - - - - - O A I C
// 0 1 2 3 - - - - - - 3 2 1 0 -------> no palindroma

// come fare?

// esempio su developer mozilla
// return "cat" [1] mi dà a che infatti corrisponde a indice 1 - 

// 1) 
const insertWord = prompt("Inserisci una parola");
console.log(insertWord);

// 2)
const wordArray = Array.from(insertWord);
console.log(wordArray);

// 3)
function palindrome (word) {
    const reverseWord = word.reverse();
    return reverseWord;
}

// 4
const result = palindrome(wordArray);
console.log(result);