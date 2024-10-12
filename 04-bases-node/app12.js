/* Ejercicio - Agregar opcion -1 o --listar
* Utilizara el multiplicaré4.js que tendra la opcion
* para aceptar de pardmetro la bandera -1 --listar
* listar sirve para imprimir en consola, si no se elige entonces
* solo creara el archivo.
*/


const { crearArchivo } = require('./helpers/multiplicar4');


const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      //NAN = Not a number
      throw 'La base tiene que ser un numero'
    }
    return true; //Esta es la parte mas importante para lanzar la validacion
  })
  .argv

console.clear();
console.log(argv);

//Se envian dos argumentos el valor de base que es numerico y listar que es booleano

crearArchivo(argv.b, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err))

/*
 * Crea la tabla del 66 y listar node app12 --base=66 --listar
 * node app12 -b 66 -l
 *
 * crear la tabla 66 sin imprimir en consola 
 * node app12 -b 66
 * node app12 --base=66
 */
