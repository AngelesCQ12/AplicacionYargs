/*
 * Se agrego la bandero limite
 */

const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base inicial para la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    //defaull: false, se quita ya que esta defualt en la app principal
    describe: 'Nos muestra la tabla en consola'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: false, // no es requerido, si no pasa el "hasta" es igual a base
    describe: 'Nos muestra el fin de la tabla que se desea operar'
  })
  // Se utiliza 't' en lugar de 'li' porque en yargs los alias cortos deben ser de un solo carácter. 
  // 'li' no se puede usar como alias corto (-li) y tendría que invocarse con --li. 
  // Para mantener el alias corto y sencillo, se ha decidido utilizar 't' --tope en lugar de -li o --limite.
  .option('t', {
    alias: 'tope',
    type: 'number',
    demandOption: false,
    describe: 'Nos muestra hasta donde se desea que todas las tablas lleguen'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      //NAN = Not a number
      throw 'La base debe ser un numero'
    }
    if (argv.h != null && isNaN(argv.h)) {
      //NAN = Not a number
      throw 'El valor de hasta debe ser un numero'
    }
    if (argv.t != null && isNaN(argv.t)) {
      //NAN = Not a number
      throw 'El valor de tope debe ser un numero'
    }
    return true; //Esta es la parte mas importante para lanzar la validacion
  })
  .argv


module.exports = argv;