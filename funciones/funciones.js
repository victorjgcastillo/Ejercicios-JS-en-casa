// nombre (parametros){contenido};


//Sin parametros
const sayMyName = () =>{
    console.log("Di mi nombre");
}

sayMyName()

//con un parametro

const myNameIs = (nombre) =>{
    console.log("mi nomre es " + nombre);
}

myNameIs("Victor")

let myName = "Jose";
myNameIs(myName)

//con dos parametros

const myNameAndMyLastName = (nombre, apellido) => {
    console.log("Mi nombre es " + nombre + " y Mi apellido es " + apellido);
}

myNameAndMyLastName("Victor", "Gonzalez");

//Funciones sobre arrays

let myFamily = ["Victor", "Loly", "Andres"];

const faltoYo = (array, element) =>{
    array.push(element)
}

faltoYo(myFamily, "Victor jr");

console.log(myFamily);


//reutilizar funciones.

let wordCity = ["Valencia", "Madrid", "Milan"];
faltoYo(wordCity, "Roma");
console.log(wordCity);

//return como se usa.

const suma = (numA, numB) => {
    return numA + numB
}

console.log(suma(5,10));

//funciones con array

numeros = [2,4,6,8,10];

const sumaDeNumeros = (nums) => {
    let resultado = 0;
    for (let index = 0; index < nums.length; index++) {
        resultado += nums[index]; // ==> resultado = resultado + nums[index]
        
    }
    return resultado/numeros.length 
}

console.log('la media de todos los numeros es ' + sumaDeNumeros(numeros));

//SCOPE.

let myAdvenger = "Thor"
const getMyAdvenger = () =>{
    let myAdveger = "Hulk";
    console.log("Dentro de la funcion scope local" + myAdveger);
}
getMyAdvenger()// para mostrar en consola lo de dentro de la funcion, se debe declarar fuera a funcion misma
console.log("fuera de la funcion scope global " + myAdvenger );
