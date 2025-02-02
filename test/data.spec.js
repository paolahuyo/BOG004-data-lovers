import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filtrarPeliculas, filtrarAsDs, evaluateId } from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js';

let orderTest="za";
let forMovies=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "release_date": "1986",
    "rt_score": "95"
  },
  {
  "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
  "title": "My Neighbor Totoro",
  "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
  "director": "Hayao Miyazaki",
  "producer": "Hayao Miyazaki",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
  "release_date": "1988",
  "rt_score": "93"
  },
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
    "release_date": "1989",
    "rt_score": "96",
  },
  {
    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "title": "Grave of the Fireflies",
    "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
    "release_date": "1988",
    "rt_score": "97"
  }
]

let resultMovie = [
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
    "release_date": "1989",
    "rt_score": "96",
  },
]

describe('filtrarPelículas', () =>{
  it('is a function', () =>{
    expect(typeof filtrarPeliculas).toBe('function');
  });
  test('returns `filtrarPeliculas`', () => {
    expect(filtrarPeliculas(forMovies, 'kiki')).toEqual(resultMovie);
  })
});

describe('filtrarAsDs', () =>{
  it('is a function', () =>{
    expect(typeof filtrarAsDs).toBe('function');
  });
  test('descending order for name', () => {
      const result = filtrarAsDs(forMovies, orderTest);
      expect(result[0].title).toEqual("My Neighbor Totoro");
  });
});

describe ('evaluateId', ()=>{
  test ('returns evaluate id', () => {
     //evento falso
    const result = evaluateId(data.films, {'target':{'dataset':{'id':'fe93adf2-2f3a-4ec4-9f68-5422f1b87c01'}}} )
    expect (result).toEqual(data.films[0].people[0]);
  })
})

