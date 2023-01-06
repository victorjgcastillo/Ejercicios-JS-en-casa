const personajesDragonBall = [
    { name: "Goku",
      planeta: "neptuno",
      isALive: false},

      { name: "vegeta",
      planeta: "neptuno2",
      isAlive: true},

      { name: "tron",
      planeta: "tierra",
      isAlive: true}
]

console.log(personajesDragonBall);
//acceder por consola a un elemento del array
console.log(personajesDragonBall[2]);
//acceder por consola a un elemento del array con .lenght
console.log(personajesDragonBall[personajesDragonBall.length-2]);

//agregar un objeto al Array con .push()

personajesDragonBall.push({name: "piccolo", planeta: "martes", isALive: false})
console.log(personajesDragonBall);

// eliminar un elemento con .pop()

personajesDragonBall.pop()
console.log(personajesDragonBall);

//encontrar un elemento eliminado con .pop()

//let personajeEliminado = personajesDragonBall.pop();
//console.log(personajeEliminado);

//cambiar el orden del array de objeto con .Reverse(devuelve el array de abajo para arriba)

personajesDragonBall.reverse()
console.log(personajesDragonBall);


let numbers = [90, 50, 45]

console.log(numbers);
//ordenar los numeros con .sort()
console.log(numbers.sort());

//ordenar alfabeticamente con .sort()

console.log(personajesDragonBall.sort(function(a,b){
    return a.name > b.name ? 1 : -1;
}));


// eliminar eleento con .splice(primer parametro es para la pocicion que desea empezar, el segundo parametro es para eliminar la cantidad de elementos que se deseen, y se puede poner un tercer parametro para añadir elementos depues del ultimo elemento)

personajesDragonBall.splice(2,1, {name: "bulma", planeta: "tierra", isALive: true})
console.log(personajesDragonBall);

// agregar personajes al principio del Array con .unshift()
personajesDragonBall.unshift({name: "gojan", planeta: "tierra", isALive: false})
console.log("unshift ", personajesDragonBall);


