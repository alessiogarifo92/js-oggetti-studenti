// Oggetti
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


/////////////// PUNTO UNO////////////

// creo oggetto con descrizione studente

var studente = {
  'nome' : 'Alessio',
  'cognome' : 'Garifo',
  'eta' : 10
}
console.log(studente);

// stampo con for-in tutte le proprieta
for (var key in studente) {
  console.log(key + " : " + studente[key]);
}


/////////////// PUNTO DUE////////////

// creo array oggetti di studenti

var studenti = [
  {
    'nome' : 'Alessio',
    'cognome' : 'Garifo',
    'eta' : 10
  },

  {
    'nome' : 'Marco',
    'cognome' : 'Salvatore',
    'eta' : 10
  },

  {
    'nome' : 'Martina',
    'cognome' : 'Polimeno',
    'eta' : 10
  },

  {
    'nome' : 'Soraya',
    'cognome' : 'Saccenti',
    'eta' : 10
  },

  {
    'nome' : 'Alberto',
    'cognome' : 'Vannacci',
    'eta' : 10
  }
];
console.log(studenti);
// ciclo ogni studente e stampo nome e cognome
// primo modo
for (var i = 0; i < studenti.length; i++) {

  console.log(studenti[i].nome + ' ' + studenti[i].cognome);
};

// secondo modo e entrambi danno stesso risultato
// for (var key in studenti) {
//   console.log(studenti[key].nome + ' ' + studenti[key].cognome);
// }

/////////////// PUNTO TRE////////////

// chiediamo ad utente di inserire con prompt nuovo oggetto con nome cognome e eta

var nomeUtente = prompt('Inserisci il tuo nome');

var cognomeUtente = prompt('Inserisci il tuo cognome');

var etaUtente = parseInt(prompt('Inserisci la tua età'));

// inseriamo nuovo oggetto studente da dati inseriti in prompt
// creiamo nuova variabile nuovoStudente per nuovo oggetto
var nuovoStudente = {};

// andiamo a dare ad ogni elemento inserito nei prompt la rispettiva proprieta all interno dell oggetto
nuovoStudente.nome = nomeUtente;
nuovoStudente.cognome = cognomeUtente;
nuovoStudente.eta = etaUtente;

// pushiamo nell array il nuovo oggetto
studenti.push(nuovoStudente);
console.log(studenti[i].nome + ' ' + studenti[i].cognome + ' ' + studenti[i].eta);



// ALTRO METODO PIU CORTO

// var nuovoStudente = {
//   name : prompt("inserisci il tuo nome"),
//   surname : prompt("inserisci il tuo cognome"),
//   eta : parseInt(prompt("inserisci la tua età"))
// }
// console.log(nuovoStudente);
// studenti.push(nuovoStudente);

// ciclo per ristampare lista completa studenti
// for (var i = 0; i < studenti.length; i++) {
//   console.log(studenti[i].name, studenti[i].surname,studenti[i].eta);
// }
