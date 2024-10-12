/*
 * Ejercicio - para separar la logica de la aplicacion con el archivo principal del mismo
 *
 * Aca se manda a llamar la destructuracion de multiplicar.js que ahora ya tiene 
 * permisos para importar crearArchivo
 */

const { crearArchivo } = require('./helpers/multiplicar');

/*
 * Se creo la carpeta helpers para crear toda la logica de la aplicacion dentro
 * de el archivo multiplicar.js
 */

console.clear();

const base = 1;

crearArchivo(base);

