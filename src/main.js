const $ghibli = document.querySelector('#imgGhibli')
function renderGhibli(image) {
    $ghibli.setAttribute('src', image)
}
fetch('data/ghibli/ghibli.json')
    .then(function (res) {

        return res.json();
    })
    .then(function (data) {
        console.log(data);
        let html = '';
        data.films.forEach(function (films) {
            html += `
    <li> FILM: ${films.title}, SCORE: ${films.rt_score}, DESCRIPTION: ${films.description}, DIRECTOR: ${films.director}, PRODUCER: ${films.producer}, RELEASE DATE: ${films.release_date} </li>
    <img src="${films.poster}" alt="Poster's ${films.title}">
    `;

        })
        document.getElementById('ghibli').innerHTML = html;
    })

