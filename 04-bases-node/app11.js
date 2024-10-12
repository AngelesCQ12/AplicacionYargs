/* Ejercicio - operando la aplicacion con yargs inical
* Aca se tienen configurado que se puede caputura -b o --base y que se pueda
* crear la tabla deseada en un archivo mediante peticiones en consola
* por ejemplo node app11 --base=10 , esto crea el archivo de la tabla del 10
* Dando inicio al uso del paquete yars
*/

//utiliza la version de multiplicacr3.js que se encuentra en helpers
const { crearArchivo } = require('./helpers/multiplicar3');

const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      //NAN = Not a number
      throw 'La base tiene que ser un numero'
    }
    return true; //Esta es la parte mas importante para lanzar la validacion
  })
  .argv


// console.clear();

console.log(argv);

//se agrego la tabla especifico con la base y se dispara el error si no es un numero


crearArchivo(argv.b)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err))

/*
 * Uso de yargs, ver el resultaddo de escribir en consola
 * node app11 -b 17
 * node app11 --base=17
 */