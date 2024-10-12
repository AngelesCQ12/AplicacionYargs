/*
 * Parte logica de yargs, solo se corto y pego aca por el momento 
 * no tiene ninguno cambio la logica de yargs.js
 */


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


//Dando permisos de exportacion a todo el programa por eso se iguala a argv el module.exports

module.exports = argv;