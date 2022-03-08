import data from './data/ghibli/ghibli.js';
import { filtrarPeliculas, filtrarAsDs, evaluateId } from './data.js';

let dataFilms = data.films;
let movies =[];
//Constantes para seccion movies
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
const tarjetas = document.getElementsByClassName('elements');
const btnOrder = document.querySelector('#btnOrder');
//Constantes para seccion characters
const rootCharacters = document.querySelector('#rootCharacters');
const rootCharacter = document.querySelector('#rootCharacter');
const titleChar = document.querySelector('#titleChar');
const photoChar = document.querySelector('#photoChar');
const specie = document.querySelector('#photoChar');
const gender = document.querySelector('#photoChar');
const age = document.querySelector('#photoChar');
const eyeColor = document.querySelector('#photoChar');
const hairColor = document.querySelector('#photoChar');
const characters = document.querySelector('#partCharacters');
//Constantes de la barra de busqueda
const searchContainer = document.querySelector('.search-container');
const inputBox = searchContainer.querySelector("input");
const coincidenceBox = searchContainer.querySelector(".autocom-box");

//FUNCIONES
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

/*Función para mostrar la info de la pelicula que selecciona el usuario*/
function renderMovie(tarjetas) {
      for (let i = 0; i < tarjetas.length; i++) {
            tarjetas[i].addEventListener('click', () => {
                  rootMovies.style.display = "none";
                  rootMovie.style.display = "block";
                  rootCharacters.style.display = "none";
                  rootCharacter.style.display = "none";
                  btnOrder.style.display="none";
                  titleMovie.innerText = dataFilms[i].title;
                  photoMovie.setAttribute('src', dataFilms[i].poster);
                  rateMovie.innerText = dataFilms[i].rt_score;
                  releaseDate.innerText = dataFilms[i].release_date;
                  directorMovie.innerText = dataFilms[i].director;
                  producerMovie.innerText = dataFilms[i].producer;
                  descriptionMovie.innerText = dataFilms[i].description;
            })
      }
}
renderMovie(tarjetas)

/*funcion para pintar los personajes de las peliculas*/
function showCharacters(dataF) {
      let html = "";
      dataF.forEach(function(film){
            film.people.forEach(function(people){
                  html += `
                        <div id="elementsChar" class="elementsChar">
                        <img data-id="${people.id}" id="photosChar" src="${people.img}" alt="Poster's ${people.name}" name="${people.name}">
                        <div class="infoCenter">
                        <h2 class="titles1">Name:</h2><p>${people.name}</p><br>
                        </div>
                        </div>
                  `;
            });
            document.getElementById("ghibliCharacters").innerHTML = html;
      })
}
showCharacters(dataFilms)

/*función con fecth para guardar array movies*/
fetch('./data/ghibli/ghibli.json')
    .then(response => response.json())
    .then(data => movies = data.films) 
    .catch(error => {
        throw(error);
    })
console.log(data);
console.log(movies);

/*función buscar coincidencias en el input del usuario*/
let userData=0;
inputBox.onkeyup = (e) => {
      //console.log(e.target.value);
      userData = e.target.value;
      coincidenceBox.style.display = "none";
      return userData;
}

/*funcion mostrar coincidencias debajo del buscador*/
function showCoincidences(arrayResults){
      coincidenceBox.style.display = "block";
      if(arrayResults.length!==0){
            coincidenceBox.innerHTML="";
            for(let i=0; i<arrayResults.length; i++){
                  coincidenceBox.innerHTML+=`
                  <div id="coincidences">
                  <span onclick=" " id="coincidence-${arrayResults[i].id}" class="spanSearch">${arrayResults[i].title} </span>
                  </div>
                  `
            }
      } else {
            coincidenceBox.innerHTML=`<p>No hay resultados para su busqueda</p>`   
      }
      const resultsSearch = document.querySelectorAll('.spanSearch');
      console.log(resultsSearch);
      for(let j=0; j< resultsSearch.length ; j++){
            console.log("hola");
            resultsSearch[j].addEventListener("click", (e)=>{

                        rootMovies.style.display = "none";
                        rootMovie.style.display = "block";
                        rootCharacters.style.display = "none";
                        rootCharacter.style.display = "none";
                        btnOrder.style.display="none";
                        /*titleMovie.innerText = dataFilms[i].title;
                        photoMovie.setAttribute('src', dataFilms[i].poster);
                        rateMovie.innerText = dataFilms[i].rt_score;
                        releaseDate.innerText = dataFilms[i].release_date;
                        directorMovie.innerText = dataFilms[i].director;
                        producerMovie.innerText = dataFilms[i].producer;
                        descriptionMovie.innerText = dataFilms[i].description;*/
                        console.log(e.target.id);
            })
      }
}   


