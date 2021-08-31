var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

// const API_URL = 'https://pokeapi.co/api/v2/';

// fetch(`${API_URL}pokemon/1`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     var pokemon = data
//     console.log("nombre: ", pokemon.name)
//   });

P.getPokemonByName('eevee') // with Promise
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });