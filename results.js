function resultByPokemon(){
    const searchByPokemonButton = document.getElementById('buscarBtn');
    searchByPokemonButton.addEventListener('click', function (){
        const searchByPokemonLabel = document.getElementById('pokemonSearch');
        var busqueda = searchByPokemonLabel.value;
        if (busqueda != '') {
            fetch(`${API_URL}pokemon/${busqueda.toLowerCase()}`)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        var contenido = printHeaderPokemon();
                        contenido += printPokemon(data.id, data.name, data.height, data.weight, data.types);
                        content.innerHTML = contenido;
                    });
                } else {
                    content.innerHTML = `
                    <div class="resultRowPokemon">
                        No se encontró el nombre o id del pokemon.
                    </div>`;
                }
            });
        } else {
            content.innerHTML = `
            <div class="resultRowPokemon">
                Ingresa un nombre o ID de un pokemon.
            </div>`;
        }
    });
}

function resultByType(){
    const searchByTypeButton = document.getElementById('buscarBtn');
    const selectType1 = document.getElementById("type1");

    selectType1.addEventListener('change', function(){
        console.log("Cambio de type1");
    });
    searchByTypeButton.addEventListener('click', function(){
        const selectType2 = document.getElementById("type2");
        var type1 = selectType1.options[selectType1.selectedIndex].value;
        var type2 = selectType2.options[selectType2.selectedIndex].value;

        fetch(`${API_URL}type/${type1}`)
        .then(response1 => response1.json())
        .then(data1 => {
            fetch(`${API_URL}type/${type2}`)
            .then(response2 => {
                if (response2.ok) {
                    response2.json().then(data2 => {
                        var contenido = printTypeInfo(data1.name, data1.damage_relations);
                        contenido += printTypeInfo(data2.name, data2.damage_relations);
                        contenido += printHeaderPokemon();
                        data1.pokemon.forEach(poke => {
                            fetch(`${API_URL}pokemon/${poke.pokemon.name}`)
                            .then(responsePoke => responsePoke.json())
                            .then(dataPoke => {
                                if(dataPoke.types.length==2 && 
                                (dataPoke.types[0].type.name==type2||dataPoke.types[1].type.name==type2)){
                                    contenido += printPokemon
                                    (dataPoke.id, dataPoke.name, dataPoke.height, dataPoke.weight, dataPoke.types);
                                    content.innerHTML = contenido;
                                }
                            });
                        });
                    });
                } else {
                    var contenido = printTypeInfo(data1.name, data1.damage_relations);
                    contenido += printHeaderPokemon();
                    data1.pokemon.forEach(poke => {
                        fetch(`${API_URL}pokemon/${poke.pokemon.name}`)
                        .then(responsePoke => responsePoke.json())
                        .then(dataPoke => {
                            contenido += printPokemon
                            (dataPoke.id, dataPoke.name, dataPoke.height, dataPoke.weight, dataPoke.types);
                            content.innerHTML = contenido;
                        });
                    });
                }
            });
        });
    });
}