// alert("Hello World!");

// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// 1) Chiedere all'utente pari o dispari - conservane il valore;
// 2) Chiedere all'utente un numero da 1 a 5 - conservane il valore;
// 3) Fai una funzione per generare un numero random per il computer;
// 4) Fai la somma del numero-utente con numero-computer;
// 5) Per stabilire il vincitore ti serve un'altra funzione per controllare se la somma è pari o dispari;
// 6) Dichiara il vincitore;

// 1)
const evenOdd = prompt("Scegli pari o dispari"); 
//il prompt conserverà già il valore "pari" o "dispari" che poi andrò a confrontare;
console.log(evenOdd);

// 2)
const insertNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
//anche qui il prompt conserva il valore che mi servirà per dopo;
console.log(insertNumber);

// 3) 
function computerNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
    // qui non ha senso fare il console.log perché la funzione non è ancora stata invocata e il blocco di codice per ora è inattivo;
}

// 3.1) Mi serve invocare la funzione con una variabile, così da poterla usare;
const randomComputer = computerNumber(1, 5);
console.log(randomComputer);

// 4) 
const sum = insertNumber + randomComputer;
console.log(sum);

// 5)
function numberType (numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// devo invocare di nuovo la funzione per poterla usare
const result = numberType(sum);
console.log(result);

// 6)
if (evenOdd == "pari" && result == true) {
    console.log("Hai vinto");
} else if (evenOdd == "dispari" && result == false) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso :( ");
}