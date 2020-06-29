
var scelta = prompt("pari o dispari?");

var numUtente = parseInt(prompt("inserisci un numero."));

var numPc = getRandomInt(1, 5);


console.log(numPc);

var somma = numUtente + numPc;

console.log(somma);

if (isEven(somma) == true && scelta == "pari") {
  console.log(" hai vinto");
}
else if (isEven(somma) == false && scelta == "dispari") {
  console.log(" hai vinto");

} else {
  console.log( "hai perso");
}


// funzione che ritorna un numero intero randomico tra un min e un max range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// funziona che ritorna se un numero è pari o dispari
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}
