// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si 
// colora di azzurro ed emetto un messaggio in console 
// con il numero della cella cliccata.

const play = document.querySelector("#play");

const grid =  document.querySelector("#grid");

// Quando clicclo su play  creo i quadrati e all'interno i numeri
play.addEventListener("click", function(){
    grid.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        const square = generateSquare(i);
        grid.append(square);
    }
})
// Creo una funzione che genera un quadrato
// Quando l'utente clicca su ogni cella, la cella cliccata si 
// colora di azzurro ed emetto un messaggio in console 
// con il numero della cella cliccata.
function generateSquare(number) {
    const square = document.createElement("div");
    square.classList.add("ms-square-big");
    square.classList.add("d-flex");
    square.classList.add("justify-content-center");
    square.classList.add("align-items-center");
    square.innerHTML = `<span>${number}</span>`;
    square.addEventListener('click', function(){
        this.classList.add(`ms-bg-lightblue`);
        alert(`Hai cliccato il numero ${number}`);
        console.log(`Hai cliccato il numero ${number}`);
    });
    return square;
}