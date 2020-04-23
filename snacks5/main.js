// stampa il cubo dei primi N numeri dove N è un numero dato dall'utente;
// chiedo all'utente di inserire un numero;
var numero = parseInt(prompt('Inserisci un numero: '))
console.log('Il numero inserito è: ' + numero);
// inserisco con un ciclo for i numeri da 1 fino al numero che inserirà l'utente;
for (var i = 1; i <= numero; i++) {
    // stampo la lista di numeri generata dal ciclo con affiancato il relativo numero elevato al cubo;
    console.log(i + ' elevato al cubo = ' + (i * i * i));
}
