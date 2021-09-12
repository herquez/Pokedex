//ContentByPokemon
function pad(number, length) {
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

function printPokemon(id, name, height, weight, types){
    resultado = `
    <div class="resultRowHead">
        <div>
            Pokemon ID
        </div>
        <div>
            Photograph
        </div>
        <div>
            id: ${id}
        </div>
        <div>
            id: ${id}
        </div>
    </div>
    <div class="resultRow">
        <div class="resultId">
            id: ${id}
        </div>
        <img src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(id, 3)}.png">
        <div class="pokeInfo">
            ${name}
            <ul class = "physicalResult">
                <li>height: ${height}</li>
                <li>weight: ${weight}</li>
            </ul>
        </div>
        <ul class = "typeResult">`;
            types.forEach(t => {
                resultado += `<li>${t.type.name}</li>`;
            });
        resultado += `</ul>
    </div>`;
    return resultado;
}

function resultByPokemon() {
    const searchByPokemonButton = document.getElementById('buscarBtn');

    searchByPokemonButton.addEventListener('click', function () {
        const searchByPokemonLabel = document.getElementById('pokemonSearch');
        var busqueda = searchByPokemonLabel.value;

        if (busqueda != '') {
            fetch(`${API_URL}pokemon/${busqueda}`)
                .then(response => {
                    if (response.ok) {
                        response.json().then(data => {
                            content.innerHTML = printPokemon(data.id, data.name, data.height, data.weight, data.types);
                        });
                    } else {
                        content.innerHTML = `
                        <div class="resultRow">
                            No se encontró el nombre o id del pokemon
                        </div>`;
                    }
                });
        } else {
            content.innerHTML = `
            <div class="resultRow">
                No se encontro el nombre o id del pokemon
            </div>`;
        }
    });
}

// function resultByPokemon(){
//     // var searchButton = document.getElementById('buscarBtn');
//     // var searchByPokemonLabel = document.getElementById('pokemonSearch');
//     var busqueda = searchLabel.value;
//     var resutlado;

//     if(busqueda!=null){
//         searchButton.addEventListener('click', function(){
//             fetch(`${API_URL}pokemon/${busqueda}`)
//             .then(response => response.json())
//             .then(data => {
//                 resultado = `<div id="resultRow">`;
//                 resultado += `${data.name}</div>`;
//             });
//         });
//     } else{
//         resultado = `
//         <div id="resultRow">
//             No se encontro el nombre o id del pokemon
//         </div>`;
//     }
//     return resultado;
// }

// function resultByType(){
//     return null;
// }

// function resultByRegion(){
//     return null;
// }

// function results(searchMethod){
//     switch (searchMethod){
//         case 'poke':
//             return resultByPokemon();
//             break;
//         case 'type':
//             return resultByType();
//             break;
//         case 'reg':
//             return resultByRegion();
//             break;
//         default:
//             break;
//     }
// }