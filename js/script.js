// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// flowchart TD
//    A[INIZIO] -->|consegna| B[stampa in console i numeri da 1 a 100]
//    B --> C[FINE Consegna 1]
//    // Inizio Ciclo
//    D[INIZIO Milestone] -->|milestone 1| E{multiplo di 3? or Multiplo di 5? and multiplo sia di 3 che di 5}
//    E -->|multiplo di 3| F[Multipli di 3 = stampi Fizz]
//    E -->|multipli di 5| G[Multipli di 5 = stampi Buzz]
//    E -->|multipli sia di 3 che di 5| H[Multipli di 3 e 5 = stampi FizzBuzz]
//    E -->|falso| I[scrivi num]
//    E -->|milestone 2| L[appendi elemento html con valore num/stringa corretta]
//    // FINE Ciclo
//    L -->|milestone 3| M[applica stile differente per le 3 tipologie di multiplo]
//    M --> N[FINE Milestone]

// alert('Hello World!');



// /* <div class="row g-3">
//       <div class="col-12 col-sm-5 col-md-4 col-log-2">
//         <div class="box-num">
//         </div>
//       </div>
//     </div> */

const app = document.getElementById('app');
const row = document.createElement('div');
row.setAttribute('class', "row g-3");
app.append(row);

let numMax = 100;

for(let i = 1; i <= 100; i++) {
      const col = document.createElement('div');
      col.setAttribute('class', "col-12 col-sm-6 col-md-4 col-lg-2");

      if ((i % 3 != 0) && (i % 5 != 0)) {
        const numPrimo = document.createElement("div");
        numPrimo.setAttribute('class', "numPrimo");
        numPrimo.innerHTML = i;
        col.append(numPrimo);
        row.append(col);
      } else if((i % 3 === 0) && (i % 5 === 0)) {
        const fizzbuzz = document.createElement("div");
        fizzbuzz.setAttribute('class', "fizzbuzz");
        fizzbuzz.innerHTML = "FIZZBUZZ";
        col.append(fizzbuzz);
        row.append(col);
      } else if(i % 3 ===0) {
        const fizz = document.createElement('div');
        fizz.setAttribute('class', "fizz");
        fizz.innerHTML = "FIZZ";
        col.append(fizz);
        row.append(col);
      } else if(i % 5 === 0){
        const buzz = document.createElement("div");
        buzz.setAttribute('class', "buzz");
        buzz.innerHTML = "BUZZ";
        col.append(buzz);
        row.append(col);
      }  
}










  