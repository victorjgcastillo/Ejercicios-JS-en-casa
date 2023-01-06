// Realizar una funcion para cada operacion del ejercicio que reciban por parametros los 3 numeros y usarlas para obtener el mismo resultado por consola;
//con la funcion suma, realizar otra funcion que reciba  los 3 numeros por parametro y devuelvan  lo siguiente: suma (a,b,c)/ suma (a,b,c)


const suma = (num1,num2,num3) => (num1 + num2 + num3)
console.log('primera suma '+ suma(4,5,7));

console.log('segunda suma ' + suma(100,2000,50));

const resta = (num1,num2,num3) => {
    return (num1 - num2 - num3)
}
console.log('mi resta es ', resta(33,47,20));

const multy = (num1,num2,num3) => (num1 * num2 * num3)
console.log('mi multiplicacion es ', multy(2,1,3));

const division = (a,b,c) =>{
    return((a/b)/c)
}

console.log('mi division es :', division(4,2,20));

const divideAndAdd = (a,b,c) => {
    const sumadentrodelafuncion = suma(a,b,c);
    return sumadentrodelafuncion/sumadentrodelafuncion;
}

console.log('divideAndAdd es igual a: ', divideAndAdd(5,1,1));

