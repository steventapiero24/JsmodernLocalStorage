// Variables
const Formulario = document.querySelector('#formulario');
const ListaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event listeners

eventListeners();
function eventListeners () {
    Formulario.addEventListener('submit', addTweet);
}


// Funciones

function addTweet (e) {
    e.preventDefault();

    console.log("Agregando tweet...");
}
