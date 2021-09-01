//Hamburger:
const iconoHamburger = document.querySelector('#icono-ham'), 
  menu = document.querySelector('#menu');

//Click to hamburger
iconoHamburger.addEventListener('click', (e) => {
  //hide hamburger
  menu.classList.toggle('active');
  const rutaActual = e.target.getAttribute('src');

  if(rutaActual == 'img/hamburger.png'){
    e.target.setAttribute('src','img/hamburger2.png');
  }else{
    e.target.setAttribute('src','img/hamburger.png');
  }
});

//Search method
const searchMethod = document.getElementById('searchMethod');
function changeSearchMethod(itemPushed){
  console.log(itemPushed);
  switch (itemPushed){
    case 'Pokemon':
      break;
    case 'Tipo':
      break;
    case 'Region':
      break;
    default:
      break;
  }
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement; 
}

const menuHamburger = document.getElementById('menuList');
menuHamburger.onclick = function(event) {//Click en algun elemento de la lista hamburguesa
  var target = getEventTarget(event);

  menu.classList.toggle('active');//Hide menu
  iconoHamburger.setAttribute('src','img/hamburger.png');//Change hamburger icon
  changeSearchMethod(target);//function to change results
};

//get API
const API_URL = 'https://pokeapi.co/api/v2/';

fetch(`${API_URL}pokemon/1`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    var pokemon = data
    console.log("nombre: ", pokemon.name)
  });

// var Pokedex = require('pokedex-promise-v2');
// var P = new Pokedex();

// P.getPokemonByName('eevee') // with Promise
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log('There was an ERROR: ', error);
//   });