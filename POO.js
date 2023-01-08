//Realizar la clase Vehiculo con las propiedades potencia, rueda y ocupantes.
//Realizar dos clases de coche y autobus, que hereden de esta rellenando las propiedades de la clase padre automaticamente. Añadir una nueva propiedad "marca". Realizar un metodo pra pintar todas sus caracteristicas e instanciar un objeto de cada clase que llame a la funcion de pintar.

class Vehicle{
    constructor( power, numberOfWheels, numberOfPeople){
        this.power = power;
        this.numberOfWheels = numberOfWheels;
        this.numberOfPeople = numberOfPeople
    }
}

class Car extends Vehicle{
    constructor (power, brand){
        super( power, 4, 5);
        this.brand = brand;
    }
x

print () {
console.log(`--Coche marca ${this.brand}--`);
console.log(` ${this.power} CV`);
console.log(` ${this.numberOfWheels} ruedas`);
console.log(` ${this.numberOfPeople} ocupantes`);
    }
}

class Bus extends Vehicle{
    constructor (power, brand){
        super( power, 6, 100);
        this.brand = brand; 
    }
print () {
    console.log(`--Coche marca ${this.brand}--`);
    console.log(` ${this.power} CV`);
    console.log(` ${this.numberOfWheels} ruedas`);
    console.log(` ${this.numberOfPeople} ocupantes`);
            }
}

const aCar = new Car (110, 'renault');
const aBus = new Bus (300, 'mercedes');

aCar.print();
aBus.print();