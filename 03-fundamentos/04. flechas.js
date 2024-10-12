//Funcion básica
function sumar (a, b = 0){
    return a+b;
}

console.log('Uso de funcion basica');
console.log(sumar(10,20));
console.log(sumar(8));

//Funcion Flecha
const sumar2 = (a, b = 0) => {
    return a + b;
}

const sumar3 = (a, b=0) => a + b;

const saludar = () => 'Hola mundo'

console.log('Uso de funcion Flecha');
console.log(sumar2(100,200));
console.log(sumar2(200));
console.log(sumar2(500+500));
console.log(sumar2(900));
console.log(saludar());
