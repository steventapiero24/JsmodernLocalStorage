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

    const tweet = document.querySelector('#tweet').value;
    if ( tweet === "") {
        mostrarError('No puede ir vacio');

        return; // no se ejecuta mas el codigo
    }

}

function mostrarError (error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenidoError = document.querySelector('#contenido');
    contenidoError.appendChild(mensajeError);

    // Eliminar la alerta

    setTimeout( () => {
        mensajeError.remove();
    },3000)
}