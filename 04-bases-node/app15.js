const { crearArchivo } = require('./helpers/multiplicar4');
const colors = require('colors');
const argv = require('./config/yargs2');

console.clear();

console.log(argv);


crearArchivo(argv.b, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err => console.log(err))

/*
* Tarea: Modificar la aplicacidén para que acepte otra bandera llamada --hasta o - h
* 1 - Arregle el problema de los colores en el archivo de texto
* 2 - Agregar --hasta o - h para decir hasta que tabla llegara la aplicacién
* Ejemplo node appl6 --base=1 --hasta=10 -l
* Da como resutlado el despligue en consola de las tablas del hasta el 10 en consola
* y tambien existira un archivo que diga tabla-1-hasta-10.txt
* Las tablas de deben de desplegar de una forma agradable y coherente.
*/
