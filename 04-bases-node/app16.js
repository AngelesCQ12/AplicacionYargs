/*
 * Ejercicio - Que hace las tablas de multiplicar --hasta -h
 * node app16 --base=1 --hasta=3
 */

const { crearArchivo } = require('./helpers/multiplicar5')
const colors = require('colors')
const argv = require('./config/yargs3')

console.clear();

console.log(argv);


crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err => console.log(err))
