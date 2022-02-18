
fetch("data/ghibli/ghibli.json")
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
  });

//  DESCRIPTION: ${films.description}, DIRECTOR: ${films.director}, PRODUCER: ${films.producer}, RELEASE DATE: ${films.release_date}
