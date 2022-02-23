import { dataFetched } from "./data.js";
console.log(dataFetched);

  function searchMovie(condition){
    const url = `data/ghibli/ghibli.json`;
    fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
     console.log(jsonData.films.filter(film => film.title.includes(condition)))
     return jsonData.films.filter(film => film.title.includes(condition)); 
   });
  }

  searchMovie("Totoro");


//  DESCRIPTION: ${films.description}, DIRECTOR: ${films.director}, PRODUCER: ${films.producer}, RELEASE DATE: ${films.release_date}

/*async function fetch (){
  const datosFetched = await fetch();
  console.log(datosFetched);
}

fetch();*/
