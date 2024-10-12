/*-
 * Ejercicio - crear una tabla desde la linea de comandos
 * Ejemplo escribir en la linea de comandos node app8 --base=19
 */


const { crearArchivo } = require('./helpers/multiplicar3');


//CAPTURAR EL TERCER ARGUMENTO, se ingresa en consola node app8 --base=5
const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');


//Esta destructuracion esta capturando por posicion es es un incoveniente
//Se puede comprobar sin argumentos node app8
//
//Esto tiene muchos incovenientes ya que acepta cualquier tipo de parametros.
//Por ejemplo node app8 --limite=40 --base=10, hace la tabla del 40 por ejemplo


crearArchivo(base)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err))


/*-
 * Para correr el app8 es necesario ingresar lo siguiente node app8 --base=12 
 * en consola. Por ejemplo si utilizamos en linea de comandos node --help tengo un manual
 * completo de ayuda. Esto lo podemos aplicar para hacer un manual para el uso de nuetra propia
 * aplicacion. Todo esto es pensado para validar nuetra aplicacion
 */
