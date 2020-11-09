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
    'cognome' : 'Garifo'
  },

  {
    'nome' : 'Marco',
    'cognome' : 'Salvatore'
  },

  {
    'nome' : 'Martina',
    'cognome' : 'Polimeno'
  },

  {
    'nome' : 'Soraya',
    'cognome' : 'Saccenti'
  },

  {
    'nome' : 'Alberto',
    'cognome' : 'Vannacci'
  }
];
console.log(studenti);
// ciclo ogni studente e stampo nome e cognome
for (var i = 0; i < studenti.length; i++) {
  for (var key in studenti[i]) {

  }
  console.log(studenti[i]);
}
