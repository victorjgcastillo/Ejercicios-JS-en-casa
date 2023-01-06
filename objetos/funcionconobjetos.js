// Realizar una funcion que compruebe si los dos objetos son exactamente iguales (si sus propiedades tienen el mismo valor).

const objA = {
    name: 'pepe',
    nie: 1298380.
}

const objB = {
    ...objA
}


const isSimilar = (list) =>{
    if (objB === objA){
        console.log('si son iguales')
    }
    return list;
}