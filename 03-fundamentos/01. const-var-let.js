// Problemas con el var - explique con este ejemplo
console.log('Trabajando con VAR');
var nombre = 'Bill'

if(true){
    nombre = 'Stve'
}

console.log(nombre);

// Implementaciones con let ES6 - Explique su ambito
console.log('Trabajando con LET');
let nombre2 = 'Dennis'

if (true) {
    let nombre2 = 'Richie'
    console.log(nombre2);
}

console.log(nombre2);

// Implementacion de CONST - Explique su ambito
console.log('uso de constantes');

const nombre3 = 'Woziniak'

if (true) {
    const nombre3 = 'Pedro'

    console.log(nombre3);
}

console.log(nombre3);