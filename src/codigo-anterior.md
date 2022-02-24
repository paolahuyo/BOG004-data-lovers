const dataFetched = fetch("data/ghibli/ghibli.json")
  .then(function (res) {
    return res.json();
  })
  .then(function(dataFetched) {
    console.log(dataFetched);
    let html = "";
    dataFetched.films.forEach(function (films) {
      html += `
            <div id="elements">
            <img id="photos" src="${films.poster}" alt="Poster's ${films.title}">
            <h2 id="titles"> FILM: ${films.title}<br>SCORE: ${films.rt_score}<h2>
            </div>
    `;
    });
    document.getElementById("ghibliMovies").innerHTML = html;
  });

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