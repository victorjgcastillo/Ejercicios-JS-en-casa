//destructuring
//en objetos
const personajesDragonBall = { 
    name: "Goku",
    planeta: "neptuno",
    isALive: false,
    hijos: ["gojan", "pan"]

  };

 const { name , planeta, ...restoDeGoku} = personajesDragonBall;
 console.log("el nombre de mi personaje es ", name, "y su planeta ", planeta );
 console.log("la demas propiedades de mi objeto es " , restoDeGoku);


 //en array (es raro su uso)

 let myArray = ["loly", "alfredo", "andres", "victor"]
 let [theFirtPerson, theSecond, theThrid] = myArray

 console.log(theFirtPerson);
 console.log(theSecond);