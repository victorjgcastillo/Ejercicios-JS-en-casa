const personajesDragonBall = { 
      name: "Goku",
      planeta: "neptuno",
      isALive: false,
      hijos: ["gojan", "pan"]

    };

   

//acceder a valores de un objeto

console.log(personajesDragonBall.name);
//puede ser usando corchetes
console.log(personajesDragonBall["planeta"]);

//puede ser declarando otra variable con el valr del objeto.
let estaVivo = "isALive";
console.log(personajesDragonBall[estaVivo]);

//acceder a un array dentro de un objeto
console.log(personajesDragonBall.hijos[1]);
console.log(personajesDragonBall["hijos"][0]);