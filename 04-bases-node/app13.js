/**
* Ejercicio - Configuracion de Yargs Independiente
* Utilizara el multiplicardor4.js que tendra la opcion
* para aceptar de parametro la bandera -l --listar
*
* Se cort6 toda la logica de Yargs y se pas6 a la carpeta que se creo llamada
* "config" dentro de config se creo un archivo llamado yargs.js por lo tanto
* en este archivo app13.js se hace un require a yargs que esta en la carpeta
* antes mencionada.
*/


const { crearArchivo } = require('./helpers/multiplicar4')

const argv = require('./config/yargs');//Se require el archivo yargs.js que esta en config
//pero se iguala a un objeto llamado argv para que no cambie ninguna logica


// console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err))


/*
 * La aplicacion en este punto hace lo siguiente, crear la tabla del 66  y listar node app12 --base=66 --listar
 * node app12 -b 66 -l
 *
 * Crear la tabal 66 sin imprimir en consola 
 * node app13 -b 66 
 * node app13 --base=66
 */
