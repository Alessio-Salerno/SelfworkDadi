
// let array_1 = [
//     ['un', 'per', 'incatenarli.'],
//     ['Anello', 'trovarli,'],
//     ['ghermirli', 'e'],
//     ['gondor', 'mark'],
//   ];
  
// //   ---------------------- \\
// //"Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“


//   let array_2 = [
//     [['trovarli,']],
//     ['tu,', 'sciocchi'],
//     ['tu,', 'sciocchi', ['padron', 'Sauron']],
//     ['nel', ['fuggite', 'gandalf']],
//     [['domarli,', 'passare'], 'buio']
//   ];

// //   ----- \\

// console.log(
//  array_1[1][0],
//  array_1[0][1],
//  array_2[4][0][0],
//  array_1[0][0],
//  //Un anello per domarli,
//  array_1[0][0],
//  array_1[1][0],
//  array_1[0][1],
//  array_2[0][0][0],
// //Un anello per trovarli,
// array_1[0][0],
// array_1[1][0],
// array_1[0][1],
// array_1[2][0],
// // Un anello per ghemirli
// array_1[2][1],
// array_2[3][0],
// array_2[4][1],
// array_1[0][2]
// )

// ---------------------------------- \\

function giocoDadi(){

    // Funzione per richiedere il numero dei tiri dei dadi 
    let tiri_n_Volte = Number(prompt('Quanti tiri per ciascun giocatore?'), 8);

}
// Funzione per richiedere il tiro dei dadi
function tiroDadi(){
    return Math.floor(Math.random() * 6) + 1;
}

// Punteggi Iniziali dei giocatori 
punteggioUtente1 = 0;
punteggioUtente2 = 0;

// Calcolo Punteggio Utente 1
// Usando ciclo for

for(let i = 0; i < tiri_n_Volte; i++){
    punteggioUtente1 += tiroDadi();
}


// Calcolo Punteggio Utente 2
// Usando ciclo for

for(let i = 0; i < tiri_n_Volte; i++){
    punteggioUtente2 += tiroDadi();
} 

// Stampando il punteggio dei giocatori 

console.log(`Il punteggio del giocatore 1 è ${punteggioUtente1}`);
console.log(`Il punteggio del giocatore 2 è ${punteggioUtente2}`);

// ------------ \\

if(punteggioUtente1 > punteggioUtente2){
    console.log('Giocatore 1 vince');
}
else if( punteggioUtente2 > punteggioUtente1){
      console.log('Giocatore 2 vince');
}
else{
    console.log('non vince nessuno e quindi è un pareggio');
}

// richiamo funzione
giocoDadi();