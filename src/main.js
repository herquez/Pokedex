//Hamburger:
const iconoHamburger = document.querySelector('#icono-ham'), 
  menu = document.querySelector('#menu');

//Click on hamburger
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

// Change searching method
function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement; 
}

const menuHamburger = document.getElementById('menuList');
menuHamburger.onclick = function(event) {//Click en algun elemento de la lista hamburguesa
  var target = getEventTarget(event);

  menu.classList.toggle('active');//Hide menu
  iconoHamburger.setAttribute('src','img/hamburger.png');//Change hamburger icon
  changeSearchMethod(target.id);//function to change results
};

//Search method
const searchMethod = document.getElementById('searchMethod');
function changeSearchMethod(itemPushed){
  
  switch (itemPushed){
    case 'poke':
      searchByPokemon();
      break;
    case 'type':
      searchByType();
      break;
    case 'reg':
      searchByRegion();
      break;
    default:
      break;
  }
}