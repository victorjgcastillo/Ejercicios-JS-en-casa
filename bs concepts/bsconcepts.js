//Variables//
//strings//
let housepractices = "practices";

console.log( "This block is for houses" + housepractices)
//Numbers 1
let firtsnumber = 50
console.log(firtsnumber)

//condicional //
//suma 2//
let x1 = 27;
let y1 = 1203;
let z1 = x1 + y1;
console.log(z1)

//keys plus 3//
// Dado el siguiente javascript, imprime con un ``console.log`` la suma de goles de ambos jugadores.
//Given the next javascript, prints to a ``console.log`` the sum of goals for both players.

const soccerplayer1 = {name: "Cristiano Ronaldo", goals: 819};
const soccerplayer2 = {name: "Leo Messi", goals: 790};

console.log (soccerplayer1.goals + soccerplayer2.goals);

//keys modification 4
//given de next javasscripts, update the value for the varible 

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

        //modifica el valor de la variable global price
globalBasePrice = 25000;

        //modifica el finalprice

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log(car1)
console.log(car2)

//OPERATORS

//multiply
console.log(10 * 5);

//restos
// de dividir 15 por 9
console.log(15 % 9);


// arrays
//Consigue el valor "BMW" del array de cars y muestralo por consola.
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[2]);


const favoritefoods =  ["barbecue", "paella", "pabellon", "see food" ];
console.log(favoritefoods[2]);

//Cambia el tercer elemento de cars a "Ford"

const carros = ['chevrolet', 'Volvo', 'BMW'];
console.log(carros[2] = "ford");

//recorre el array para saber el numero de elementos;

const countries = ["Spain", "Venezuelan", "germany", "US"];
console.log(countries.length)

//Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1])

//Elimina el último elemento del array y muestra el primero y el último por consola.

const theShameless = ["Frank", "Monica", "Carl", "Iam", "Ly", "Sonia"];
theShameless.pop();
console.log(theShameless[0],theShameless[theShameless.length-1]);

//Elimina el segundo elemento del array y muestra el array por consola.

const soccerPlayers = ["Cr", "Messi", "Sterling", "Sala", "Ibrahimovich", "Lucas Modric"];
soccerPlayers.splice(1,1);
console.log(soccerPlayers);

//En base al código siguiente, muestra los mensajes correctos por consola.

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 !== number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 * 2 == number1 || number1 / 5 == number3) {
        console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
      }

//      Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (i = 0; i < 10; i++){
        console.log (i);
}

//Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.

for( j= 0; j < 10; j++){
        if( j % 2 === 0);{
                console.log(j);
        }
}

//Crea un bucle para conseguir dormir contando ovejas. Este bucle empieza en 0 y termina en 10. Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle y cambia el mensaje en la última vuelta a 'Dormido!'.

 for( co = 0; co < 10; co++ ){
        if(co === 9){
                console.log("dormido");
        } else{
                console.log("intentando dormir");
        }
 }
