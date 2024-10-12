
const { crearArchivo } = require('./helpers/multiplicar6')
const colors = require('colors')
const argv = require('./config/yargs4')

console.clear();

console.log(argv);


crearArchivo(argv.b, argv.l, argv.h, argv.t)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err => console.log(err))

