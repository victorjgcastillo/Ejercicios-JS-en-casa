//Realizar una funcion para pintar por consola todas las propiedades de cada persona.

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
]

//funcion que pinta las propiedades de una persona:
const printPerson = (person) =>{
    //imprimimos sus propiedades
    console.log('nombre:', person.name);
    console.log('role:', person.role);
    console.log('edad:', person.age);
}

//se recorre el array con un for, for off o for each
//personList.forEach(printPerson)
personList.forEach((person => printPerson(person)))

printPerson(personList[0])

for (const person of personList) {
    printPerson(person);
}
