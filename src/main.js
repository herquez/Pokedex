const API_URL = 'https://pokeapi.co/api/v2/';

fetch(`${API_URL}pokemon/1`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    var pokemon = data
    console.log("nombre: ", pokemon.name)
  });
