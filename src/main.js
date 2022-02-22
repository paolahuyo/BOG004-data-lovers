
/*fetch("data/ghibli/ghibli.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    let html = "";
    data.films.forEach(function (films) {
      html += `
            <div id="elements">
            <img id="photos" src="${films.poster}" alt="Poster's ${films.title}">
            <h2 id="titles"> FILM: ${films.title}<br>SCORE: ${films.rt_score}<h2>
            </div>
    `;
    });
    document.getElementById("ghibli").innerHTML = html;
  });*/

function searchMovie(query){
  const url = `data/ghibli/ghibli.json=${query}`;
  fetch(url)
  .then(response => response.json())
  .catch(()=>console.error("hay errores"))
  .then((jsonData)=> {
    console.log("esta es la data");
    console.log(jsonData);
 });
}

//  DESCRIPTION: ${films.description}, DIRECTOR: ${films.director}, PRODUCER: ${films.producer}, RELEASE DATE: ${films.release_date}

/*async function fetch (){
  const datosFetched = await fetch();
  console.log(datosFetched);
}

fetch();*/
