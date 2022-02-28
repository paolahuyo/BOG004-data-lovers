import data from './data/ghibli/ghibli.js';
import { filtrarPeliculas } from './data.js';

let dataFilms = data.films;
console.log(dataFilms);

const palabraClave = document.querySelector('#formulario');
const send = document.querySelector('#btn-send');
const rootMovies = document.querySelector('#rootMovies');
const rootMovie = document.querySelector('#rootMovie');
const titleMovie = document.querySelector('#titleMovie');
const photoMovie = document.querySelector('#photoMovie');
const descriptionMovie = document.querySelector('#descriptionMovie');
const rateMovie = document.querySelector('#rateMovie');
const releaseDate = document.querySelector('#releaseDate');
const directorMovie = document.querySelector('#directorMovie');
const producerMovie = document.querySelector('#producerMovie');

const searchContainer = document.querySelector('.search-container');
const inputBox = searchContainer.querySelector("input");
const coincidenceBox = searchContainer.querySelector(".autocom-box");

/*funcion para pintar los posters de las peliculas*/

function showMovies(data) {
      let html = "";
      data.forEach(function (film) {
            html += `
              <div id="elements" class="elements">
              <img id="photos" src="${film.poster}" alt="Poster's ${film.title}">
              <div class="rows"><h2 class="titles1">Film:</h2><p class="infoMain">${film.title}</p></div>
              <div class="rows"><h2 class="titles1">Score: </h2><p class="infoMain">${film.rt_score}</p></div>
              </div>
      `;
      });
      document.getElementById("ghibliMovies").innerHTML = html;
}
showMovies(dataFilms)

/*funcion para pintar los personajes de las peliculas*/

//let dataFilms = data.films;
//console.log(dataFilms);

/*function showCharacters(data) {
      let html = "";
      data.forEach(function (people) {
            html += `
              <div id="elementsChar" class="elementsChar">
                  <img id="photos" src="${people.img}" alt="Poster's ${people.name}">
                  <div>
                  <h2 class="titles1">Name:</h2><p>${people.name}</p><br>
                  <h2 class="titles1">Specie:</h2><p>${people.specie}</p>
                  <h2 class="titles1">Gender:</h2><p>${people.gender}</p>
                  <h2 class="titles1">Age:</h2><p>${people.age}</p><br>
                  </div>
                  <div>
                  <h2 class="titles">Eye Color:</h2><p>${people.eye_color}</p><h2 class="titles">Hair Color:</h2><p>${people.hair_color}</p>
                  </div>
              </div>
      `;
      });
      document.getElementById("ghibliCharacters").innerHTML = html;
}
showCharacters(dataFilms)
*/

//console.log (filtrarPeliculas(dataFilms, 'Castle in the Sky'))

/*Evento para mostrar la info de la pelicula que selecciona el usuario*/
const tarjetas = document.getElementsByClassName('elements');
for (let i = 0; i < tarjetas.length; i++) {
      tarjetas[i].addEventListener('click', () => {
            rootMovies.style.display = "none";
            rootMovie.style.display = "block";
            titleMovie.innerText = dataFilms[i].title;
            photoMovie.setAttribute('src', dataFilms[i].poster);
            rateMovie.innerText = dataFilms[i].rt_score;
            releaseDate.innerText = dataFilms[i].release_date;
            directorMovie.innerText = dataFilms[i].director;
            producerMovie.innerText = dataFilms[i].producer;
            descriptionMovie.innerText = dataFilms[i].description;
      })
}
console.log(tarjetas);

/*Evento del botón Search*/
send.addEventListener('click', () => filtrarPeliculas(dataFilms, palabraClave))


/*funcion buscar coincidencias en el input del usuario*/

inputBox.onkeyup = (e) => {
      console.log(e.target.value);
      let userData = e.target.value;
      let emptyArray = [];
      if (userData) {
            emptyArray = data.filter((data)=>{
            return element.title.toLowerCase() == data.toLowerCase()
            })
            };
            console.log(emptyArray);
      }

// btn

let btnOrder = document.getElementsByClassName("btnOrder")[0];
btnOrder. addEventListener("click", characterFilter)

function characterFilter(){
      const allMovies = document.querySelectorAll ('titleMovie');
      let sortBy = document.getElementById("sortBy").value;               
      let sortOrder = document.getElementById("sortOrder").value;
      here.innerHTML = sortData(data, sortBy, sortOrder); 
}


