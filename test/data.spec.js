import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filtrarPeliculas, filtrarAsDs } from '../src/data.js';
import { showMovies, showCharacters, showCoincidences, showInfoCard } from '../src/main.js';

describe('filtrarPelículas', () =>{
  it('is a function', () =>{
    expect(typeof filtrarPeliculas).toBe('function');
  });
});

describe('filtrarAsDs', () =>{
  it('is a function', () =>{
    expect(typeof filtrarAsDs).toBe('function');
  });
  describe("descending order for name ", () => {
    it("descending order for name", () => {
      const result = filtrarAsDs(data, order);
      expect(result[0].title).toEqual("Whisper of the Heart");
    });
  });
});

describe('showMovies',() =>{
  it('is a function',() =>{
    expect(typeof showMovies).toBe('function');
    const elements = showMovies ()
    expect(elements instanceof HTMLElement).toBe(true)
  });
  it.only('Should print 20 elements',() => {
    const cards = showMovies();
    const result = cards.querySelectorAll('.tarjeta')
    expect(result.length).toBe(20)
  })
});

describe('showCharacters', () =>{
  it('is a function', () =>{
    expect(typeof showCharacters).toBe('function');
  });
});

describe('showCoincidences', () =>{
  it('is a function', () =>{
    expect(typeof showCoincidences).toBe('function');
  });
});

describe('showInfoCard', () =>{
  it('is a function', () =>{
    expect(typeof showInfoCard).toBe('function');
  });
});

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
