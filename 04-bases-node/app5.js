/*
 * Ejercicio -Conversion a funcion promesa en multiplicar2
 * ------------------Mejorando el codigo opcion 1------------
 *  Aca se manda a llamar la destructuracion de multiplicar2
 *  que ahora ya tiene permisos para imporar crearArchivo
 *  aca se transformo en Promesas las funciones flechas
 */

const { crearArchivo } = require("./helpers/multiplicar2")


/*
 * Se creo la carptea helpers para crear toda la logica de la aplicacion  en un archivo dentro
 * de esta carpeta llamado multiplicar2
 */


console.clear();

const base = 31;

/*
 * Cuando se utiliza el .tne sirve para ejecutar el resolve de la promesa (exit)
 * Cuando se utiliza el .catch sirve para ejecutar el reject de la promesa (error);
 */

crearArchivo(base)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err))
