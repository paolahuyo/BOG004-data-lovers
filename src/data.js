// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};



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