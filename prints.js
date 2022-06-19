function pad(number, length){
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

function printHeaderPokemon(){
    resultado = `
    <div id="resultHeaderPokemon">
        <div>
            Pokemon ID
        </div>
        <div>
            Photograph
        </div>
        <div>
            Information
        </div>
        <div>
            Type(s)
        </div>
    </div>`;
    return resultado;
}

function printPokemon(id, name, height, weight, types){
    resultado = `
    <div class="resultRowPokemon">
        <div class="resultId">
            ${id}
        </div>
        <img src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(id, 3)}.png">
        <div class="pokeInfo">
            <div class="nameResult">
                ${name.replace(name[0], name[0].toUpperCase())}
            </div>
            <ul>
                <li>Height: ${height}</li>
                <li>Weight: ${weight}</li>
            </ul>
        </div>
        <ul class = "typeResult">`;
            types.forEach(t => {
                resultado += `<li>${t.type.name.replace(t.type.name[0], t.type.name[0].toUpperCase())}</li>`;
            });
        resultado += `</ul>
    </div>`;
    return resultado;
}

function damageRelationsPrint(data, campo){
    var resultado = `
    <div class="damage_relation_column">
        <p>${campo}:</p>
        <ul>`;
        if(data != 0){
            data.forEach(e => {
                resultado +=`<li>${e.name.replace(e.name[0], e.name[0].toUpperCase())}</li>`;
            });
        } else{
            resultado +=`<li>None</li>`;
        }
        resultado += `</ul>
    </div>`;
    return resultado;
}

function printTypeInfo(name, damage_relations){
    var resultado = `
    <div id="resultHeaderType">
        <div class="nameResult">
            Type: ${name.replace(name[0], name[0].toUpperCase())}
        </div>
        <div class="damage_relations">`;
            resultado += damageRelationsPrint(damage_relations.double_damage_from, 'Double damage from');
            resultado += damageRelationsPrint(damage_relations.double_damage_to, 'Double damage to');
        resultado += `</div>
        <div class="damage_relations">`;
            resultado += damageRelationsPrint(damage_relations.half_damage_from, 'Half damage from');
            resultado += damageRelationsPrint(damage_relations.half_damage_to, 'Half damage to');
        resultado += `</div>
        <div class="damage_relations">`;
            resultado += damageRelationsPrint(damage_relations.no_damage_from, 'No damage from');
            resultado += damageRelationsPrint(damage_relations.no_damage_to, 'No damage to');
        resultado += `</div>
    </div>`;
    return resultado;
}