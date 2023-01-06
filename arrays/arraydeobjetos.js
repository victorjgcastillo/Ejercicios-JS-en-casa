// realizar dos funciones
//una que devuelva una persona menor de edad
//otra que devueva la persona con mayor edad

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

const findOlder = (list) =>{
    let result = {age:0};
    list.forEach((element) => {
        if (element.age > result.age) {
            result = element;
        }
        
    });
    return result;

};

const olderPerson =  findOlder(personList);
console.log('mas viejo ', olderPerson);

const findjugler = (list) =>{
    let result = {age:100};
    list.forEach((element) => {
        if (element.age < result.age) {
            result = element;
        }
        
    });
    return result;

};

const juglerPerson = findjugler(personList);
console.log('jugler', juglerPerson );
