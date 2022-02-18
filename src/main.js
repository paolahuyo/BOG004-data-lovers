const $ghibli = document.querySelector('#imgGhibli')
function renderGhibli(image) {
  $ghibli.setAttribute('src', image)
}
let x =''
fetch('data/ghibli/ghibli.json')
  .then(function (res) {

    return res.json();
  })
  .then(function (data) {
      x=data
    console.log(data);
    let html = '';
    data.films.forEach(function (films) {
      html += `
    <li>${films.title} ${films.description} ${films.director} ${films.producer} ${films.poster} ${films.release_date} ${films.rt_score}</li>
    `;
    })
    document.getElementById('ghibli').innerHTML = html;
  })
console.log (x);
