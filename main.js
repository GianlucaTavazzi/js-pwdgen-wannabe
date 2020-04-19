//chiedere nome utente e colore
var nome_utente = prompt('qual è il tuo nome?')
console.log(nome_utente);

var cognome_utente = prompt('e il tuo cognome?')
console.log(cognome_utente);

var colore_utente = prompt('il tuo colore preferito?')
console.log(colore_utente);

//formare password
var password = nome_utente+cognome_utente+colore_utente+20
console.log(password);
