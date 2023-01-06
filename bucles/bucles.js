//bucles FOR
//variable inicial que inicia en 0 generalmente
// condicion a cumplir
//cambio en la variable inicial
for (let index = 0; index < 10; index++) {
    console.log('avanzo', index);
}

for (let i= 10; i > 0; i--) {
    console.log('retrocedo', i);
}

//for con condicion if
const personList = [
    {
        name : 'sergio',
        role : 'teacher',
        age : 32,
    },
    {
        name : 'victor',
        role : 'student',
        age : 30,
    },
    {
        name : 'pedro',
        role : 'student',
        age : 45,
    },
    {
        name : 'marcos',
        role : 'student',
        age : 25,
    
    }
];
let agepersontotal = 0
for (let index = 0; index < personList.length; index++) {
    const person = personList[index];
        
    if (person.age){
        agepersontotal += person.age;
    }
    
}
console.log("la sumas de las edades es " + agepersontotal);


// FOR EACH
// array.recorrer(elemento => {lo que hagamos con el elemento})
// array.recorrer(fuction(elemento, index){lo que hagamos con el elemento})

personList.forEach(function (person, index) {
    console.log('los nombres de nuetra lista son: ' + person.name);
})

personList.forEach((personas, i) =>{
    console.log('en mi pocision i ' + i + " el rol es " + personas.role );
})

//FOR OF se suele usar sobretodo para arrays
for (const element of personList) {
   console.log(element);
    }

//for of con condicion
for (const element of personList) {
   if (element.age > 25) {
    console.log("mayor a 25 " + element.name);
   } 
}

//FOR IN se suele usar para objetos para recoger los atributos de cada objetos
for (const key in personList[0]) {
    console.log('tengo key ', key, " con valor ", personList[1][key]);
        
    }

    //for in dentro de un for of

for (const iterator of personList) {
    for (const key in iterator) {
        console.log("forofforin= ", ' tengo key ', key, " con valor ",iterator[key]);
            
        }
    }

