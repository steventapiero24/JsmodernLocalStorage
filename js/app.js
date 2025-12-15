// Variables
const Formulario = document.querySelector('#formulario');
const ListaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event listeners

eventListeners();
function eventListeners () {

    // cuando el usuairo agrega
    Formulario.addEventListener('submit', addTweet);

    // cuando el documento esta listo 

    document.addEventListener ( 'DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];

        crearHtml();
    })
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

    // reiniciar el formulario
    Formulario.reset();
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
            // Creat btn
            const btnEliminar = document.createElement('a');
            btnEliminar.classList = 'borrar-tweet';
            btnEliminar.innerText = 'X';

            // añadir la function Eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);  
            }


            const li = document.createElement('li');

            // Añadir texto
            li.innerText = tweet.tweet;
            
            // asignar Btn
            li.appendChild(btnEliminar);
            // agregarlo a la lista de tweets
            ListaTweets.appendChild(li);
        })  


    }
     // Agregar a local storage
    sincronizarStorage();
}

function sincronizarStorage () {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Borrar tweet

function borrarTweet (id) {
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHtml();
}

// limpiar Html
function limpiarHtml () {
    while (ListaTweets.firstChild) {
        ListaTweets.removeChild(ListaTweets.firstChild);
    }   
}   

