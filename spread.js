const superHeroes = ["batman", "spiderman", "robin"];
const villanos = ["jocker", "pinguino", "harley"]

//clonamos con spreadoperator

const todosLosPersonajes = [...superHeroes, ...villanos]
console.log(todosLosPersonajes);
console.log(todosLosPersonajes.join("_"));

//se puede actualzar un array en el caso de ser necesario
const ActualizacionDeVillanos = [...villanos, "dr. octopus", "bein"]
console.log(ActualizacionDeVillanos);


//SPREAD SOBRE OBJETOS

const persona =  {
    name: "victor",
    age: 30
};

const direccion = {
    ciudad: "Madrid",
    cp: 28045

}

const todosLosDatos = {...persona, ...direccion}
console.log(todosLosDatos);

const actualizacionDeDatos = {...persona, age: 50, ...direccion, ciudad: "Valencia" }
console.log(actualizacionDeDatos);