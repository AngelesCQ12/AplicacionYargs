//Desestructura y pide la propiedad especifica de usuarios.js Llamada getUsuarioSync
const { getUsuarioSync } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');//lnicia un conteo de cronometro de ejecuci6n

// Imprime la informacion del usuario 1 // Instrucci6n bloqueante
const usuario1 = getUsuarioSync( 1 );// Se tarda tres segundos en responder
console.log('Usuario 1:', usuario1);

// Imprime Ia informacion del usuario 2 // Instruccién bloqueante
const usuario2 = getUsuarioSync( 2 ); //Se tarda tres segundos en responder
console.log('Usuario 2:', usuario2);

console.log('Fin de programa');
console.timeEnd('inicio');// Termina el conteo o cronómetro de ejecución 6.00
// Esto es un problema en este estilo de programación ya que el programa puede
// tardar mucho menos si se utilizan funciones no bloqueantes.
// se recomienda no utilizar este tipo de programación.