const datos = require('./data');
const normal = Array();

function searchBrand(query) {
    let data = Array();
    for (let brand in datos.brands) {
        let val = query.search(datos.brands[brand].toLowerCase());
        if (val > -1) {
            data.push(datos.brands[brand]);
        }
    }
    return data;
}

function searchClothes(query) {
    let data = Array();
    for (let cloth in datos.clothes) {
        let val = query.search(datos.clothes[cloth].toLowerCase());
        if (val > -1) {
            data.push(datos.clothes[cloth]);
        }
    }
    return data;
}

function searchWord(texto, indice, palabra) {
    // console.log(texto.length);
    // console.log("Word", indice);
    let word = "";
    let j = 0;
    for (let i = indice; i < texto.length; i++) {
        if (texto.charAt(i) == palabra.charAt(j)) {
            // console.log("SLC",texto.charAt(i) == palabra.charAt(j));
            word += texto.charAt(i);
        } else if (texto.charAt(i) == palabra.charAt(j).toLowerCase()) {
            // console.log("CLC",texto.charAt(i) == palabra.charAt(j).toLowerCase());
            word += texto.charAt(i);
        }
        j++;
    }
    return word;
}

function nuevoTexto(query) {
    let aux = query;
    let q = query.toLowerCase();
    let brand = searchBrand(q);
    let cloth = searchClothes(q);

    console.log(brand);
    console.log(cloth);

    if (brand.length > 0) {
        brand.forEach(b => {
            let word = searchWord(query, q.search(b.toLowerCase()), b);
            aux = aux.replace(word, "<b>" + word + "</b>");
        });
    }

    if (cloth.length > 0) {
        cloth.forEach(c => {
            let word = searchWord(query, q.search(c.toLowerCase()), c);
            aux = aux.replace(word, "<i>" + word + "</i>");
        });
    }

    return aux;
}

module.exports = {
    nuevoTexto
}