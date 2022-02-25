import data from './data/ghibli/ghibli.js';
import {filtrarPeliculas} from './data.js';

let dataFilms= data.films
console.log(dataFilms);

const palabraClave = document.querySelector('#formulario');
const send = document.querySelector('#btn-send');
const rootMovies = document.querySelector('#rootMovies');
const rootMovie = document.querySelector('#rootMovie');
const titleMovie = document.querySelector('#titleMovie');
const photoMovie = document.querySelector('#photoMovie');

/*funcion para pintar los posters de las peliculas*/

function mostrar(data){
  let html = "";
       data.forEach(function (film) {
        html += `
              <div id="elements" class="elements">
              <img id="photos" src="${film.poster}" alt="Poster's ${film.title}">
              <h2 id="titles"> FILM: ${film.title}<br>SCORE: ${film.rt_score}<h2>
              </div>
      `;
      });
      document.getElementById("ghibliMovies").innerHTML = html;
}
mostrar(dataFilms)

//console.log (filtrarPeliculas(dataFilms, 'Castle in the Sky'))
const tarjetas = document.getElementsByClassName('elements');
for ( let i=0; i< tarjetas.length; i++ ) {
   //   console.log(tarjetas[i]);
      tarjetas[i].addEventListener ('click', () => {
            rootMovies.style.display= "none";
            rootMovie.style.display= "block";
            const movieSelected = dataFilms[i];
            const srcPoster = dataFilms[i].poster;
            console.log(srcPoster);
            titleMovie.innerText = movieSelected.title;
            photoMovie.setAttribute('src', 'srcPoster');


      })
}

console.log(tarjetas);
send.addEventListener('click',() => filtrarPeliculas(dataFilms,palabraClave))



