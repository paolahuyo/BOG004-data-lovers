// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const dataFetched = fetch("data/ghibli/ghibli.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (dataFetched) {
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
    return dataFetched;
  });

  