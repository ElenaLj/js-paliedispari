// alert("Hello World");

// Consegna Palindroma
// 1) Chiedere all’utente di inserire una parola
// 2) Creare una funzione per capire se la parola inserita è palindroma


// 1) 
const insertWord = prompt("Inserisci una parola");
// console.log(insertWord);

// 2)
function palindrome (word) {
    let parolaInversa = "";

    for (let i = word.length - 1; i >= 0; i --) {
        parolaInversa += word[i];
        console.log(parolaInversa);
    } 
    return parolaInversa;
}

// 3) 
palindrome(insertWord);

// 4)
if (palindrome(insertWord) == insertWord) {
    console.log("La parola inserita è palindroma");
} else {
    console.log("La parola inserita non è palindroma");
}