// chiedo all'utente di inserire una parola
var nome = prompt("inserisci un nome.");

//  uso la funzione per invertire il nome
var nomeReverse = reverseString(nome);
console.log(nome);
console.log(nomeReverse);

//  confronto le due stringhe.
if (nome == nomeReverse) {
  console.log("il nome è palindromo");

}else {
  console.log("il nome non è palindromo");
}

function reverseString(str) {
  // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}




// tentativo 2 senza utilizzo di array


var nomeContrario = "";

for (var i = nome.length - 1; i >= 0 ; i--) {
  nomeContrario += nome[i];
}

console.log(nomeContrario);

if (nome == nomeContrario) {
  console.log("il nome è palindromo");

}else {
  console.log("il nome non è palindromo");
}


// var nomeDritto = [];
// var nomeReverse = [];
// // tratto la parola come un array e cerco di invertirne l'ordine
// for (var i = 0; i < nome.length; i++) {
//   nomeReverse.push(nome[i]);
//   nomeDritto.push(nome[i]);
// }
// nomeReverse.reverse();
// console.log(nomeReverse);
// console.log(nomeDritto);
//
// // confronto le due stringhe per verificare che siano identiche
//
//
// var i = 0
// var confronto = false;
// while ( i < nomeDritto.length ) {
//   if (nomeDritto[i] == nomeReverse[i] ) {
//     confronto = true;
//   }
//   else {
//     confronto = false;
//   }
//   i++;
//   console.log(confronto);
// }
//
// if (confronto = true) {
//   console.log(" i nomi sono palindromi");
// }
// else {
//   console.log("i nomi non sono palindromi");
// }
