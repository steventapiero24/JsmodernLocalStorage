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

    // identificador uinico 
    const tweetObj = {
        id : Date.now(),
        tweet : tweet  // se podria pasar tambien solo tweet
    }

    // Añadir arreglo tweets
    tweets=[...tweets, tweetObj];
    console.log(tweets);

    crearHtml();
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

// crear Html

function crearHtml () {

    limpiarHtml();
    
    if ( tweets.length > 0 ) {
        tweets.forEach ( tweet => {
            const li = document.createElement('li');

            // Añadir texto
            li.innerText = tweet.tweet;

            ListaTweets.appendChild(li);
        })  

        // agregarlo a la lista de tweets

    }
}

// limpiar Html

function limpiarHtml () {
    while (ListaTweets.firstChild) {
        ListaTweets.removeChild(ListaTweets.firstChild);
    }   
}   