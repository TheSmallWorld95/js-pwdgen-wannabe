var nome = prompt("Inserisci un nome");

console.log(nome);

var cognome = prompt("Inserisci un cognome");

console.log(cognome);

var colorePreferito = prompt("Inserisci il tuo colore preferito");

console.log(colorePreferito);

var dataDiNascita = prompt("Inserisci la tua data di nascita");

console.log(dataDiNascita);

document.getElementById('Nome').innerHTML = nome;
document.getElementById('Cognome').innerHTML =cognome;
document.getElementById('psw').innerHTML = nome + cognome + colorePreferito + dataDiNascita;
