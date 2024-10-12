const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    //defaull: false, se quita ya que esta defualt en la app principal
    describe: 'Muestra la tabla en consola'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'Fin de la tabla que se quiere operar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      //NAN = Not a number
      throw 'La base tiene que ser un numero'
    }
    return true; //Esta es la parte mas importante para lanzar la validacion
  })
  .argv


module.exports = argv;