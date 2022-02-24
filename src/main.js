import data from './data/ghibli/ghibli.js';
import {filtrarPeliculas} from './data.js';

 let dataFilms= data.films
console.log(dataFilms);

function mostrar(data){
  let html = "";
       data.forEach(function (film) {
        html += `
              <div id="elements">
              <img id="photos" src="${film.poster}" alt="Poster's ${film.title}">
              <h2 id="titles"> FILM: ${film.title}<br>SCORE: ${film.rt_score}<h2>
              </div>
      `;
      });
      document.getElementById("ghibliMovies").innerHTML = html;
}
mostrar(dataFilms)

console.log (filtrarPeliculas(dataFilms, 'Castle in the Sky'))

