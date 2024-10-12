//Funcion básica
function dividir (a, b = 0){
    return a/b;
}

console.log('Uso de funcion basica');
console.log(dividir(10,20));
console.log(dividir(8,2));

//Funcion Flecha
const dividir2 = (a, b = 0) => {
    return a / b;
}

const dividir3 = (a, b=0) => a / b;

const saludar = () => 'Hola mundo'

console.log('Uso de funcion Flecha');
console.log(dividir2(100,200));
console.log(dividir2(200,32));
console.log(dividir2(900,2));
console.log(dividir2(5,2));
console.log(saludar());
