const API_URL = 'https://pokeapi.co/api/v2/';

// Funcion para crear el interfaz de la busqueda por nombre o ID
function searchByPokemon(){
    searchMethod.innerHTML = `
    <div id="searchByPokemon">
        <label>Busqueda por nombre de pokemon ó mediante "id" en la Pokedex.</label>
        <div class="clearfix"></div>
        <button id="buscarBtn">Buscar</button>
        <input type="text" id="pokemonSearch" placeholder="pokemon name / id">
    </div>`;
    resultByPokemon();
}

// Llenar los combobox de la busqueda por tipo
function putTypesSelect(data){
    var searchByType;
    data.results.forEach(function(type) {
        searchByType += `<option value="${type.name}">
            ${type.name.replace(type.name[0], type.name[0].toUpperCase())}
        </option>`;
    });
    searchByType += '</select>';
    return searchByType;
}

// Funcion para crear el interfaz de la busqueda por tipo
function searchByType(){
    fetch(`${API_URL}type`)
    .then(response => response.json())
    .then(data => {
        var searchByType = `<div id="searchByType">
            <label>Busqueda de pokemones por tipo(s)</label>
            <div class="clearfix"></div>
            <button id="buscarBtn">Buscar</button>
            <select id="type1">`;
                searchByType += putTypesSelect(data);
            searchByType += `
            <select id="type2">
                <option value="none">None</option>`;
                searchByType += putTypesSelect(data);
            searchByType += `
        </div>`;
        searchMethod.innerHTML = searchByType;
        resultByType();
    });
}

// Busqueda por region
// Funcion para poner los botones para buscar por region
function searchByRegion(){
    fetch(`${API_URL}region`)
    .then(response => response.json())
    .then(data => {
        var searchByRegion = `<div id="searchByRegion">
        <label>Busqueda de pokemones por región</label>`;
        var index = 0;
        data.results.forEach(function(region, index) {
            searchByRegion += `<input type="radio" name="region" value="${region.name}Radio" id="${region.name}RadioId"> <label>${region.name}</label> `;
            index++;
            if((index % 10) == 0)
                searchByRegion += `<div class="clearfix"></div>`;
        });
        searchByRegion += `</div>`;
        searchMethod.innerHTML = searchByRegion;
        resultByRegion();
    });
}