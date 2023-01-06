//Con los siguientes obj.Realice una funcion que compruebe si los dos obj son exactamente iguales (sus propiedades tienen el mismo valor).

const objA = {
    name: 'pepe',
    dni: 'XXXXXX',
};

const objB = {...objA};

const sameObj = (objA, objB) => {
    //return objA === objB; no se pueden comparar propiedades de objetos directamente.
    const propObjA = Object.keys(objA);//Object.keys nos indica las propiedades de los objetos
    //console.log(propObjA);
    const propObjB = Object.keys(objB);
    //console.log(propObjB)

    let result = true;
    //for (let index = 0; index < propObjA.length; index++) {
     //   const prop = propObjA[index];
    //    console.log(prop);
    //    
    //}


    for (const prop of propObjA) {
        if (propObjB.includes(prop) === false) {
            result = false;
        }
    }
    return result;
}


console.log('son iguales?', sameObj(objA,objB)); ;

//console.log(sameObj(objA,objB));