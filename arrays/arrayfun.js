//realizar una funcion para encontrar el numero mas grande
//realizar una funcion para encontrar los numeros impares

const numberList = [10, 41, 125, 2, 13, 32];

const findMax = (list) => {
    let result = 0;
    list.forEach(element => {
        if (element > result) {
            result = element;
        }
    });
    return result;
}  

const maxNumber = findMax(numberList);
console.log(maxNumber);

const findImparNumbers = (list) =>{
    let result = [];
    list.forEach((element) => {
        if ((element % 2) != 0) {
            result.push(element);
        }
    });
    return result;
}

const imparNumber = findImparNumbers(numberList)
console.log(imparNumber);
