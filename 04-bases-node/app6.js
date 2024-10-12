/*
 * Ejercicio - Conversion a funcion promesa a Async en multiplicar3.js
 * ----------------------Mejorando el codigo opcion 2------------------
 *
 *  Aca se manda a llamar la destructuracion de multiplicar3 ahora ya tiene permisos para 
 *  Importar crearArchivo se transformo la promesa en una funcion tipo Async una funcion asincrono 
 *  para que ejecute mas optimizado que la promesa
 *
 *  Esta funcion async maneja el exito con el try y err con catch
 */



const { crearArchivo } = require('./helpers/multiplicar3');

//Se creo la carpeta helpers para crear toda la logica de la aplicacion en un archivo 
//dentro de esta carpeta llamadp multiplicar


console.clear();

const base = 2;

crearArchivo(base)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err))

/*
 * El proyecto posterior trata de crear documentacion y poder trabajar desde la consola
 * esta aplicacion  es decir que por ejemplo en la linea de comandos se ingresa lo 
 * siguiente : node app7 --base=9 limit=12, entonces hara las tablas del 9 al 12 por ejemplo
 *. Tambien se puede usar para informacion de la App por ejemplo su version o banderas
 * que se pueden utilizar en la aplicacion
 */

