/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. 

BONUS:
Provare a stampare la lista in pagina invece che in console.

1. creo un ciclo che vada da 1 a 100 compreso
2. all'interno del ciclo verifico quali numeri sono divisibili per 3 e per 5
3.per i numeri divisibili per 3 stampo Fizz per 5 Bazz entrambi FizzBazz

*/

/* setto il numero di cicli da fare */
const numberOfCycles = 100;
/* prendo l'elemento dal DOM */
const tableBody = document.getElementById("tbody");
/* inizzializzo la variabile da stampare nell'html */
let printTable='';

/* ciclo for per 100 volte */
for(let i=1;i<=numberOfCycles;i++)
{
    let message = '';

    /* controllo se è divisibile per 3 */
    if(i % 3 === 0)
        message += 'Fizz';

    
        /* controllo se è divisibile per 5  */
    if(i % 5 === 0)
        message += 'Buzz';

    /* se è divisibile per 3 oper 5 allora stampo fizz o buzz altrimenti stampo il numero */
    if(message)
    {
        console.log(message);
        printTable += `  <tr>
                            <td>${message}</td>
                         </tr>`;
    }
    else
    {
        console.log(i);
        printTable += `  <tr>
                             <td>${i}</td>
                         </tr>`;
    }
}

/* stampo nella tabella il risultato */
tableBody.innerHTML = printTable;
console.log(printTable);