/*Función para mostrar la info de la película seleccionada después de filtrar alfabéticamente*/
function showInfoCard (data) {
      const tarjetasOrdered = document.getElementsByClassName('elements');
      for (let i = 0; i < tarjetasOrdered.length; i++) {
            tarjetasOrdered[i].addEventListener('click', () => {
            rootMovies.style.display = "none";
            rootMovie.style.display = "block";
            rootCharacters.style.display = "none";
            rootCharacter.style.display = "none";
            btnOrder.style.display="none";
            searchContainer.style.display="none";
            titleMovie.innerText = data[i].title;
            photoMovie.setAttribute('src', data[i].poster);
            rateMovie.innerText = data[i].rt_score;
            releaseDate.innerText = data[i].release_date;
            directorMovie.innerText = data[i].director;
            producerMovie.innerText = data[i].producer;
            descriptionMovie.innerText = data[i].description;
            })
      }
} 

/*función para ir a la info de la peli seleccionada desde el buscador*/

/*function showMovieSearch (data,selection) {
      let result = data.filter((element)=> element.title == selection)
      for (let i = 0; i < result.length; i++) {
            titleMovie.innerText = result[i].title;
            photoMovie.setAttribute('src', result[i].poster);
            rateMovie.innerText = result[i].rt_score;
            releaseDate.innerText = result[i].release_date;
            directorMovie.innerText = result[i].director;
            producerMovie.innerText = result[i].producer;
            descriptionMovie.innerText = result[i].description;
      }
}*/
//console.log(coincidence);
//console.log(coincidenceBox);
coincidenceBox.addEventListener ('change', ()=>{
      //console.log(coincidenceBox.value);
})

//EVENTOS//

/*Evento para llamar a todos los personajes de Ghibli*/
characters.addEventListener('click', ()=>{
      rootMovies.style.display = "none";
      rootMovie.style.display = "none";
      rootCharacters.style.display = "block";
      rootCharacter.style.display = "none";
      btnOrder.style.display="none";
      searchContainer.style.display="none";
})

/*Evento del botón Search*/
send.addEventListener('click', () => showCoincidences(filtrarPeliculas(dataFilms, userData)))

/* Evento de ordenar alfabéticamente */
document.getElementById("order").addEventListener('change',() => {
      let value = document.getElementById("order").value;
      showMovies(filtrarAsDs(dataFilms, value));
      showInfoCard(dataFilms);
})

/*Evento para mostrar la info del personaje que selecciona el usuario*/

const cardChar = document.getElementsByClassName('elementsChar');
for (let i = 0; i<cardChar.length; i++) {
      cardChar[i].addEventListener('click', (event) => {
            let filterId = evaluateId(dataFilms,event);
            console.log('personaje', event.target.dataset);
            console.log(filterId);
            rootMovies.style.display = "none";
            rootMovie.style.display = "none";
            rootCharacters.style.display = "none";
            rootCharacter.style.display = "block";
            btnOrder.style.display="none";
            titleChar.innerText = filterId.name;
            photoChar.setAttribute('src', filterId.img);
            specie.innerText = filterId.specie;
            gender.innerText = filterId.gender;
            age.innerText = filterId.age;
            eyeColor.innerText = filterId.eye_color;
            hairColor.innerText = filterId.hair_color;
      })
}
