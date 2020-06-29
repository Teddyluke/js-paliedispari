// chiedo all'utente di inserire una parola
var nome = prompt("inserisci un nome.");


var nomeDritto = [];
var nomeReverse = [];
// tratto la parola come un array e cerco di invertirne l'ordine
for (var i = 0; i < nome.length; i++) {
  nomeReverse.push(nome[i]);
  nomeDritto.push(nome[i]);
}
nomeReverse.reverse();
console.log(nomeReverse);
console.log(nomeDritto);

// confronto le due stringhe per verificare che siano identiche


var i = 0
var confronto = false;
while ( i < nomeDritto.length ) {
  if (nomeDritto[i] == nomeReverse[i] ) {
    confronto = true;
  }
  else {
    confronto = false;
  }
  i++;
  console.log(confronto);
}

if (confronto = true) {
  console.log(" i nomi sono palindromi");
}
else {
  console.log("i nomi non sono palindromi");
}
